import { Nav } from "react-bootstrap";
import { Tweets } from "../../compontens/Tweets";
import { User } from "../../types/User";
import { Tweet } from "../../types/Tweets";
import { useLoaderData } from "react-router-dom";
import useUserStore from "../../stores/UserStore";
import useTweetStore from "../../stores/TweetStore";
import { useEffect, useState } from "react";
import { ClipLoader } from "react-spinners";
import _shuffle from 'lodash/shuffle';
export async function getUsersPosts() {
  const responseUsers = await fetch("https://jsonplaceholder.typicode.com/users")
  const responseTweets = await fetch("https://jsonplaceholder.typicode.com/posts")
  const usersData = await responseUsers.json() as User[]
  const usersTweets = await responseTweets.json() as Tweet[]
  return {usersData,usersTweets};
  }

const HomePage = () => {
  const {usersData,usersTweets} = useLoaderData() as {usersData:User[],usersTweets:Tweet[]}
  const shuffledTweets = _shuffle(usersTweets)
  const { setUsers } = useUserStore();
  const { setTweets } = useTweetStore();
  const [loading,setLoading] = useState(true)
  useEffect(() => {
      setUsers(usersData)
      setTweets(shuffledTweets)
      setLoading(false)
  },[]);
  return (
    <>
    {loading ? <div className="flex justify-center items-center h-full"><ClipLoader color="#1d9bf0" /></div> :
      <>
      <Nav variant="underline" defaultActiveKey="tweets"className="gap-0">
        <Nav.Item className="flex-1">
          <Nav.Link eventKey="tweets" className="text-white text-center">Tweets</Nav.Link>
        </Nav.Item>
      </Nav>
      <Tweets></Tweets>
      </>
    }
    </>
  )
}

export default HomePage
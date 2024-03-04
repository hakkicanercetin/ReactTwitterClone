import { Link } from "react-router-dom";
import { CommentIcon, LikeIcon, RetweetIcon, SaveIcon, ShareIcon, VerifiedIcon } from "./iconsComponents/icon";
import { Tweet } from "../types/Tweets";
import { User } from "../types/User";
import useSavedTweets from "../stores/SavedStore";

type TweetProp ={
  userId? : string
}

export function Tweets({userId}:TweetProp)
{
    const tweetStorage:{ state: { tweets: Tweet[] } } = JSON.parse(localStorage.getItem("tweet-storage")!)
    const userStorage:{ state: { users: User[] } } = JSON.parse(localStorage.getItem("user-storage")!)
    const { savedTweets } = useSavedTweets()
    return(
        <>
    {tweetStorage.state.tweets.map((tweet,index) => {
        const user = userStorage.state.users.find(user => user.id === tweet.userId)
        if(userId == String(tweet.userId) || !userId){
        /* if(savedTweets.find(stw=>tweet.id == stw.tweet.id)){} */
    return(
        <div className="tweet my-[25px] mx-auto width-[598px] py-0 px-4 border-b-2" key={index}>
          <div className="tweet-author h-[48px] mt-3 flex items-center mb-1 text-[15px]">
          <img src={"https://placehold.co/400x400/0097a7/ffffff?text="+user?.name[0]} alt="" className="w-12 h-12 mr-3 rounded-full" />
             <Link to={"/users/"+user?.id}>
              <div className="name text-white flex items-center font-bold">
              {user?.name}
              <VerifiedIcon/>
              </div>
              <div className="username text-[#6e767d]">@{user?.username}</div>
            </Link>
          </div>
            <div className="tweet-content py-3 px-0">
            <p className="text-[23px] leading-7 text-[#fff] overflow-hidden">{tweet.body}</p>
            </div>
            <div className="tweet-stats h-[53px] flex items-center text-[#6e767d] text-[15px] border-y-[1px] border-y-solid border-y-[#2f3336] gap-x-2">
              <span>
                100 Retweet
              </span>
              <span>
                100 Likes
              </span>
            </div>
            <div className="tweet-actions h-12 flex items-center text-white justify-between">
              <span><CommentIcon/></span>
              <span><RetweetIcon/></span>
              <span><LikeIcon/></span>
              <span><SaveIcon tweet={tweet} saved={!!savedTweets.find(t => t.tweet.id == tweet.id)}/></span>
              <span><ShareIcon/></span>
            </div>
          </div>
    )}
})}
</>
    )
}
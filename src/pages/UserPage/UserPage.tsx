import { Link, useParams } from "react-router-dom";
import { Tweets } from "../../compontens/Tweets";
import { User } from "../../types/User";
import { Nav } from "react-bootstrap";

export function UserPage(){
    const { userId } = useParams()
    const userStorage:{ state: { users: User[] } } = JSON.parse(localStorage.getItem("user-storage")!)
    const user = userStorage?.state.users.find(user => user.id.toString() === userId);
    return(
        <div className="w-[598px]">
            <div className=" h-[53px] flex items-center">
            <div className="w-[56px] h-[53px] flex items-center justify-center ">
            <Link to={"/"} className="w-[30px] h-[30px] rounded-full hover:bg-[#eff3f41a] transition-colors flex items-center justify-center">
             <svg viewBox="0 0 24 24" width={20} height={20}><path fill="#fff" d="M7.414 13l5.043 5.04-1.414 1.42L3.586 12l7.457-7.46 1.414 1.42L7.414 11H21v2H7.414z"></path>
            </svg>
            </Link>
            </div>
            <div className="flex flex-col">
                <div className="mb-1">{user?.name}</div>
                <div className="h-2 bg-slate-700 rounded w-[35%]"></div>
            </div>
            </div>
            <div className="h-[200px] bg-slate-700">
            </div>
            <div className="h-[140px] w-[140px] mt-[-11%] px-2">
                <img className="rounded-full" src={"https://placehold.co/400x400/0097a7/ffffff?text="+user?.name[0]} alt="" />
            </div>
            <div className="px-2">
                <h4 className="mb-1">{user?.name}</h4>
                <h6 className="text-[#71767b]">@{user?.username.toLowerCase()}</h6>
                <div className="h-2 bg-slate-700 rounded my-2 w-[25%]"></div>
                <div className="flex gap-x-1.5">
                    <div className="h-2 bg-slate-700 rounded my-2 w-[12%]"></div>
                    <div className="h-2 bg-slate-700 rounded my-2 w-[12%]"></div>
                </div>
            </div>
            <Nav variant="underline" defaultActiveKey={"tweets"} className="gap-0">
                <Nav.Item className="flex-1">
                    <Nav.Link as={Nav} eventKey="tweets" className="text-white text-center">Tweets</Nav.Link>
                </Nav.Item>
                <Nav.Item className="flex-1">
                    <Nav.Link eventKey="disabled" disabled className="text-white text-center">Replies</Nav.Link>
                </Nav.Item>
                <Nav.Item className="flex-1">
                    <Nav.Link eventKey="disabled" disabled className="text-white text-center">Highlights</Nav.Link>
                </Nav.Item>
                <Nav.Item className="flex-1">
                    <Nav.Link eventKey="disabled" disabled className="text-white text-center">Article</Nav.Link>
                </Nav.Item>
                <Nav.Item className="flex-1">
                    <Nav.Link eventKey="disabled" disabled className="text-white text-center">Media</Nav.Link>
                </Nav.Item>
                <Nav.Item className="flex-1">
                    <Nav.Link eventKey="disabled" disabled className="text-white text-center">Likes</Nav.Link>
                </Nav.Item>
            </Nav>
            <Tweets userId={userId}></Tweets>
        </div>
    )
}
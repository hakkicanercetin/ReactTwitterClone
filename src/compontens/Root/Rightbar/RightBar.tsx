import { Topics } from "./Topics";
import { Search } from "./Search";

export function RightBar(){
    return(
        <aside className="w-[350px] mr-2.5 h-screen sticky top-0">
            <Search/>
            <Topics/>
        </aside>
    )
}
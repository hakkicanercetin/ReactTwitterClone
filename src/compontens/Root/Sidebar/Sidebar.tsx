import { Logo } from "./Logo";
import { Menu } from "./SidebarMenu";

export function Sidebar(){
    return(
        <aside className="w-[275px] h-screen px-2 sticky top-0">
            <Logo/>
            <Menu/>
        </aside>
    )
}
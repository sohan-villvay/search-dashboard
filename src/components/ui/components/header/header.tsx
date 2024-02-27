import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ModeToggle } from "../theme/mode-toggle";


const Header = () => {
  return (

    <div className="fixed z-10 top-0 left-0 right-0 h-16 p-3 pl-4 pr-4">
      <div className="flex items-center justify-between bg-white rounded-full h-14 shadow-sm ">

        <div className="bg-white rounded-full ml-2">
          <img className="h-auto w-20 mx-10 place-self-center bg-none" src="/villvay-logo2.png" alt="Logo" />
        </div>

        <h4 className="text-l font-medium">Welcome, Sohan</h4>

        <div className="mr-2 mt-1">

          <DropdownMenu >
            <DropdownMenuTrigger>
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>SD</AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Billing</DropdownMenuItem>
              <DropdownMenuItem>Team</DropdownMenuItem>
              <DropdownMenuItem>Subscription</DropdownMenuItem>
              <DropdownMenuItem>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>


        </div>
      </div>
    </div>

  )
}

export default Header;
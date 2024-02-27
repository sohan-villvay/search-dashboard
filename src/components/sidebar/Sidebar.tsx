import { HomeIcon, VercelLogoIcon, HeartIcon } from '@radix-ui/react-icons'
import SidebarItem from './SidebarItem'

interface ISidebarItem {
  name: string;
  icon: any;
  path: string;
}

const items: ISidebarItem[] = [
  {
    name: "Home",
    icon: HomeIcon,
    path: "/"
  },
  {
    name: "Synonyms",
    icon: VercelLogoIcon,
    path: "/synonyms"
  },
  {
    name: "Curations",
    icon: HeartIcon,
    path: "/curations"
  }
];

const Sidebar = () => {
  return (

    <div className="fixed top-20 left-4 z-10 w-60 h-screen p-6 bg-white shadow-lg rounded-3xl">
      <div className="flex flex-col space-y-14">


        <div className='flex flex-col space-y-1'>
          {items.map((item) => (
            <SidebarItem key={item.path} item={item} />
          ))}

        </div>
      </div>
    </div>

  )
}

export default Sidebar;
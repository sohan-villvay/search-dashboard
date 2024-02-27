import { HomeIcon, VercelLogoIcon} from '@radix-ui/react-icons'
import Link from 'next/link';

interface ISidebarItem{
  name: string;
  icon: any;
  path: string;
}

const SidebarItem = ({item}:{item: ISidebarItem}) => {
  
  const { name, icon:Icon, path } = item;


  return (
    <Link href={path}>
    <div className='flex items-center space-x-2 p-3 hover:bg-slate-100 rounded-lg cursor-pointer'>
      <Icon/>
      <p className="text-sm font-normal">{name}</p>
    </div>
    </Link>
  )
}

export default SidebarItem;
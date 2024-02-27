import { CheckIcon } from "@radix-ui/react-icons"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export function AddNewTag() {
  return (

    <div className="flex flex-row m-2 group">

      <Input placeholder="+" className="rounded-full h-7 w-7 transition-all ease-in-out focus:w-36 duration-300
       p-2 focus:placeholder-transparent group" />

      <Button className="h-7 w-7 rounded-full bg-lime-600/50 ml-1 p-2 invisible group-focus-within:visible">

        <div className="text-white">
          <CheckIcon />
        </div>

      </Button>

    </div>
  )
}

export default AddNewTag;

import {MagnifyingGlassIcon} from "@heroicons/react/24/outline"
const Search = () => {
  return (
    <div className="w-full">
        <div className="flex items-center h-10 bg-amazonclone-yellow rounded">
            <select className="p-2 bg-gray-300 text-black border text-xs xl:text-sm" name="" id="">
                <option value="">All</option>
                <option value="">Deals</option>
                <option value="">Amazon</option>
                <option value="">Computers</option>
                <option value="">Home</option>
                <option value="">Mobiles</option>
            </select>
            <input className="flex grow items-center h-full rounded-l text-black" type="text" />
            <button className="w-[45px]">
                <MagnifyingGlassIcon className="h-[27px] m-auto stroke-slate-900"/>
            </button>
        </div>
    </div>
  )
}

export default Search
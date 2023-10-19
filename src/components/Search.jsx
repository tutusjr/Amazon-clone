import {MagnifyingGlassIcon} from "@heroicons/react/24/outline"
import { useState,useEffect } from "react"
import { callAPI } from "../utils/CallApi"
import { useNavigate, createSearchParams } from "react-router-dom"
const Search = () => {

  const [suggestions, setSuggestions] = useState(null)
  const [searchTerm, setSearchTerm] = useState("")
  const [category, setCategory] = useState("All")
  const navigate = useNavigate()


  const onHandleSubmit = (e) => {
    e.preventDefault();
    navigate({
      pathname: "/search",
      search: `${
        createSearchParams({
          category: `${category}`,
          searchTerm: `${searchTerm}`
        })
      }`
    })

    setSearchTerm("");
    setCategory("All");
  }

  const getSuggestions = () => {
    callAPI('data/suggestions.json')
    .then((suggestionsResults) => {
      setSuggestions(suggestionsResults)
    })
   }

  useEffect(() => {
    getSuggestions()
  })

  return (
    <div className="w-full">
        <div className="flex items-center h-10 bg-amazonclone-yellow rounded">
            <select onChange={(e) => setCategory(e.target.value)}
            className="p-2 bg-gray-300 text-black border text-xs xl:text-sm" name="" id="">
                <option value="">All</option>
                <option value="">Deals</option>
                <option value="">Amazon</option>
                <option value="">Computers</option>
                <option value="">Home</option>
                <option value="">Mobiles</option>
            </select>
            <input onChange={(e) => setSearchTerm(e.target.value)} value={searchTerm} className="flex grow items-center h-full rounded-l text-black" type="text" />
            <button onClick={onHandleSubmit} className="w-[45px]">
                <MagnifyingGlassIcon className="h-[27px] m-auto stroke-slate-900"/>
            </button>
        </div>
        { suggestions &&
          <div className="bg-white text-black w-full z-40 absolute">
              {
                  suggestions.filter((suggestion) =>{
                    const currentSearchTerm = searchTerm.toLowerCase();
                    const title = suggestion.title.toLowerCase();
                    return (
                      currentSearchTerm && 
                      title.startsWith(currentSearchTerm) && 
                      title !== currentSearchTerm
                    )
                  })
                  .slice(0,10)
                  .map((suggestion) => (
                    <div key={suggestion.id} onClick={() => setSearchTerm(suggestion.title)}>
                      {suggestion.title}
                    </div>
                  ))
              }
          </div>
        }
    </div>
  )
}

export default Search
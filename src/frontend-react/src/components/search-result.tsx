import sendPng from '../assets/send.png'
import { useRef } from 'react'

export function SearchResult() {
  const refSearch = useRef(null)

  const handleSearch = () => {
    if (refSearch.current !== null) {
      console.log(refSearch.current.value)
    }
  }
  return (
    <div>
      <div className="relative">
        <input
          className="w-72 h-8 text-white placeholder:text-white bg-white/50 rounded-lg pl-2"
          placeholder="Search"
          ref={refSearch}
          type="text"
        />
        <div className="absolute top-1.5 right-3">
          <button onClick={handleSearch}>
            <img src={sendPng} alt="" />
          </button>
        </div>
      </div>
    </div>
  )
}

import React, { useContext } from 'react'
import SearchControl from '../component/SearchControl/SearchControl'
import SearchedList from '../component/SearchedList/SearchedList'
import { WebContext } from '../context/Context'

function Main() {
  const {allGenerate}=useContext(WebContext)
  return (
    <div>
      <SearchControl/>
      <SearchedList entries={allGenerate}/>
    </div>
  )
}

export default Main
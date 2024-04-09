
import { useState } from 'react'
import './App.css'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Blogs from './components/Header/Blogs/Blogs'
import Header from './components/Header/Header'

function App() {
  const [bookmarks, setBookmarks]=useState([])
  const [readingtime, setReadingtime]= useState(0)
  const handleaddBookmark=blog=>{
    const newbookMarks=[...bookmarks,blog];
    setBookmarks(newbookMarks)
  }
  const handleReadingtime =time=>{
    const newReadingtime= readingtime+time;
    setReadingtime(newReadingtime)
  }
  

  return (
    <>
      
<Header></Header>
<div className='md:flex w-2/3 '>
<Blogs handleaddBookmark={handleaddBookmark} handleReadingtime={handleReadingtime}></Blogs>
<Bookmarks bookmarks={bookmarks} readingtime={readingtime}></Bookmarks>
</div>
      
    </>
  )
}

export default App


import './App.css'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Blogs from './components/Header/Blogs/Blogs'
import Header from './components/Header/Header'

function App() {
  

  return (
    <>
      
<Header></Header>
<div className='md:flex w-2/3 '>
<Blogs></Blogs>
<Bookmarks></Bookmarks>
</div>
      
    </>
  )
}

export default App

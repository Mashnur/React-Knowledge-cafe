import { useEffect } from "react";
import { useState } from "react";
import Blog from "./Blog";


const Blogs = ({handleaddBookmark ,handleReadingtime}) => {
    const [Blogs,setBlogs]=useState([])
    useEffect(()=>{
        fetch('blogs.json')
        .then(res=>res.json())
        .then(data=>setBlogs(data))
    },[])
    return (
        <div className="md:w-2/3">
            <h3 className="">Blogs:{Blogs.length}</h3>
            {
                Blogs.map(blog=><Blog blog={blog} key={blog.id} handleaddBookmark={handleaddBookmark} handleReadingtime={handleReadingtime}> </Blog>)
            }
            
        </div>
    );
};

export default Blogs;
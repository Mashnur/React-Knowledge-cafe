import PropTypes from 'prop-types';
import { FaBookmark} from "react-icons/fa";

const Blog = ({ blog ,handleaddBookmark,handleReadingtime}) => {
    console.log(blog)
    const {title, author, cover,author_img, posted_date,hashtags,reading_time}= blog
    return (
        <div className='mb-20'>
            <h3 className='text-3xl'>{title}</h3>
            <p>
                {
                  hashtags.map(hash=><span><a href="">#{hash}</a></span>)
                }
            </p>
            <img src={cover } alt={`Cover picture of title ${title}`} />
            <div className='flex justify-between mb-4'>
                <div className='flex'>
                   
                    <img className='w-14 mb-8' src={author_img} alt="" />
                    <div className='ml-6'>
                        <h3 className='text-3xl '>{author}</h3>
                        <p>{posted_date}</p>
                        <button onClick={()=>handleReadingtime(reading_time)}>Mark as Read</button>

                    </div>

                </div>
                <div>
                    <span>{reading_time}min read </span>
                    <button onClick={()=>handleaddBookmark(blog)} className='text-2xl ml-2 text-fuchsia-300'><FaBookmark></FaBookmark></button>
                    

                </div>
            </div>
            
        </div>
    );
};
Blog .PropTypes={
    blog:PropTypes.object.isRequired
}

export default Blog;
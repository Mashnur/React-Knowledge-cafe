import Bookmark from "./Bookmark";


const Bookmarks = ({bookmarks,readingtime}) => {
    return (
        <div className="md:w-1/3 bg-gray-200 ml-4">
       <div>
       <h3 className="text-3xl text-center">Reading Time :{readingtime}</h3>
       </div>
            <h3 className="text-3xl text-center">Bookmarks Blog:{bookmarks.length}</h3>
            {
                bookmarks.map(bookmark=><Bookmark bookmark={bookmark} key={bookmark.id}></Bookmark>)
            }
            
        </div>
    );
};

export default Bookmarks;
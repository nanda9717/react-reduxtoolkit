import { useSelector, useDispatch } from 'react-redux';
import { setNewBlog } from '../redux/slices/blogs/blogSlice';

const Blogs = () => {

    const dispatch = useDispatch()

    const handleAddBlog = () => {
        dispatch(setNewBlog({ id:6, title:'Title Six', body:'Body Six Here'}))
    }

    const { blogList } = useSelector((state) => state.blogs );

    return (
            <div className="card">
                <h2>Blogs Page</h2>
                <h3>Blog Listing</h3>
                <button onClick={()=>handleAddBlog()}>Add New</button>
                <ul>
                    { blogList && blogList.map((row, index) => {
                        return(
                            <li key={index}>{row.title} - {row.body}</li>
                        )
                    })}

                    { (blogList.length === 0) ? <li>No Data Found</li> : '' }
                </ul>
            </div>
    )
}
  
export default Blogs
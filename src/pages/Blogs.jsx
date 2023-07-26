import { useSelector, useDispatch } from 'react-redux';
import { setBlogList, setLoading } from '@/redux/slices/blogs/blogSlice';
import { useEffect } from 'react';
import { getBlogsList } from '@/services/blog';

const Blogs = () => {

    const dispatch = useDispatch()

    const handleAddBlog = async () => {
        //dispatch(setBlogList([...blogList, { id:6, title:'Title Six', body:'Body Six Here'}]))
    }

    const { blogList, loading } = useSelector((state) => state.blogs );

    useEffect(()=>{
        if(blogList.length === 0){
            dispatch(setLoading(true));
            (async()=>{
                const blogs = await getBlogsList();
                dispatch(setBlogList(blogs));
                dispatch(setLoading(false));
            })()
        }
    },[])

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

                    { (loading) ? <li>Loading...</li> : (blogList.length === 0) ? <li>No Data Found</li> : '' }
                </ul>
            </div>
    )
}
  
export default Blogs
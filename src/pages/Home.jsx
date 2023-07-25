import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { setBlogList, setLoading } from '../redux/slices/blogs/blogSlice';
import { getBlogsList } from '../services/blog';

const Home = () => {

    const dispatch = useDispatch()
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
                <h2>Home Page</h2>
                <h3>Latest Blogs</h3>
                <ul>
                    {blogList && blogList.slice(-3).map((row,index) => {
                        return(
                          <li key={index}>{row.title}</li>
                        )
                    })}
                    { (loading) ? <li>Loading...</li> : (blogList.length === 0) ? <li>No Data Found</li> : '' }
                </ul>
            </div>
    )
}
  
export default Home
  
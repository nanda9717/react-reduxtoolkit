import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

const Home = () => {

    const { blogList } = useSelector((state) => state.blogs );

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
                    { (blogList.length === 0) ? <li>No Data Found</li> : '' }
                </ul>
            </div>
    )
}
  
export default Home
  
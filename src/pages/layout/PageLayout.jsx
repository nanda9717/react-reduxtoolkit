import { Link, Outlet } from "react-router-dom"

function PageLayout(props) {
    return (
        <div>
            <div>
                <h4>Header</h4>
                <Link className="link" to='/'>Home</Link>
                <Link className="link" to='/about'>About</Link>
                <Link className="link" to='/contact'>Contact</Link>
            </div>
            <div className="card">
                <Outlet />
            </div>
            <div>
                <h4>Footer</h4>
            </div>
        </div>
    )
  }
  
  export default PageLayout
  
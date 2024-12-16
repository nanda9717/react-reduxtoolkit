import { NavLink, Outlet } from "react-router-dom";
import Header from "./Header";
import Container from '@mui/material/Container';
import { Grid } from "@mui/material";
import { ToastContainer } from 'react-toastify';

function PageLayout(props) {
    return (
        <div>
            <div>
                <Header />
            </div>
            <Grid>
                <Outlet />
            </Grid>
            <Grid sx={{'&.MuiContainer-root':{ padding: '0px' }, textAlign:'center'}}>
                <Grid sx={{background:'#d3d0d0', padding:'18px 0px'}}>
                    <NavLink className="link" activeclasscame='active' to='/'>Home</NavLink>
                    <NavLink className="link" activeclasscame='active' to='/about'>About</NavLink>
                    <NavLink className="link" activeclasscame='active' to='/contact'>Contact</NavLink>
                    <NavLink className="link" activeclasscame='active' to='/blogs'>Blogs</NavLink>
                </Grid>
            </Grid>
            <ToastContainer />
        </div>
    )
  }
  
  export default PageLayout
  
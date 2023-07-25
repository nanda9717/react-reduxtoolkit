import { Link, Outlet } from "react-router-dom";
import Header from "./Header";
import Container from '@mui/material/Container';
import { Grid } from "@mui/material";

function PageLayout(props) {
    return (
        <div>
            <div>
                <Header />
            </div>
            <Container maxWidth="lg">
                <Outlet />
            </Container>
            <Container sx={{'&.MuiContainer-root':{ padding: '0px' }}}>
                <Grid sx={{background:'#d3d0d0', padding:'18px 0px'}}>
                    <Link className="link" to='/'>Home</Link>
                    <Link className="link" to='/about'>About</Link>
                    <Link className="link" to='/contact'>Contact</Link>
                    <Link className="link" to='/blogs'>Blogs</Link>
                </Grid>
            </Container>
        </div>
    )
  }
  
  export default PageLayout
  
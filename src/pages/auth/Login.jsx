import Button from "@mui/material/Button";
import * as React from 'react';
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { toast } from '@/utils/common/toast';
import { userLogin } from "@/services/auth/login";
import { useNavigate } from "react-router";
import { setUserData, setIsLoggedIn } from "@/redux/slices/login/loginSlice";
import { useDispatch, useSelector } from "react-redux";

const Login = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { userData, isLoggedIn } = useSelector((state) => state.login);

    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        let email = data.get("email");
        let password = data.get("password");
        if (email === '' || password === '') {
            toast({ message: 'Both fields are required', type: 'error' });
            return false;
        }
        const userData = await userLogin({ email: email, password: password });
        if (userData.status === true) {
            localStorage.setItem("userData", JSON.stringify(userData.data));
            dispatch(setUserData(userData.data));
            dispatch(setIsLoggedIn(true));
            toast({ message: 'User logged in successfully', type: 'success' });
            setTimeout(() => {
                navigate("/");
            }, 3000);
        } else {
            toast({ message: 'Email or password is wrong', type: 'error' });
            return false;
        }
    };

    React.useEffect(() => {
        if (isLoggedIn) {
            navigate("/");
        }
    }, [isLoggedIn])

    return (
        <Container component="main" maxWidth="sm">
            <Box sx={{ boxShadow: 3, borderRadius: 2, px: 4, py: 6, marginTop: 8, display: "flex", flexDirection: "column", alignItems: "center" }}>
                <Typography component="h1" variant="h5">
                    Sign in
                </Typography>
                <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                    <TextField margin="normal" required fullWidth id="email" label="Email Address" name="email" autoComplete="email" autoFocus />
                    <TextField margin="normal" required fullWidth name="password" label="Password" type="password" id="password" autoComplete="current-password" />
                    <FormControlLabel
                        control={<Checkbox value="remember" color="primary" />}
                        label="Remember me"
                    />
                    <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
                        Sign In
                    </Button>
                    <Grid container>
                        <Grid item xs>
                            <Link href="#" variant="body2">Forgot password?</Link>
                        </Grid>
                        <Grid item>
                            <Link href="#" variant="body2">{"Don't have an account? Sign Up"}</Link>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </Container>
    );
}

export default Login
import {
    Box, Button,
    Container,
    FormControl, FormHelperText,
    Grid, IconButton,
    InputAdornment,
    InputLabel,
    OutlinedInput,
    Stack,
    Typography
} from "@mui/material";
import { useState } from "react";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { NavLink } from "react-router-dom";
import Page from "../../layout/Page";
import { HiOutlineUserCircle } from "react-icons/hi";

const validationSchema = Yup.object().shape({
    username: Yup.string()
        .required('Required')
        .trim()
        .min(3, 'Should be at least 3 characters')
        .max(15, 'Should be at most 15 characters')
        .matches(/^[a-z0-9]+$/, 'Only lowercase letters and numbers'),
    password: Yup.string()
        .required('Password is required')
        .min(6, 'Password must be at least 6 characters'),
});

const Login = () => {
    //states
    const [showPassword, setShowPassword] = useState(false)

    //react-hook-form
    const {
        control,
        handleSubmit,
        formState: { errors }
    } = useForm({
        resolver: yupResolver(validationSchema)
    });
    const onSubmit = (data) => console.log(data);


    return (
        <Page title={"Login"}>
            <Grid container spacing={2}>
                <Grid item md={6} sx={{ display: { xs: 'none', md: 'block' } }}>
                    <Stack justifyContent="center" alignItems="center" sx={{ height: "100%", bgcolor: "#00BFA6", }}>
                        <img height="350px" src="/assets/images/login/login2.svg" alt="Login" />
                    </Stack>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Container>
                        <Stack justifyContent="center" alignItems="center" sx={{ height: "100vh" }}>
                            <Box sx={{ maxWidth: 450 }}>
                                <Stack alignItems={"center"}>
                                    <img src="/assets/logo.png" alt="GDN ERP Logo" style={{ maxHeight: "40px" }} />
                                </Stack>
                                <Typography sx={{ mt: 2, mb: 5 }} variant="h5" fontWeight={"bold"} textAlign="center" color={"#00BFA6"}>Golden Infotech ERP System</Typography>
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <Controller
                                        render={({ field, formState }) => (
                                            <FormControl fullWidth sx={{ mt: 2 }} variant="outlined" size="medium">
                                                <InputLabel htmlFor="login-username">Username</InputLabel>
                                                <OutlinedInput
                                                    id="login-username"
                                                    {...field}
                                                    error={!!formState.errors?.username}
                                                    endAdornment={
                                                        <InputAdornment position="end">
                                                            <IconButton
                                                                aria-label="toggle username visibility"
                                                                edge="end" >
                                                                <HiOutlineUserCircle />
                                                            </IconButton>
                                                        </InputAdornment>
                                                    }
                                                    label="Username"
                                                />
                                                {!!formState.errors?.username ?
                                                    <FormHelperText
                                                        error>{errors?.username?.message}</FormHelperText> : ""}

                                            </FormControl>
                                        )}
                                        name="username"
                                        control={control}
                                        defaultValue=""
                                    />
                                    <Controller
                                        render={({ field, formState }) => (
                                            <FormControl sx={{ mt: 2 }} variant="outlined" fullWidth size={"medium"}>
                                                <InputLabel htmlFor="login-password">Password</InputLabel>
                                                <OutlinedInput
                                                    id="login-password"
                                                    type={showPassword ? 'text' : 'password'}
                                                    {...field}
                                                    error={!!formState.errors?.password}
                                                    endAdornment={
                                                        <InputAdornment position="end">
                                                            <IconButton
                                                                aria-label="toggle password visibility"
                                                                onClick={() => setShowPassword(!showPassword)}
                                                                edge="end"
                                                            >
                                                                {showPassword ? <AiFillEyeInvisible /> :
                                                                    <AiFillEye />}
                                                            </IconButton>
                                                        </InputAdornment>
                                                    }
                                                    label="Password"
                                                />
                                                {!!formState.errors?.password ?
                                                    <FormHelperText
                                                        error>{errors?.password?.message}</FormHelperText> : ""}

                                            </FormControl>
                                        )}
                                        name="password"
                                        control={control}
                                        defaultValue=""
                                    />

                                    <Typography my={2}>Forgot Password? <NavLink to="/auth/forgot-password" color="#fff" >Recover now</NavLink></Typography>

                                    {/* <Button disabled={login.isLoading} size="large" fullWidth variant="contained" type="submit" color="primary" sx={{ textTransform: "capitalize", fontWeight: "bold", alignItems: 'center' }}>{login.isLoading && <CircularProgress size={20} sx={{ mr: 2 }} />} Login</Button> */}
                                    <Button size="large" fullWidth variant="contained" type="submit" color="primary" sx={{ textTransform: "capitalize", fontWeight: "bold", alignItems: 'center' }}>Login</Button>
                                </form>
                            </Box>
                        </Stack>
                    </Container>
                </Grid>
            </Grid>
        </Page>
    )
}

export default Login;
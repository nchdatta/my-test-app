import {
    Box, Button,
    Container,
    Divider,
    FormControl, FormHelperText,
    Grid, IconButton,
    InputAdornment,
    InputLabel,
    OutlinedInput,
    Stack,
    Typography
} from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import Page from "../../layout/Page";
import { HiOutlineMail, HiOutlineUserCircle } from "react-icons/hi";

const validationSchema = Yup.object().shape({
    username: Yup.string()
        .required('Required')
        .trim()
        .min(3, 'Should be at least 3 characters')
        .max(15, 'Should be at most 15 characters')
        .matches(/^[a-z0-9]+$/, 'Only lowercase letters and numbers'),
    email: Yup.string()
        .required('Email is required')
        .email('Email is invalid'),
});

const ForgotPassword = () => {
    const { control, handleSubmit, getValues, formState: { errors } } = useForm({ resolver: yupResolver(validationSchema), });
    const navigate = useNavigate();
    // const { mutateAsync, isLoading } = useMutation(data => forgotPasswordFn(data), {
    //     onSuccess: (data) => {
    //         if (data.success) {
    //             toast.success(data.message);
    //             navigate(`/verify-otp?email=${getValues('email')}`);
    //         } else {
    //             toast.error(data.message)
    //         }
    //     }
    // });

    const onSubmit = async (data) => {
        // await mutateAsync(data);
    };



    return (
        <Page title={"Forgot Password"}>
            <Grid container  >
                <Grid item md={6} sx={{ display: { xs: 'none', md: 'block' } }}>
                    <Stack justifyContent="center" alignItems="center" sx={{ height: "100%", bgcolor: "#00BFA6", }}>
                        <img height={550} src="/assets/images/forget-password.png" alt="Forgot Password" />
                    </Stack>

                </Grid>
                <Grid item xs={12} md={6}>
                    <Container>
                        <Stack justifyContent="center" alignItems="center" sx={{ height: "100vh" }}>
                            <Box sx={{ maxWidth: 450 }}>
                                <Stack alignItems={"center"}>
                                    <Link to="/">
                                        <img src="/assets/logo.png" alt="GDN ERP Logo" style={{ maxHeight: "40px" }} />
                                    </Link>
                                </Stack>
                                <Typography sx={{ mt: 2, mb: 1 }} variant="h4" fontWeight={"bold"} textAlign="center" color={"#00BFA6"}>Forgot Password</Typography>
                                <Typography mb={4} variant="body2" textAlign="center" color={"gray"}>Forgot your password? No problem. Just let us know your username, email address.</Typography>

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
                                            <FormControl fullWidth sx={{ mt: 2 }} variant="outlined" size="medium">
                                                <InputLabel htmlFor="login-email">Email</InputLabel>
                                                <OutlinedInput
                                                    id="login-email"
                                                    {...field}
                                                    error={!!formState.errors?.email}
                                                    endAdornment={
                                                        <InputAdornment position="end">
                                                            <IconButton
                                                                aria-label="toggle password visibility"
                                                                edge="end" >
                                                                <HiOutlineMail />
                                                            </IconButton>
                                                        </InputAdornment>
                                                    }
                                                    label="Email"
                                                />
                                                {!!formState.errors?.email ?
                                                    <FormHelperText
                                                        error>{errors?.email?.message}</FormHelperText> : ""}

                                            </FormControl>
                                        )}
                                        name="email"
                                        control={control}
                                        defaultValue=""
                                    />
                                    {/* <Button disabled={isLoading} size="large" fullWidth variant="contained" type="submit" sx={{ textTransform: "capitalize", fontWeight: "bold", mt: 3 }}>Send OTP</Button> */}
                                    <Button size="large" color="primary" fullWidth variant="contained" type="submit" sx={{ textTransform: "capitalize", fontWeight: "bold", mt: 3 }}>Send OTP</Button>
                                </form>
                                <Typography variant="body1" mt={2}>Remember Password? <Link to='/auth/login'>Login</Link> </Typography>
                            </Box>
                        </Stack>
                    </Container>
                </Grid>
            </Grid>
        </Page>
    )
}

export default ForgotPassword;
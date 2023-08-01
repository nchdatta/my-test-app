import {
    Box, Button,
    Container,
    Grid,
    Stack,
    Typography
} from "@mui/material";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import Page from "../../layout/Page";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { IoIosLogIn } from "react-icons/io";
import PasswordField from "../../components/Fields/PasswordField";

const validationSchema = Yup.object().shape({
    password: Yup.string()
        .required('Enter new password')
        .min(6, 'Password must be at least 6 characters')
        .max(40, 'Password must not exceed 40 characters'),
    re_password: Yup.string()
        .required('Retype new password')
        .min(6, 'Password must be at least 6 characters'),
});

const ResetPassword = () => {
    const [query] = useSearchParams()
    const email = query.get('email');
    const navigate = useNavigate();
    const { control, handleSubmit } = useForm({ resolver: yupResolver(validationSchema), });
    // const { mutateAsync, isLoading } = useMutation(data => resetPasswordFn(data), {
    //     onSuccess: (data) => {
    //         if (data.success) {
    //             toast.success(data.message);
    //             navigate('/login');
    //         } else {
    //             toast.error(data.message)
    //         }
    //     }
    // });
    const resetPassword = async ({ password, re_password }) => {
        if (password !== re_password) {
            toast.error("Password not matched.");
            return;
        }
        // await mutateAsync({ email, password });
    };



    return (
        <Page title={"Set New Password"}>
            <Grid container >
                <Container>
                    <Stack justifyContent="center" alignItems="center" sx={{ height: "100vh" }}>
                        <Box sx={{ maxWidth: 450 }}>
                            <Stack alignItems={"center"}>
                                <Link to="/">
                                    <img src="/assets/logo.png" alt="GDN ERP Logo" style={{ maxHeight: "40px" }} />
                                </Link>
                            </Stack>
                            <Typography sx={{ my: 1 }} variant="h4" fontWeight={"bold"} textAlign="center">Reset Password</Typography>
                            <Typography mb={4} variant="body1" textAlign="center" color={"gray"}>Enter new password here.</Typography>

                            <form onSubmit={handleSubmit(resetPassword)}>
                                <PasswordField
                                    name="password"
                                    type="password"
                                    control={control}
                                    label={"New Password"}
                                    placeholder="" errorMsg autoFocus />
                                <br /> <br />
                                <PasswordField
                                    name="re_password"
                                    type="password"
                                    control={control}
                                    label={"Retype New Password"}
                                    placeholder="" errorMsg />

                                {/* <Button size="large" disabled={isLoading} fullWidth variant="contained" type="submit" sx={{ fontWeight: "bold", textTransform: 'capitalize', my: 2 }}>Change Password</Button> */}
                                <Button size="large" fullWidth variant="contained" type="submit" sx={{ fontWeight: "bold", textTransform: 'capitalize', my: 2 }}>Change Password</Button>


                                <Stack direction="row" alignItems="center" gap={1}> Remember? <Link to='/auth/login'><Stack direction="row" alignItems="center" gap={0.8}>Login now <IoIosLogIn size={20} /></Stack></Link></Stack>


                            </form>
                        </Box>
                    </Stack>
                </Container>
            </Grid>
        </Page>
    )
}

export default ResetPassword;
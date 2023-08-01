import {
    Box, Button,
    Container,
    Grid,
    Stack,
    Typography
} from "@mui/material";
import Page from "../../layout/Page";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import OtpInput from 'react-otp-input';
import { useState } from "react";
import { toast } from "react-hot-toast";
import { useMutation } from "@tanstack/react-query";
import { HiOutlineBackspace } from "react-icons/hi";


const OTPVerify = () => {
    const [otp, setOtp] = useState(null);
    const [query] = useSearchParams()
    const email = query.get('email');
    const navigate = useNavigate();
    // const { mutateAsync, isLoading } = useMutation(data => verifyOTPFn(data), {
    //     onSuccess: (data) => {
    //         if (data.success) {
    //             toast.success(data.message);
    //             navigate(`/reset-password?email=${email}`);
    //         } else {
    //             toast.error(data.message)
    //         }
    //     }
    // });

    const handleVerifyOTP = async (e) => {
        e.preventDefault();
        // await mutateAsync({ email, otp });
    };


    return (
        <Page title={"OTP Verification"}>
            <Grid container  >
                <Container>
                    <Stack justifyContent="center" alignItems="center" textAlign="center" sx={{ height: "100vh" }} >
                        <Box sx={{ maxWidth: 450, margin: '0 auto' }} justifyContent="center" alignItems="center" textAlign="center">
                            <Stack alignItems={"center"}>
                                <Link to="/">
                                    <img src="/assets/logo.png" alt="GDN ERP Logo" style={{ maxHeight: "40px" }} />
                                </Link>
                            </Stack>
                            <Typography sx={{ my: 1 }} variant="h4" fontWeight={"bold"} textAlign="center">Enter Verification Code</Typography>
                            <Typography mb={4} variant="body1" textAlign="center" color={"gray"}>Check your email and enter the 4-digit code here.</Typography>

                            <form onSubmit={handleVerifyOTP}>
                                <Stack direction="row" justifyContent="center">
                                    <OtpInput
                                        shouldAutoFocus={true}
                                        value={otp}
                                        onChange={setOtp}
                                        numInputs={4}
                                        inputStyle={{ width: 50, height: 50 }}
                                        renderSeparator={<span> - </span>}
                                        renderInput={(props) => <input {...props} />}
                                    />
                                </Stack>
                                <Stack direction="row" alignItems={"center"} justifyContent="space-between" mt={8}>
                                    <Button onClick={() => navigate(-1)} size="medium" variant="outlined" sx={{ fontWeight: "bold" }}>
                                        <Stack direction="row" alignItems="center" gap={1}><HiOutlineBackspace />Back</Stack>
                                    </Button>
                                    {/* <Button type="submit" disabled={isLoading} size="medium" variant="contained">Verify OTP</Button> */}
                                    <Button type="submit" size="medium" variant="contained">Verify OTP</Button>
                                </Stack>
                            </form>
                        </Box>


                    </Stack>
                </Container>
            </Grid>
        </Page>
    )
}

export default OTPVerify;
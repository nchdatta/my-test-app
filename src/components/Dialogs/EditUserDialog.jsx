import React from 'react';
import { Dialog, DialogContent, DialogTitle, Slide, Typography } from '@mui/material';
import AddForm from '../Forms/AddForm';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup/dist/yup';
import * as Yup from "yup";
import { PNG_JPG_JPEG_GIF } from "../../utils/fileTypes";
import { useQueryClient } from '@tanstack/react-query';
import TextInput from '../Fields/TextInput';
import PhotoAvatarUpload from '../Fields/PhotoAvatarUpload';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="down" ref={ref} {...props} />;
});

const validationSchema = Yup.object().shape({
    name: Yup.string().required("Required."),
    phone: Yup.string().required("Required.")
});

const EditUserDialog = ({ openDialog, setOpenDialog }) => {
    const queryClient = useQueryClient();
    // const { data: user, isLoading } = useGetUserInfo();
    const { control, handleSubmit, } = useForm({
        resolver: yupResolver(validationSchema), mode: "onChange", defaultValues: {
            name: "",
            phone: "",
        }
    });

    const onSubmit = async (data) => {
        // const formData = new FormData();
        // if (!toggle) {
        //     for (const key in { password: undefined, ...restData }) {
        //         formData.append(key, restData[key]);
        //     }
        // } else {
        //     const _data = { password, ...restData };
        //     for (const key in _data) {
        //         formData.append(key, _data[key]);
        //     }
        // }
        // await update.mutateAsync(formData);
    }


    return (
        <Dialog maxWidth="sm" onClose={() => setOpenDialog(!openDialog)} open={openDialog}
            TransitionComponent={Transition}
            TransitionProps={{
                timeout: 500,
            }}
            PaperProps={{
                style: {
                    position: 'fixed',
                    top: 0,
                },
            }}>
            <DialogTitle>
                <Typography variant='h6' fontWeight={"bold"}>Edit Profile</Typography>
            </DialogTitle>
            <DialogContent>
                <AddForm handleSubmit={handleSubmit(onSubmit)} handleBack={() => setOpenDialog(!openDialog)} minHeight='auto' py={0} gradient={false}>
                    <PhotoAvatarUpload
                        name="photo"
                        control={control}
                        fileType={PNG_JPG_JPEG_GIF} />
                    <TextInput
                        name="name"
                        control={control}
                        label={"Full Name"}
                        errorMsg required />
                    <TextInput
                        name="phone"
                        type="tel"
                        control={control}
                        label={"Mobile Number"}
                        errorMsg required />

                </AddForm>
            </DialogContent>
        </Dialog>
    );
};

export default EditUserDialog;
import React from 'react';
import { Dialog, DialogContent, DialogTitle, Slide, Typography } from '@mui/material';
import AddForm from '../Forms/AddForm';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup/dist/yup';
import * as Yup from "yup";
import { useQueryClient } from '@tanstack/react-query';
import TextInput from '../Fields/TextInput';
import MultilineInput from '../Fields/MultilineInput';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="down" ref={ref} {...props} />;
});

const validationSchema = Yup.object().shape({
    name: Yup.string().required("Required."),
    description: Yup.string(),
});

const RoleDialog = ({ openDialog, setOpenDialog, metadata = {} }) => {
    const { id } = metadata;
    const queryClient = useQueryClient();
    const { control, handleSubmit, } = useForm({
        resolver: yupResolver(validationSchema), mode: "onChange", defaultValues: {
            name: "",
            description: "",
        }
    });

    const onSubmit = async (data) => {
        console.log(data)
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
                <Typography variant='h6' fontWeight={"bold"}>{id ? "Edit Role" : "Create a Role"}</Typography>
            </DialogTitle>
            <DialogContent>
                <AddForm handleSubmit={handleSubmit(onSubmit)} handleBack={() => setOpenDialog(!openDialog)} minHeight='auto' py={0} gradient={false}>
                    <TextInput
                        name="name"
                        control={control}
                        autoFocus
                        label={"Role Name"}
                        errorMsg required />

                    <MultilineInput
                        name="description"
                        control={control}
                        label={"Role Description"}
                        errorMsg rows={3} />

                </AddForm>
            </DialogContent>
        </Dialog>
    );
};

export default RoleDialog;
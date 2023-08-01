import * as React from 'react';
import { Dialog, DialogContent, DialogTitle, Divider, Slide, } from '@mui/material';
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import AddForm from '../Forms/AddForm';
import { useForm } from 'react-hook-form';
import TextInput from '../Fields/TextInput';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="down" ref={ref} {...props} />;
});

const validationSchema = Yup.object().shape({
    start_date: Yup.string().required("Required."),
    end_date: Yup.string().required("Required."),
});


const FinalcialYearDialog = ({ openDialog, setOpenDialog, metadata = {} }) => {
    const { id } = metadata;
    const { control, handleSubmit, } = useForm({ resolver: yupResolver(validationSchema), mode: "onChange" });

    const onSubmit = (_data) => {
        console.log(_data)
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
            <DialogTitle>{id ? "Edit Financial Year" : "Create Financial Year"} </DialogTitle>
            <Divider />
            <DialogContent>
                <AddForm handleSubmit={handleSubmit(onSubmit)} gradient={false} minHeight='0' py={1} handleBack={() => setOpenDialog(!openDialog)}>
                    <TextInput
                        name="start_date"
                        type='date'
                        control={control}
                        label={"Start Date"}
                        errorMsg required />

                    <TextInput
                        name="end_date"
                        type='date'
                        control={control}
                        label={"End Date"}
                        errorMsg required />
                </AddForm>

            </DialogContent>
        </Dialog>
    );
}


export default FinalcialYearDialog;
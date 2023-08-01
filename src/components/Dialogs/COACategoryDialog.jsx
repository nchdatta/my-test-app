import * as React from 'react';
import { Dialog, DialogContent, DialogTitle, Divider, Slide, } from '@mui/material';
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import AddForm from '../Forms/AddForm';
import { useForm } from 'react-hook-form';
import TextInput from '../Fields/TextInput';
import MultilineInput from '../Fields/MultilineInput';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="down" ref={ref} {...props} />;
});

const validationSchema = Yup.object().shape({
    category_name: Yup.string().required("Required."),
    category_name_local: Yup.string(),
    description: Yup.string(),
});


const COACategoryDialog = ({ openDialog, setOpenDialog, metadata = {} }) => {
    const { id } = metadata;
    const { control, handleSubmit, } = useForm({ resolver: yupResolver(validationSchema), mode: "onChange" });

    const onSubmit = (data) => {
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
            <DialogTitle>{id ? "Edit COA Category" : "Create a COA Category"} </DialogTitle>
            <Divider />
            <DialogContent>
                <AddForm handleSubmit={handleSubmit(onSubmit)}
                    submitBtn='Create'
                    gradient={false} minHeight='0' py={0}
                    handleBack={() => setOpenDialog(!openDialog)}>

                    <TextInput
                        name="category_name"
                        control={control}
                        label={"Category Name"}
                        errorMsg required />
                    <TextInput
                        name="category_name_local"
                        control={control}
                        label={"Category Name Local"}
                        errorMsg />


                    <MultilineInput
                        name="description"
                        control={control}
                        rows={3}
                        label={"Description"}
                        errorMsg />

                </AddForm>

            </DialogContent>
        </Dialog>
    );
}


export default COACategoryDialog;
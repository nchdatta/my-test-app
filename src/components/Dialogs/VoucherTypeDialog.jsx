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
    name: Yup.string().required("Required."),
    short_name: Yup.string().required("Required."),
    allowed_days: Yup.string().required("Required."),
});


const VoucherTypeDialog = ({ openDialog, setOpenDialog, metadata = {} }) => {
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
            <DialogTitle>{id ? "Edit Voucher Type" : "Create a Voucher Type"} </DialogTitle>
            <Divider />
            <DialogContent>
                <AddForm handleSubmit={handleSubmit(onSubmit)}
                    submitBtn={"Add"}
                    gradient={false} minHeight='0' py={0}
                    handleBack={() => setOpenDialog(!openDialog)}>
                    <TextInput
                        name="name"
                        control={control}
                        label={"Name"}
                        errorMsg required />
                    <TextInput
                        name="short_name"
                        control={control}
                        label={"Short Name"}
                        errorMsg required />
                    <TextInput
                        name="allowed_days"
                        type='number'
                        control={control}
                        label={"Allowed Days"}
                        errorMsg required />
                </AddForm>

            </DialogContent>
        </Dialog>
    );
}


export default VoucherTypeDialog;
import * as React from 'react';
import { Dialog, DialogContent, DialogTitle, Divider, Slide, } from '@mui/material';
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import AddForm from '../Forms/AddForm';
import { useForm } from 'react-hook-form';
import TextInput from '../Fields/TextInput';
import SelectField from '../Fields/SelectField';
import FormSection from '../Forms/FormSection';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="down" ref={ref} {...props} />;
});

const validationSchema = Yup.object().shape({
    opening_date: Yup.string().required("Required."),
    balance: Yup.string().required("Required."),
    account_name: Yup.string(),
    project_name: Yup.string(),
    type: Yup.string().required("Required."),
});


const OpeningBalanceDialog = ({ openDialog, setOpenDialog, metadata = {} }) => {
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
            <DialogTitle>{id ? "Edit Opening Balance" : "Create Opening Balance"} </DialogTitle>
            <Divider />
            <DialogContent>
                <AddForm handleSubmit={handleSubmit(onSubmit)} gradient={false} minHeight='0' py={1} handleBack={() => setOpenDialog(!openDialog)}>
                    <FormSection >
                        <TextInput
                            name="opening_date"
                            type='date'
                            control={control}
                            autoFocus
                            label={"Opening Date"}
                            errorMsg required />
                        <TextInput
                            name="balance"
                            type='number'
                            control={control}
                            label={"Balance"}
                            errorMsg required />
                    </FormSection>

                    <SelectField
                        name="account_name"
                        control={control}
                        label={"Account Name"}
                        data={[]}
                        errorMsg />
                    <SelectField
                        name="project_name"
                        control={control}
                        data={[]}
                        label={"Project Name"}
                        errorMsg />



                    <SelectField
                        name="type"
                        control={control}
                        data={[]}
                        label={"Type"}
                        errorMsg required />
                </AddForm>

            </DialogContent>
        </Dialog>
    );
}


export default OpeningBalanceDialog;
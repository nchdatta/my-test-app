import * as React from 'react';
import { Dialog, DialogContent, DialogTitle, Divider, Slide, } from '@mui/material';
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import AddForm from '../Forms/AddForm';
import { useForm } from 'react-hook-form';
import TextInput from '../Fields/TextInput';
import SelectField from '../Fields/SelectField';


const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="down" ref={ref} {...props} />;
});

const validationSchema = Yup.object().shape({
    account_name: Yup.string().required("Required."),
    account_name_bn: Yup.string(),
    sub_group: Yup.string().required("Required."),
});


const COALedgerDialog = ({ openDialog, setOpenDialog, metadata = {} }) => {
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
            <DialogTitle>{id ? "Edit COA Ledger" : "Create COA Ledger"} </DialogTitle>
            <Divider />
            <DialogContent>
                <AddForm handleSubmit={handleSubmit(onSubmit)}
                    submitBtn='Create'
                    gradient={false} minHeight='0' py={1}
                    handleBack={() => setOpenDialog(!openDialog)}>

                    <TextInput
                        name="account_name"
                        control={control}
                        label={"Account Name"}
                        errorMsg required />
                    <TextInput
                        name="account_name_bn"
                        control={control}
                        label={"Account Name(Bengali)"}
                        errorMsg />

                    <SelectField
                        name="sub_group"
                        control={control}
                        subLabel={false}
                        label={"Select Sub-Group"}
                        data={[
                            { id: 1, name: "Trade Receivables" },
                            { id: 2, name: "Accounts Payables & Provision" }
                        ]}
                        errorMsg required />

                </AddForm>

            </DialogContent>
        </Dialog>
    );
}


export default COALedgerDialog;
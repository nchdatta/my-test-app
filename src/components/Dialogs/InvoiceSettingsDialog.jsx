import * as React from 'react';
import { Dialog, DialogContent, DialogTitle, Divider, Slide, } from '@mui/material';
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import AddForm from '../Forms/AddForm';
import { useForm } from 'react-hook-form';
import SelectField from '../Fields/SelectField';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="down" ref={ref} {...props} />;
});

const validationSchema = Yup.object().shape({
    name: Yup.string().required("Required."),
    group_name: Yup.string().required("Required."),
    opening_balance: Yup.string().required("Required."),
});


const InvoiceSettingsDialog = ({ openDialog, setOpenDialog, metadata = {} }) => {
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
            <DialogTitle>{id ? "Edit Invoice Settings" : "Add New Invoice Settings"} </DialogTitle>
            <Divider />
            <DialogContent>
                <AddForm handleSubmit={handleSubmit(onSubmit)}
                    submitBtn='Create'
                    gradient={false} minHeight='0' py={1}
                    handleBack={() => setOpenDialog(!openDialog)}>

                    <SelectField
                        name="group_name"
                        control={control}
                        subLabel={false}
                        label={"Select Voucher type"}
                        data={[
                            { id: 1, name: "Adjustment Voucher" },
                            { id: 2, name: "Bank Payment" }
                        ]}
                        errorMsg required />
                    <SelectField
                        name="group_name"
                        control={control}
                        subLabel={false}
                        label={"Select Credit Amount"}
                        data={[
                            { id: 1, name: "Asian Consumer Care Pvt Ltd." },
                            { id: 2, name: "Asian Paints (Bangladesh) Ltd." }
                        ]}
                        errorMsg required />

                </AddForm>

            </DialogContent>
        </Dialog>
    );
}


export default InvoiceSettingsDialog;
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
    name: Yup.string().required("Required."),
    group_name: Yup.string().required("Required."),
    opening_balance: Yup.string().required("Required."),
});


const CostCenterDialog = ({ openDialog, setOpenDialog, metadata = {} }) => {
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
            <DialogTitle>{id ? "Edit Cost Center" : "Create a Cost Center"} </DialogTitle>
            <Divider />
            <DialogContent>
                <AddForm handleSubmit={handleSubmit(onSubmit)}
                    submitBtn='Create'
                    gradient={false} minHeight='0' py={1}
                    handleBack={() => setOpenDialog(!openDialog)}>

                    <TextInput
                        name="name"
                        control={control}
                        label={"Name"}
                        errorMsg required />

                    <SelectField
                        name="group_name"
                        control={control}
                        subLabel={false}
                        label={"Select Group Name"}
                        data={[
                            { id: 1, name: "Management Cost" },
                            { id: 2, name: "Test Group" }
                        ]}
                        errorMsg required />
                    <TextInput
                        name="opening_balance"
                        type='number'
                        control={control}
                        label={"Opening Balance"}
                        errorMsg required />

                </AddForm>

            </DialogContent>
        </Dialog>
    );
}


export default CostCenterDialog;
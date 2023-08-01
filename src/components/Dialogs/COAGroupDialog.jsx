import * as React from 'react';
import { Dialog, DialogContent, DialogTitle, Divider, Slide, } from '@mui/material';
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import AddForm from '../Forms/AddForm';
import { useForm } from 'react-hook-form';
import TextInput from '../Fields/TextInput';
import SelectField from '../Fields/SelectField';
import MultilineInput from '../Fields/MultilineInput';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="down" ref={ref} {...props} />;
});

const validationSchema = Yup.object().shape({
    group_name: Yup.string().required("Required."),
    group_category: Yup.string().required("Required."),
    description: Yup.string(),
});


const COAGroupDialog = ({ openDialog, setOpenDialog, metadata = {} }) => {
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
            <DialogTitle>{id ? "Edit Chart of Account (COA)" : "Create Chart of Account (COA)"} </DialogTitle>
            <Divider />
            <DialogContent>
                <AddForm handleSubmit={handleSubmit(onSubmit)}
                    submitBtn='Create'
                    gradient={false} minHeight='0' py={1}
                    handleBack={() => setOpenDialog(!openDialog)}>

                    <TextInput
                        name="group_name"
                        control={control}
                        label={"Group Name"}
                        errorMsg required />

                    <SelectField
                        name="group_category"
                        control={control}
                        subLabel={false}
                        label={"Select Category"}
                        data={[
                            { id: 1, name: "Property & Assets" },
                            { id: 2, name: "Expenditure" }
                        ]}
                        errorMsg required />
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


export default COAGroupDialog;
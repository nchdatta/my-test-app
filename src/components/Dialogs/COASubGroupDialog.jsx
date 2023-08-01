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
    group: Yup.string().required("Required."),
    sub_group_name: Yup.string().required("Required."),
    description: Yup.string(),
});


const COASubGroupDialog = ({ openDialog, setOpenDialog, metadata = {} }) => {
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
            <DialogTitle>{id ? "Edit COA Sub-Group" : "Create COA Sub-Group"} </DialogTitle>
            <Divider />
            <DialogContent>
                <AddForm handleSubmit={handleSubmit(onSubmit)}
                    submitBtn='Create'
                    gradient={false} minHeight='0' py={1}
                    handleBack={() => setOpenDialog(!openDialog)}>

                    <SelectField
                        name="group"
                        control={control}
                        subLabel={false}
                        label={"Select Group"}
                        data={[
                            { id: 1, name: "Current Asset" },
                            { id: 2, name: "Fixed Asset" }
                        ]}
                        errorMsg required />

                    <TextInput
                        name="sub_group_name"
                        control={control}
                        label={"Sub-Group Name"}
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


export default COASubGroupDialog;
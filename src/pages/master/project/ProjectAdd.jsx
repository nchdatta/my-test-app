import React from 'react';
import Page from '../../../layout/Page';
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import PageHeader from '../../../layout/PageHeader';
import AddForm from '../../../components/Forms/AddForm';
import TextInput from '../../../components/Fields/TextInput';
import FormSection from '../../../components/Forms/FormSection';
import SelectField from '../../../components/Fields/SelectField';
import MultilineInput from '../../../components/Fields/MultilineInput';
import { useForm } from 'react-hook-form';


const validationSchema = Yup.object().shape({
    project_no: Yup.string().required("Required."),
    project_name: Yup.string().required("Required."),
    start_date: Yup.string().required("Required."),
    end_date: Yup.string().required("Required."),
    party: Yup.string().required("Required."),
    aging_day: Yup.string().required("Required."),
    description: Yup.string(),
});


const ProjectAdd = () => {
    const { control, handleSubmit, } = useForm({
        resolver: yupResolver(validationSchema),
        mode: "onChange",
        defaultValues: {
            project_no: '',
            project_name: '',
            start_date: '',
            end_date: '',
            party: '',
            aging_day: '',
            description: '',
        }
    });

    const onSubmit = (data) => {
        console.log(data);
    }


    return (
        <Page title='Add a New Project'>
            <PageHeader title="Add a New Project" btn={false}
                breadcrumbLinks={[
                    { label: "Manage Projects", href: '/master/project/manage' }
                ]}
                currentPage="Add a New Project" />


            <AddForm handleSubmit={handleSubmit(onSubmit)} submitBtn='Create' maxWidth={550}>
                <TextInput
                    name="project_no"
                    control={control}
                    label={"Project No."}
                    errorMsg required />
                <TextInput
                    name="project_name"
                    control={control}
                    label={"Project Name"}
                    errorMsg required />
                <FormSection>
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
                </FormSection>

                <SelectField
                    name="party"
                    control={control}
                    subLabel={false}
                    label={"Select Party"}
                    data={[
                        { id: 1, name: "Robi Axiata" },
                        { id: 2, name: "Airtel" }
                    ]}
                    errorMsg required />
                <TextInput
                    name="aging_day"
                    type='number'
                    control={control}
                    label={"Aging Day"}
                    errorMsg required />
                <MultilineInput
                    name="description"
                    control={control}
                    label={"Description"}
                    errorMsg />

            </AddForm>
        </Page>
    );
};

export default ProjectAdd;
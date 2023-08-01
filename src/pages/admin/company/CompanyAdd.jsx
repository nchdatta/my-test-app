import React from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from "yup";
import { useForm } from 'react-hook-form';
import Page from '../../../layout/Page';
import PageHeader from '../../../layout/PageHeader';
import { Paper } from '@mui/material';
import AddForm from '../../../components/Forms/AddForm';
import TextInput from '../../../components/Fields/TextInput';
import FileInput from '../../../components/Fields/FileInput';
import EmailField from '../../../components/Fields/EmailField';
import { PNG_JPG_JPEG_GIF } from '../../../utils/fileTypes';
import FormSection from '../../../components/Forms/FormSection';
import MultilineInput from '../../../components/Fields/MultilineInput';


const validationSchema = Yup.object().shape({
    name: Yup.string().required("Required."),
    short_name: Yup.string(),
    trade_licence_no: Yup.string().required("Required."),
    address: Yup.string().required("Required."),
    phone: Yup.string().required("Required."),
    fax: Yup.string(),
    email: Yup.string().required("Required.").email("Email is Invalid!"),
    contact_person: Yup.string().required("Required."),
    financial_year_start: Yup.string().required("Required."),
    financial_year_end: Yup.string().required("Required."),
    tin: Yup.string(),
    vat: Yup.string(),
    irc: Yup.string(),
    division: Yup.string(),
    org_no: Yup.string(),
    company_logo: Yup.array()
        .max(1, "Please select at least one file")
        .test("fileSize", "File size must be less than 5MB", (value) =>
            value.every((file) => file.size <= 5000000)
        )
        .test("fileType", "Invalid file type", (value) =>
            value.every((file) => PNG_JPG_JPEG_GIF.includes(file.type))
        ),
});


const CompanyAdd = () => {
    const { control, handleSubmit, } = useForm({ resolver: yupResolver(validationSchema), mode: "onChange" });

    const onSubmit = (data) => {
        console.log(data);
    }

    return (
        <Page title="Add a Company">

            <PageHeader title="Add a Company" btn={false}
                breadcrumbLinks={[
                    { label: "Manage Companies", href: '/admin/company/manage' }
                ]}
                currentPage="Add Company" />

            <AddForm handleSubmit={handleSubmit(onSubmit)} maxWidth={700} >
                <FormSection>
                    <TextInput
                        name="name"
                        control={control}
                        autoFocus
                        label={"Name"}
                        errorMsg required />
                    <TextInput
                        name="short_name"
                        control={control}
                        label={"Name (Short)"}
                        errorMsg />
                </FormSection>


                <FormSection>
                    <TextInput
                        name="trade_licence_no"
                        control={control}
                        label={"Trade Licence No."}
                        errorMsg required />
                    <MultilineInput
                        name="address"
                        control={control}
                        label={"Address"}
                        rows={2}
                        errorMsg required />
                </FormSection>

                <FormSection>
                    <TextInput
                        name="phone"
                        type="tel"
                        control={control}
                        label={"Phone Number"}
                        errorMsg required />
                    <TextInput
                        name="fax"
                        type="tel"
                        control={control}
                        label={"Fax Number"}
                        errorMsg />
                    <EmailField
                        name="email"
                        control={control}
                        label={"Email"}
                        errorMsg required />
                    <TextInput
                        name="contact_person"
                        control={control}
                        label={"Contact Person"}
                        errorMsg required />
                </FormSection>

                <FormSection>
                    <TextInput
                        name="financial_year_start"
                        type='date'
                        control={control}
                        label={"Financial Year Start"}
                        errorMsg required />
                    <TextInput
                        name="financial_year_end"
                        type='date'
                        control={control}
                        label={"Financial Year End"}
                        errorMsg required />
                </FormSection>

                <FormSection>
                    <TextInput
                        name="tin"
                        type='number'
                        control={control}
                        label={"TIN No."}
                        errorMsg />
                    <TextInput
                        name="vat"
                        type='number'
                        control={control}
                        label={"Vat No."}
                        errorMsg />
                    <TextInput
                        name="irc"
                        type='number'
                        control={control}
                        label={"IRC No."}
                        errorMsg />
                    <TextInput
                        name="division"
                        control={control}
                        label={"Division"}
                        errorMsg />
                </FormSection>

                <FormSection>
                    <TextInput
                        name="org_no"
                        control={control}
                        label={"Organization No"}
                        errorMsg />
                    <FileInput
                        name="company_logo"
                        control={control}
                        label={"Company Logo"}
                        fileTypes={PNG_JPG_JPEG_GIF}
                        placeholder=".png, .jpg, .jpeg" />
                </FormSection>
            </AddForm >

        </Page >
    )
};

export default CompanyAdd;
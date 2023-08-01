import React from 'react';
import Page from '../../../layout/Page';
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import PageHeader from '../../../layout/PageHeader';
import AddForm from '../../../components/Forms/AddForm';
import FormSection from '../../../components/Forms/FormSection';
import TextInput from '../../../components/Fields/TextInput';
import EmailField from '../../../components/Fields/EmailField';
import SelectField from '../../../components/Fields/SelectField';
import MultilineInput from '../../../components/Fields/MultilineInput';
import RadioGroupInput from '../../../components/Fields/RadioGroupInput';
import { useForm } from 'react-hook-form';


const validationSchema = Yup.object().shape({
    party_no: Yup.string().required("Required."),
    party_name: Yup.string().required("Required."),
    contact_person: Yup.string().required("Required."),
    email: Yup.string().required("Required."),
    phone: Yup.string().required("Required."),
    fax: Yup.string(),
    type: Yup.string().required("Required."),
    office_address: Yup.string(),
    address: Yup.string().required("Required."),
    factory: Yup.string(),
    credit_limit: Yup.string(),
    notice_days: Yup.string(),
    cheque_no: Yup.string(),
    outlet_type: Yup.string(),
    outlet_code: Yup.string(),
    mortgaze_info: Yup.string(),
    email_notify: Yup.string(),
    sms_notify: Yup.string(),
});

const PartyEdit = () => {
    const { control, handleSubmit, } = useForm({
        resolver: yupResolver(validationSchema),
        mode: "onChange",
        defaultValues: {
            party_no: "",
            party_name: "",
            contact_person: "",
            email: "",
            phone: "",
            fax: "",
            type: "",
            office_address: "",
            address: "",
            factory: "",
            credit_limit: "",
            notice_days: "",
            cheque_no: "",
            outlet_type: "",
            outlet_code: "",
            mortgaze_info: "",
            email_notify: "no",
            sms_notify: "no",
        }
    });

    const onSubmit = (data) => {
        console.log(data);
    }


    return (
        <Page title='Edit Party'>
            <PageHeader title="Edit Party" btn={false}
                breadcrumbLinks={[
                    { label: "Party Management", href: '/master/party/manage' }
                ]}
                currentPage="Edit Party" />


            <AddForm handleSubmit={handleSubmit(onSubmit)} submitBtn='Create' maxWidth={600}>
                <FormSection>
                    <TextInput
                        name="party_no"
                        control={control}
                        label={"Party ID."}
                        errorMsg required />
                    <TextInput
                        name="party_name"
                        control={control}
                        label={"Party Name"}
                        errorMsg required />
                </FormSection>
                <FormSection>
                    <TextInput
                        name="contact_person"
                        control={control}
                        label={"Contact Person"}
                        errorMsg required />
                    <EmailField
                        name="email"
                        control={control}
                        label={"Email"}
                        errorMsg required />
                </FormSection>
                <FormSection>
                    <TextInput
                        name="fax"
                        control={control}
                        type='tel'
                        label={"Fax"}
                        errorMsg />

                    <TextInput
                        name="phone"
                        control={control}
                        type='tel'
                        label={"Phone Number"}
                        errorMsg required />
                </FormSection>
                <FormSection>
                    <SelectField
                        name="type"
                        control={control}
                        subLabel={false}
                        label={"Select Type"}
                        data={[
                            { id: 1, name: "Customer" },
                            { id: 2, name: "Supplier" }
                        ]}
                        errorMsg required />
                    <TextInput
                        name="office_address"
                        control={control}
                        label={"Office Address"}
                        errorMsg />
                </FormSection>

                <MultilineInput
                    name="address"
                    control={control}
                    rows={3}
                    label={"Address"}
                    errorMsg required />

                <FormSection title={"Other Information"}>
                    <TextInput
                        name="factory"
                        control={control}
                        label={"Factory"}
                        errorMsg />
                    <TextInput
                        name="credit_limit"
                        control={control}
                        label={"Credit Limit"}
                        errorMsg />
                    <TextInput
                        name="notice_days"
                        control={control}
                        label={"Notice Days"}
                        errorMsg />

                    <TextInput
                        name="cheque_no"
                        control={control}
                        label={"Cheque No."}
                        errorMsg />
                    <TextInput
                        name="outlet_type"
                        control={control}
                        label={"Outlet Type"}
                        errorMsg />
                </FormSection>
                <TextInput
                    name="outlet_code"
                    control={control}
                    label={"Outlet Code"}
                    errorMsg />
                <MultilineInput
                    name="mortgaze_info"
                    control={control}
                    rows={3}
                    label={"Mortgaze Info"}
                    errorMsg />

                <FormSection title={"Notification"}>
                    <RadioGroupInput
                        name='email_notify'
                        control={control}
                        value='no'
                        options={[
                            { id: "yes", label: "Yes", value: "yes" },
                            { id: "no", label: "No", value: "no" },
                        ]}
                        label={"Email Notify"}
                        errorMsg />
                    <RadioGroupInput
                        name='sms_notify'
                        control={control}
                        value='no'
                        options={[
                            { id: "yes", label: "Yes", value: "yes" },
                            { id: "no", label: "No", value: "no" },
                        ]}
                        label={"SMS Notify"}
                        errorMsg />
                </FormSection>

            </AddForm>

        </Page>
    );
};

export default PartyEdit;
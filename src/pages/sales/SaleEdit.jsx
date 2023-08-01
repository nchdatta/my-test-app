import React from 'react';
import Page from '../../layout/Page';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from "yup";
import { useForm, useFieldArray, } from 'react-hook-form';
import PageHeader from '../../layout/PageHeader';
import AddForm from '../../components/Forms/AddForm';
import FormSection from '../../components/Forms/FormSection';
import SelectField from '../../components/Fields/SelectField';
import { Button, Divider, IconButton, Stack, Tooltip, Typography, } from '@mui/material';
import { AiFillMinusCircle } from 'react-icons/ai';
import TextInput from '../../components/Fields/TextInput';
import { Fragment } from 'react';
import { BsPlusLg } from 'react-icons/bs';


const validationSchema = Yup.object().shape({
    company: Yup.string().required("Required."),
    party: Yup.string().required("Required."),
    project: Yup.string().required("Required."),
    total_amount: Yup.string().required("Required."),
    invoice_no: Yup.string(),
    order_date: Yup.string(),
    vat_chalan_number: Yup.string(),
    discount_amount: Yup.string(),
    invoice_reference: Yup.string(),
    invoice_date: Yup.string().required("Required."),
    bill_number: Yup.string(),
    net_amount: Yup.string(),
    aging_date: Yup.string().required("Required."),
    invoice_submission_date: Yup.string(),
    remarks: Yup.string(),
    debit_account: Yup.string().required("Required."),
    services: Yup.array().of(Yup.object().shape({
        service_name: Yup.string().required("Required."),
        details: Yup.string(),
        qty: Yup.string().required("Required."),
        cost: Yup.string().required("Required."),
        vat: Yup.string().required("Required."),
        commission: Yup.string().required("Required."),
        total_price: Yup.string().required("Required."),
        discount: Yup.string().required("Required."),
        discount_amount: Yup.string().required("Required."),
    })),
});

const SaleEdit = () => {
    const { control, handleSubmit } = useForm({
        resolver: yupResolver(validationSchema),
        mode: "onChange",
        defaultValues: {
            company: "",
            party: "",
            project: "",
            total_amount: "",
            invoice_no: "",
            order_date: "",
            vat_chalan_number: "",
            discount_amount: "",
            invoice_reference: "",
            invoice_date: "",
            bill_number: "",
            net_amount: "",
            aging_date: "",
            invoice_submission_date: "",
            remarks: "",
            debit_account: "",
            services: [
                {
                    service_name: "",
                    details: "",
                    qty: "",
                    cost: "",
                    vat: "",
                    commission: "",
                    total_price: "",
                    discount: "",
                    discount_amount: "",
                }
            ]
        }
    });
    const { fields, append, remove } = useFieldArray({ control, name: "services" });

    const onSubmit = (data) => {
        console.log(data)
    }


    return (
        <Page title='Edit Invoice Information'>
            <PageHeader title="Edit Invoice Information" btn={false}
                breadcrumbLinks={[
                    { label: "Manage Sales", href: '/sales/manage' }
                ]}
                currentPage="Edit Invoice Information" />


            <AddForm handleSubmit={handleSubmit(onSubmit)} maxWidth={"98%"} >
                <FormSection md={3}>
                    <SelectField
                        name="company"
                        control={control}
                        subLabel={false}
                        label={"Select Company"}
                        data={[
                            { id: 1, name: "Demo Company" },
                        ]}
                        errorMsg required />

                    <SelectField
                        name="party"
                        control={control}
                        subLabel={false}
                        label={"Select Party"}
                        data={[
                            { id: 1, name: "Robi" },
                            { id: 2, name: "Airtel" },
                            { id: 2, name: "Teletalk" },
                        ]}
                        errorMsg required />
                    <SelectField
                        name="project"
                        control={control}
                        subLabel={false}
                        label={"Select Project"}
                        data={[
                            { id: 1, name: "Test Project 1" },
                            { id: 2, name: "Test Project 2" },
                        ]}
                        errorMsg required />

                    <TextInput
                        name="total_amount"
                        control={control}
                        type='number'
                        label={"Total Amount"}
                        errorMsg required />
                </FormSection>

                <FormSection md={3}>
                    <TextInput
                        name="invoice_no"
                        control={control}
                        label={"Invoice No."}
                        errorMsg required />
                    <TextInput
                        name="order_date"
                        control={control}
                        type='date'
                        label={"Order Date"}
                        errorMsg />

                    <TextInput
                        name="vat_chalan_number"
                        control={control}
                        type='number'
                        label={"Vat Chalan Number"}
                        errorMsg />
                    <TextInput
                        name="discount_amount"
                        control={control}
                        type='number'
                        label={"Discount Amount"}
                        errorMsg required />
                </FormSection>

                <FormSection md={3}>
                    <TextInput
                        name="invoice_reference"
                        control={control}
                        label={"Invoice Reference"}
                        errorMsg />
                    <TextInput
                        name="invoice_date"
                        control={control}
                        type='date'
                        label={"Invoice date"}
                        errorMsg required />

                    <TextInput
                        name="bill_number"
                        control={control}
                        type='number'
                        label={"Bill Number"}
                        errorMsg />
                    <TextInput
                        name="net_amount"
                        control={control}
                        type='number'
                        label={"Net Amount"}
                        errorMsg required />
                </FormSection>

                <FormSection md={3}>
                    <TextInput
                        name="aging_date"
                        control={control}
                        type='date'
                        label={"Aging Date"}
                        errorMsg required />
                    <TextInput
                        name="invoice_submission_date"
                        control={control}
                        type='date'
                        label={"Invoice Submission Date"}
                        errorMsg />

                    <TextInput
                        name="remarks"
                        control={control}
                        label={"Remarks"}
                        errorMsg />
                    <SelectField
                        name="debit_account"
                        control={control}
                        subLabel={false}
                        label={"Debit Account"}
                        data={[
                            { id: 1, name: "Test Account 1" },
                            { id: 2, name: "Test Account 2" },
                        ]}
                        errorMsg required />

                </FormSection>

                <FormSection title={"Product / Service Information"} md={12}>
                    {fields?.map((_field, index) => (
                        <Fragment key={index}>
                            <Stack direction={{ xs: "column", md: "row" }} alignItems={"flex-end"} gap={1.5}>
                                <SelectField
                                    name={`services[${index}].service_name`}
                                    control={control}
                                    autoFocus
                                    subLabel={false}
                                    label={"Service"}
                                    data={[
                                        { id: 1, name: "Service Name 1" },
                                        { id: 2, name: "Service Name 2" },
                                    ]}
                                    errorMsg required />

                                <TextInput
                                    name={`services[${index}].details`}
                                    control={control}
                                    label={"Details"}
                                    errorMsg />
                                <TextInput
                                    name={`services[${index}].qty`}
                                    type='number'
                                    control={control}
                                    label={"Qty"}
                                    errorMsg required />
                                <TextInput
                                    name={`services[${index}].cost`}
                                    type='number'
                                    control={control}
                                    label={"Cost"}
                                    errorMsg required />
                                <TextInput
                                    name={`services[${index}].vat`}
                                    type='number'
                                    control={control}
                                    label={"VAT"}
                                    errorMsg required />
                                <TextInput
                                    name={`services[${index}].commission`}
                                    type='number'
                                    control={control}
                                    label={"Commission"}
                                    errorMsg required />
                                <TextInput
                                    name={`services[${index}].total_price`}
                                    type='number'
                                    control={control}
                                    label={"Total Price"}
                                    errorMsg required disabled />
                                <TextInput
                                    name={`services[${index}].discount`}
                                    type='number'
                                    control={control}
                                    label={"Discount(%)"}
                                    errorMsg required />
                                <TextInput
                                    name={`services[${index}].discount_amount`}
                                    type='number'
                                    control={control}
                                    label={"Discount Amount"}
                                    errorMsg required disabled />

                                <Tooltip title="Remove">
                                    <IconButton disabled={fields?.length === 1} size='medium' color='warning' onClick={() => remove(index)}>
                                        <AiFillMinusCircle />
                                    </IconButton>
                                </Tooltip>
                            </Stack>
                            {index !== fields?.length - 1 && <Divider sx={{ my: 2 }} />}
                        </Fragment>
                    ))}

                    <Divider sx={{ my: 2 }} >
                        <Button size='small' color='warning' onClick={() => append()}>
                            <Stack direction="row" alignItems={"center"} gap={1}>
                                <BsPlusLg />
                                <Typography sx={{ textTransform: "capitalize" }}>{"Add more"}</Typography>
                            </Stack>
                        </Button>
                    </Divider>
                </FormSection>
            </AddForm>

        </Page>
    );
};

export default SaleEdit;
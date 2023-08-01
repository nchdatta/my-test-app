import React, { useState } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from "yup";
import { useForm, useFieldArray, } from 'react-hook-form';
import { Button, Divider, IconButton, Stack, Tooltip, Typography, } from '@mui/material';
import { AiFillMinusCircle } from 'react-icons/ai';
import { Fragment } from 'react';
import Page from '../../../layout/Page';
import PageHeader from '../../../layout/PageHeader';
import AddForm from '../../../components/Forms/AddForm';
import FormSection from '../../../components/Forms/FormSection';
import SelectField from '../../../components/Fields/SelectField';
import TextInput from '../../../components/Fields/TextInput';
import VoucherModal from '../../../components/Modals/VoucherModal';
import MultilineInput from '../../../components/Fields/MultilineInput';
import { BsPlusLg } from 'react-icons/bs';


const validationSchema = Yup.object().shape({
    company: Yup.string().required("Required."),
    date: Yup.string().required("Required."),
    type: Yup.string().required("Required."),
    voucher_no: Yup.string().required("Required."),
    narration: Yup.string(),

    vouchers: Yup.array().of(Yup.object().shape({
        account_name: Yup.string().required("Required."),
        account_number: Yup.string().required("Required."),
        credit: Yup.string(),
        debit: Yup.string(),
        cheque_no: Yup.string(),
        reqt_no: Yup.string(),
        party: Yup.string(),
        invoice: Yup.string(),
        project: Yup.string(),
        cost_center: Yup.string(),
    })),
});


const BankVoucherEdit = ({ voucherType = '', metadata = { title: 'Add New Voucher', breadcrumbLink: { label: "", href: '#' } } }) => {
    const { title, breadcrumbLink } = metadata;
    const [modalOpen, setModalOpen] = useState(false);
    const [accountData, setAccountData] = useState({});
    const { control, handleSubmit, setValue } = useForm({
        resolver: yupResolver(validationSchema),
        mode: "onChange",
        defaultValues: {
            company: "",
            date: "",
            type: "",
            voucher_no: "",
            narration: "",

            vouchers: [
                {
                    account_name: "",
                    account_number: "",
                    credit: "",
                    debit: "",
                    cheque_no: "",
                    reqt_no: "",
                    party: "",
                    invoice: "",
                    project: "",
                    cost_center: "",
                }
            ]
        }
    });
    const { fields, append, remove } = useFieldArray({ control, name: "vouchers" });

    const onSubmit = (data) => {
        console.log(data)
    }



    return (
        <Page title={title}>
            <PageHeader title={title} btn={false}
                breadcrumbLinks={[
                    breadcrumbLink
                ]}
                currentPage={title} />


            <AddForm handleSubmit={handleSubmit(onSubmit)} maxWidth={"98%"} >
                <FormSection md={3}>
                    <TextInput
                        name="company"
                        control={control}
                        label={"Company"}
                        errorMsg readOnly />

                    <TextInput
                        name="date"
                        control={control}
                        label={"Date"}
                        errorMsg readOnly />


                    <TextInput
                        name="type"
                        control={control}
                        label={"Type"}
                        errorMsg readOnly />

                    <TextInput
                        name="voucher_no"
                        control={control}
                        label={"Voucher No."}
                        errorMsg readOnly />
                </FormSection>

                <FormSection title={"Fill-out Voucher Details"} md={12}>
                    {fields?.map((_field, index) => (
                        <Fragment key={index}>
                            <FormSection xs={6} md={2} alignItems='flex-end'>
                                <TextInput
                                    name={`vouchers[${index}].account_name`}
                                    control={control}
                                    handleClick={() => {
                                        setAccountData({});
                                        setModalOpen(true);
                                    }}
                                    label={"Account Name"}
                                    errorMsg required readOnly />

                                <TextInput
                                    name={`vouchers[${index}].account_number`}
                                    control={control}
                                    label={"Account No."}
                                    errorMsg required disabled />
                                <TextInput
                                    name={`vouchers[${index}].credit`}
                                    type='number'
                                    control={control}
                                    label={"Credit"}
                                    errorMsg />
                                <TextInput
                                    name={`vouchers[${index}].debit`}
                                    type='number'
                                    control={control}
                                    label={"Debit"}
                                    errorMsg />
                                <TextInput
                                    name={`vouchers[${index}].cheque_no`}
                                    type='number'
                                    control={control}
                                    label={"Cheque No."}
                                    errorMsg />
                                <TextInput
                                    name={`vouchers[${index}].reqt_no`}
                                    type='number'
                                    control={control}
                                    label={"Reqt. No."}
                                    errorMsg />
                                <SelectField
                                    name={`vouchers[${index}].party`}
                                    control={control}
                                    autoFocus
                                    subLabel={false}
                                    label={"Select Party"}
                                    data={[
                                        { id: 1, name: "Party Name 1" },
                                        { id: 2, name: "Party Name 2" },
                                    ]}
                                    errorMsg />

                                <SelectField
                                    name={`vouchers[${index}].invoice`}
                                    control={control}
                                    autoFocus
                                    subLabel={false}
                                    label={"Select Invoice"}
                                    data={[
                                        { id: 1, name: "Invoice 1" },
                                        { id: 2, name: "Invoice 2" },
                                    ]}
                                    errorMsg />

                                <SelectField
                                    name={`vouchers[${index}].project`}
                                    control={control}
                                    autoFocus
                                    subLabel={false}
                                    label={"Select Project"}
                                    data={[
                                        { id: 1, name: "Project Name 1" },
                                        { id: 2, name: "Project Name 2" },
                                    ]}
                                    errorMsg />

                                <SelectField
                                    name={`vouchers[${index}].cost_center`}
                                    control={control}
                                    autoFocus
                                    subLabel={false}
                                    label={"Select Cost Center"}
                                    data={[
                                        { id: 1, name: "Cost Center Name 1" },
                                        { id: 2, name: "Cost Center Name 2" },
                                    ]}
                                    errorMsg />


                                <Tooltip title="Remove">
                                    <IconButton disabled={fields?.length === 1} size='medium' color='warning' onClick={() => remove(index)}>
                                        <AiFillMinusCircle />
                                    </IconButton>
                                </Tooltip>
                            </FormSection>
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

                <Stack mt={8} maxWidth={{ xs: "90%", md: 500 }} gap={1.2} mx={"auto"}>
                    <Stack direction={"row"} gap={3} justifyContent={"center"}>
                        <Typography fontWeight={"medium"}>Total Debit: 430.00</Typography>
                        <Typography fontWeight={"medium"}>Total Credit: 430.00</Typography>
                    </Stack>
                    <MultilineInput
                        name="narration"
                        control={control}
                        rows={3}
                        label={"Voucher Narration"}
                        errorMsg />
                </Stack>
            </AddForm>

            {modalOpen && <VoucherModal setOpenModal={setModalOpen} openModal={modalOpen} setData={setAccountData} metadata={{ title: "Select Account" }} />}

        </Page>
    );
};

export default BankVoucherEdit;
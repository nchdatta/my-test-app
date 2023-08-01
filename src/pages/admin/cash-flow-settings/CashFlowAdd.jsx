import React from 'react';
import Page from '../../../layout/Page';
import PageHeader from '../../../layout/PageHeader';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from "yup";
import { useForm, useFieldArray, Controller } from 'react-hook-form';
import AddForm from '../../../components/Forms/AddForm';
import SelectField from '../../../components/Fields/SelectField';
import FormSection from '../../../components/Forms/FormSection';
import { Button, Divider, FormControl, FormHelperText, IconButton, OutlinedInput, Stack, Tooltip, Typography } from '@mui/material';
import { BsPlusLg } from 'react-icons/bs';
import { AiFillMinusCircle } from 'react-icons/ai';
import { red } from '@mui/material/colors';
import { Fragment } from 'react';

const validationSchema = Yup.object().shape({
    fiscal_year: Yup.string().required("Required."),
    year: Yup.string().required("Required."),
    flows: Yup.array().of(Yup.object().shape({
        operating_activities: Yup.string().required("Required."),
        ledger: Yup.string().required("Required."),
        name: Yup.string().required("Required."),
    })),
});


const CashFlowAdd = () => {
    const { control, handleSubmit } = useForm({
        resolver: yupResolver(validationSchema),
        mode: "onChange",
        defaultValues: {
            fiscal_year: '',
            year: '',
            flows: [
                { operating_activities: '', ledger: '', name: '' }
            ]
        }
    });
    const { fields, append, remove } = useFieldArray({ control, name: "flows" });

    const onSubmit = (data) => {
        console.log(data)
    }


    return (
        <Page title='Create a Cash Flow'>
            <PageHeader title="Create a Cash Flow" btn={false}
                breadcrumbLinks={[
                    { label: "Cash Flow Settings", href: '/admin/cash-flow-settings/manage' }
                ]}
                currentPage="Create Cash Flow" />


            <AddForm handleSubmit={handleSubmit(onSubmit)} maxWidth={950} >
                <FormSection>
                    <SelectField
                        name="fiscal_year"
                        control={control}
                        subLabel={false}
                        label={"Select Fiscal Year"}
                        data={[
                            { id: 1, name: "2022-2023" },
                            { id: 2, name: "2021-2022" },
                            { id: 2, name: "2020-2021" },
                        ]}
                        errorMsg required />

                    <SelectField
                        name="year"
                        control={control}
                        subLabel={false}
                        label={"Select Year"}
                        data={[
                            { id: 1, name: "2023" },
                            { id: 2, name: "2022" },
                            { id: 2, name: "2021" },
                        ]}
                        errorMsg required />
                </FormSection>

                <FormSection title={"Cash Flow Details"} md={12} >
                    {fields?.map((_field, index) => (
                        <Fragment key={index}>
                            <FormSection xs={6} md={3} alignItems='flex-end'>
                                <SelectField
                                    name={`flows[${index}].operating_activities`}
                                    control={control}
                                    autoFocus
                                    subLabel={false}
                                    label={"Operating Activities"}
                                    data={[
                                        { id: 1, name: "Operating Activities" },
                                        { id: 2, name: "Investing Activities" },
                                    ]}
                                    errorMsg required />

                                <SelectField
                                    name={`flows[${index}].ledger`}
                                    control={control}
                                    subLabel={false}
                                    label={"Select Ledger"}
                                    data={[
                                        { id: 1, name: "APM Global Logistics Bangladesh Ltd" },
                                        { id: 2, name: "Asian Paints (Bangladesh) Ltd." },
                                    ]}
                                    errorMsg required />

                                <Controller
                                    name={`flows[${index}].name`}
                                    control={control}
                                    defaultValue={""}
                                    render={({ field, formState }) => (
                                        <FormControl fullWidth variant="outlined" size={"small"} error={!!formState.errors?.flows?.[index]?.name}>
                                            <Typography color={!!formState.errors?.flows?.[index]?.name && red[700]}>Name *</Typography>
                                            <OutlinedInput
                                                {...field}
                                                error={!!formState.errors?.flows?.[index]?.name}
                                            />
                                            {formState.errors?.flows?.[index]?.name && (
                                                <FormHelperText>{formState.errors?.flows?.[index]?.name.message}</FormHelperText>
                                            )}
                                        </FormControl>
                                    )}
                                />
                                {/* <TextInput
                                name={`flows[${index}].name`}
                                control={control}
                                label={"Name"}
                                errorMsg required /> */}

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
            </AddForm>

        </Page >
    );
};

export default CashFlowAdd;
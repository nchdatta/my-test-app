import React from 'react';
import Page from '../../layout/Page';
import PageHeader from '../../layout/PageHeader';
import { Button, CircularProgress, Grid, Paper, Stack } from '@mui/material';
import { useForm } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import SelectField from '../../components/Fields/SelectField';
import TextInput from '../../components/Fields/TextInput';
import { TbFileReport } from 'react-icons/tb';


const validationSchema = Yup.object().shape({
    company: Yup.string().required("Required."),
    voucher: Yup.string().required("Required."),
    from: Yup.string().required("Required."),
    to: Yup.string().required("Required."),
});


const VoucherReport = () => {
    const { control, handleSubmit, } = useForm({
        resolver: yupResolver(validationSchema),
        mode: "onChange",
        defaultValues: {
            company: "",
            voucher: "",
            from: "",
            to: "",
        }
    });

    const onSubmit = (data) => {
        console.log(data);
    }
    const loading = false;


    return (
        <Page title='Generate Voucher Reports'>
            <PageHeader
                btn={false}
                title="Generate Voucher Reports"
                currentPage="Generate Voucher Reports" />


            <Paper elevation={0} sx={{ px: 4, pt: 3, pb: 6 }} className='rad-grad'>
                <form onSubmit={handleSubmit(onSubmit)} style={{ textAlign: "center" }}>
                    <Grid container spacing={1.5} justifyContent={"center"} textAlign={"left"}>
                        <Grid item xs={12} md={3.5}>
                            <SelectField
                                name="company"
                                control={control}
                                subLabel={false}
                                label={"Select Company"}
                                data={[
                                    { id: 1, name: "Robi Axiata" },
                                    { id: 2, name: "Airtel" }
                                ]}
                                required />
                        </Grid>
                        <Grid item xs={12} md={2.5}>
                            <SelectField
                                name="voucher"
                                control={control}
                                subLabel={false}
                                label={"Select Voucher Type"}
                                data={[
                                    { id: 1, name: "Adjustment Voucher" },
                                    { id: 2, name: "Cash Payment" },
                                    { id: 3, name: "Cash Receive" },
                                    { id: 4, name: "Bank Payment" },
                                    { id: 5, name: "Bank Receive" },
                                    { id: 6, name: "Journal Voucher" },
                                    { id: 7, name: "Contra Journal" },
                                ]}
                                required />
                        </Grid>
                        <Grid item xs={6} md={2}>
                            <TextInput
                                name="from"
                                type='date'
                                control={control}
                                label={"From"}
                                required />
                        </Grid>
                        <Grid item xs={6} md={2}>
                            <TextInput
                                name="to"
                                type='date'
                                control={control}
                                label={"To"}
                                required />
                        </Grid>
                    </Grid>
                    <Button variant="contained" disabled={loading} type="submit" color="primary" size='medium' sx={{ my: 6 }}>
                        <Stack direction="row" alignItems='center' gap={1} fontWeight={'bold'} textTransform="capitalize">
                            {loading ? <CircularProgress size={18} /> : <TbFileReport size={20} />}
                            Generate Report
                        </Stack>
                    </Button>
                </form>
            </Paper>
        </Page>
    );
};

export default VoucherReport;
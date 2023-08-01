import React, { Fragment, useState } from 'react';
import Page from '../../layout/Page';
import PageHeader from '../../layout/PageHeader';
import { Button, CircularProgress, Grid, IconButton, Paper, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow, Typography } from '@mui/material';
import { grey } from '@mui/material/colors';
import SelectField from '../../components/Fields/SelectField';
import { TbArrowsSort, TbFileReport, TbSearch } from 'react-icons/tb';
import { useForm } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { accountReportArray } from '../../__mock/msc';
import TextInput from '../../components/Fields/TextInput';


const validationSchema = Yup.object().shape({
    company: Yup.string().required("Required."),
    project: Yup.string().required("Required."),
    from: Yup.string().required("Required."),
    to: Yup.string().required("Required."),
});

const ProfitLoss = () => {
    const data = [];
    const [page, setPage] = useState(0);
    const [limit, setLimit] = useState(10);
    const [accountReportData, setAccountReportData] = useState(accountReportArray);
    const { control, handleSubmit, } = useForm({
        resolver: yupResolver(validationSchema),
        mode: "onChange",
        defaultValues: {
            company: "",
            project: "",
            from: "",
            to: "",
        }
    });

    const onSubmit = (data) => {
        console.log(data);
    }

    const handleSorting = () => {
        const sortedArray = [...accountReportData];
        sortedArray.reverse();
        setAccountReportData(sortedArray);
    }


    const loading = false;


    return (
        <Page title='Profit Loss Report'>
            <PageHeader
                btn={false}
                title="Profit Loss Report"
                currentPage="Profit Loss Report" />


            <Paper elevation={0} sx={{ px: 4, pt: 3, minHeight: '70vh' }} className='rad-grad'>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Grid container spacing={1.5} alignItems={"flex-end"}>
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
                                name="project"
                                control={control}
                                subLabel={false}
                                label={"Select Project"}
                                data={[
                                    { id: 1, name: "Project 1" },
                                    { id: 2, name: "Project 2" },
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

                        <Grid item xs={6} md={2}>
                            <Button variant="outlined" disabled={loading} type="submit" color="warning" size='large' fullWidth>
                                <Stack direction="row" alignItems='center' gap={1} fontWeight={'bold'} textTransform="capitalize">
                                    {loading ? <CircularProgress size={18} /> : <TbSearch size={20} />}
                                    Search
                                </Stack>
                            </Button>
                        </Grid>
                    </Grid>
                </form>

                {data?.length === 0 ?
                    <Typography variant='h5' fontWeight={"medium"} my={8} textAlign={"center"}>No records found! <span style={{ color: "green" }}>Search Report Instead</span></Typography>
                    : data?.length > 0 &&
                    <Fragment>

                        <Stack direction={"row"} justifyContent={"space-between"} alignItems='center' gap={2} mt={6} mb={1}>
                            <Typography variant='h6' fontWeight={"bold"} mb={1}> </Typography>
                            <Button variant="contained" disabled={loading} type="submit" color="primary" size='medium'>
                                <Stack direction="row" alignItems='center' gap={1} fontWeight={'medium'} textTransform="capitalize">
                                    {loading ? <CircularProgress size={18} /> : <TbFileReport size={20} />}
                                    Generate Report
                                </Stack>
                            </Button>
                        </Stack>
                        <TableContainer>
                            <Table size="medium" sx={{ minWidth: 650 }} aria-label="simple table">
                                <TableHead>
                                    <TableRow sx={{ bgcolor: grey[100] }}>
                                        <TableCell align="center" sx={{ fontWeight: "bold" }}>
                                            <Stack direction={"row"} justifyContent={"center"} alignItems={"center"} >
                                                <span>SL</span> <IconButton title='Sort' onClick={handleSorting}>
                                                    <TbArrowsSort size={15} />
                                                </IconButton>
                                            </Stack>
                                        </TableCell>
                                        <TableCell align="left" sx={{ fontWeight: "bold" }}>Total Revenues</TableCell>
                                        <TableCell align="left" sx={{ fontWeight: "bold" }}>Total Expenses</TableCell>
                                        <TableCell align="center" sx={{ fontWeight: "bold" }}>Net Loss</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {accountReportData?.map((row, index) => (
                                        <TableRow key={index} hover>
                                            <TableCell align="center" >{index + 1}</TableCell>
                                            <TableCell align="center">{0}</TableCell>
                                            <TableCell align="center">{0}</TableCell>
                                            <TableCell align="center">{0}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>

                        </TableContainer>
                        <TablePagination
                            component="div"
                            count={100}
                            page={page}
                            onPageChange={(e, newPage) => {
                                setPage(newPage);
                            }}
                            rowsPerPage={limit}
                            onRowsPerPageChange={(e) => {
                                setLimit(parseInt(e.target.value, 10));
                                setPage(0);
                            }}
                        />
                    </Fragment>
                }
            </Paper>
        </Page>
    );
};

export default ProfitLoss;
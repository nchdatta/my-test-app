import React from 'react';
import Page from '../../layout/Page';
import PageHeader from '../../layout/PageHeader';
import { Divider, Paper, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import { IoMdPrint } from 'react-icons/io';
import VRow from '../../components/Msc/VRow';
import { grey } from '@mui/material/colors';

const SaleView = () => {
    return (
        <Page title='Invoice Information Details'>
            <PageHeader title="Invoice Information Details" subTitle='ABC' btn={false}
                breadcrumbLinks={[
                    { label: "Manage Sales", href: '/sales/manage' }
                ]}
                currentPage="Invoice Information Details" />

            <Paper elevation={0} sx={{ pl: 5, pr: 3, py: 4, minHeight: "70vh" }} className="rad-grad">
                <div style={{ width: '100%', display: 'inline-flex', justifyContent: 'flex-end' }}>
                    <IoMdPrint onClick={() => { }} size={25} color="gray" cursor="pointer" />
                </div>

                <Stack direction={{ xs: "column", md: "row" }} gap={{ xs: 3, md: 6 }}>
                    <VRow data={[
                        { label: "Company Name", value: "Frontdesk Bangladesh Ltd" },
                        { label: "Short Name", value: "FDB" },
                        { label: "Email", value: "test@gmail.com" },
                        { label: "Phone", value: "0171454500" },
                        { label: "Fax Number", value: "85425001" },
                        { label: "Contact Person", value: "Md. Abdul Hamid" },
                        { label: "Address", value: "Road 14/A, Lily Avenue, Sector 2, Banani, Dhaka, 1207" },
                    ]} />

                    <VRow data={[
                        { label: "Financial Year Start", value: "12/10/22" },
                        { label: "Financial Year End", value: "12/10/23" },
                        { label: "Trade Licence No.", value: "153265201" },
                        { label: "TIN No.", value: "8545522200" },
                        { label: "VAT No.", value: "8545522200" },
                        { label: "IRC No.", value: "8545522200" },
                        { label: "Organization No.", value: "8545522200" },
                    ]} />
                </Stack>



                <Typography mt={4} mb={1} fontWeight={"bold"} variant='h6' >Product / Service Information</Typography>
                <TableContainer >
                    <Table size="medium" sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow sx={{ bgcolor: grey[100] }}>
                                <TableCell align="left" sx={{ fontWeight: "bold" }}>#</TableCell>
                                <TableCell align="left" sx={{ fontWeight: "bold" }}>Service Name</TableCell>
                                <TableCell align="left" sx={{ fontWeight: "bold" }}>Details</TableCell>
                                <TableCell align="center" sx={{ fontWeight: "bold" }}>Qty</TableCell>
                                <TableCell align="center" sx={{ fontWeight: "bold" }}>Cost</TableCell>
                                <TableCell align="center" sx={{ fontWeight: "bold" }}>VAT</TableCell>
                                <TableCell align="center" sx={{ fontWeight: "bold" }}>Commision</TableCell>
                                <TableCell align="center" sx={{ fontWeight: "bold" }}>Total Price </TableCell>
                                <TableCell align="center" sx={{ fontWeight: "bold" }}>Discount</TableCell>
                                <TableCell align="center" sx={{ fontWeight: "bold" }}>Discount Amount</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow  >
                                <TableCell align="center" >{1}</TableCell>
                                <TableCell align="left">{"Recruitment"}</TableCell>
                                <TableCell align="left">{"Test Desription"}</TableCell>
                                <TableCell align="center">{1}</TableCell>
                                <TableCell align="center">{23}</TableCell>
                                <TableCell align="center">{12}</TableCell>
                                <TableCell align="center">{1}</TableCell>
                                <TableCell align="center">{36}</TableCell>
                                <TableCell align="center">{5}</TableCell>
                                <TableCell align="center">{1.8}</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>

                </TableContainer>

            </Paper>
        </Page>
    );
};

export default SaleView;
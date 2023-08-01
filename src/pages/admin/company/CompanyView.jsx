import React from 'react';
import Page from '../../../layout/Page';
import { Avatar, Divider, Paper, Stack, } from '@mui/material';
import PageHeader from '../../../layout/PageHeader';
import VRow from '../../../components/Msc/VRow';
import { IoMdPrint } from 'react-icons/io';

const CompanyView = () => {
    return (
        <Page title={`Company Information - ${"ABC"}`}>

            <PageHeader title="Company Information" subTitle='ABC' btn={false}
                breadcrumbLinks={[
                    { label: "Manage Companies", href: '/admin/company/manage' }
                ]}
                currentPage="Company Information" />

            <Paper elevation={0} sx={{ pl: 5, pr: 3, py: 4, minHeight: "70vh" }} className="rad-grad">
                <div style={{ width: '100%', display: 'inline-flex', justifyContent: 'flex-end' }}>
                    <IoMdPrint onClick={() => { }} size={25} color="gray" cursor="pointer" />
                </div>

                <Stack direction={{ xs: "column", md: "row" }} gap={{ xs: 3, md: 6 }}>
                    <Stack>
                        <Avatar
                            src={"/assets/logo.png"}
                            alt="Profile"
                            sx={{
                                width: 80,
                                height: 80,
                                display: "flex",
                                marginBottom: 1
                            }}
                        />


                        <VRow data={[
                            { label: "Company Name", value: "Frontdesk Bangladesh Ltd" },
                            { label: "Short Name", value: "FDB" },
                            { label: "Email", value: "test@gmail.com" },
                            { label: "Phone", value: "0171454500" },
                            { label: "Fax Number", value: "85425001" },
                            { label: "Contact Person", value: "Md. Abdul Hamid" },
                            { label: "Address", value: "Road 14/A, Lily Avenue, Sector 2, Banani, Dhaka, 1207" },
                        ]} />
                    </Stack>

                    <Divider sx={{ borderRight: `1px solid gray` }} />
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

            </Paper>
        </Page>
    );
};

export default CompanyView;
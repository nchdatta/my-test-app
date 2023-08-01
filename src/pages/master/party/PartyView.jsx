import React from 'react';
import Page from '../../../layout/Page';
import PageHeader from '../../../layout/PageHeader';
import { Divider, Paper, Stack } from '@mui/material';
import { IoMdPrint } from 'react-icons/io';
import VRow from '../../../components/Msc/VRow';

const PartyView = () => {
    return (
        <Page title={`Party Information - ${"ABC"}`}>

            <PageHeader title="Party Information" subTitle='ABC' btn={false}
                breadcrumbLinks={[
                    { label: "Party Management", href: '/master/party/manage' }
                ]}
                currentPage="Party Information" />

            <Paper elevation={0} sx={{ pl: 5, pr: 3, py: 4, minHeight: "70vh" }} className="rad-grad">
                <div style={{ width: '100%', display: 'inline-flex', justifyContent: 'flex-end' }}>
                    <IoMdPrint onClick={() => { }} size={25} color="gray" cursor="pointer" />
                </div>

                <Stack direction={{ xs: "column", md: "row" }} gap={{ xs: 3, md: 6 }}>
                    <VRow data={[
                        { label: "Party ID", value: "P-23-0012" },
                        { label: "Party Name ", value: "FDB Limited" },
                        { label: "Contact Person", value: "Md. Abdul Hamid" },
                        { label: "Email", value: "test@gmail.com" },
                        { label: "Phone", value: "0171454500" },
                        { label: "Fax Number", value: "85425001" },
                        { label: "Type", value: "Customer" },
                        { label: "Office Address", value: "Banani, Dhaka, 1207" },
                        { label: "Address", value: "Road 14/A, Lily Avenue, Sector 2, Banani, Dhaka, 1207" },
                    ]} />

                    <Divider sx={{ borderRight: `1px solid gray` }} />
                    <VRow data={[
                        { label: "Factory", value: "Factory" },
                        { label: "Credit Limit", value: "40" },
                        { label: "Notice Days", value: "7" },
                        { label: "Mortgaze Info", value: "Lorem lorem lorem lorem dsf sad lorem" },
                        { label: "Cheque No.", value: "8545522200" },
                        { label: "Outlet Type", value: "Branch" },
                        { label: "Outlet Code", value: "BN-00152" },
                        { label: "Email Notify", value: "No" },
                        { label: "SMS Notify", value: "No" },
                    ]} />
                </Stack>

            </Paper>
        </Page>
    );
};

export default PartyView;
import * as React from 'react';
import { Avatar, Box, Divider, Modal, Stack, Typography } from '@mui/material';
import VRow from '../Msc/VRow';

const style = {
    position: 'absolute',
    top: '5%',
    left: '50%',
    transform: 'translate(-50%, -5%)',
    bgcolor: 'background.paper',
    boxShadow: 24,
    px: 3,
    pt: 2,
    pb: 3,
    borderRadius: 1,
};

const ViewCompanyDetailsDialog = ({ openModal, setOpenModal, metadata = {} }) => {
    const { data, title } = metadata;

    return (
        <Modal
            onClose={() => setOpenModal(!openModal)} open={openModal}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description" sx={{ overflowY: "scroll" }} >

            <Box sx={style} minWidth={{ xs: "90%", md: 1000 }}>
                <Typography id="modal-modal-title" variant={{ xs: "body2", md: "h6" }}>Company/Customer Information</Typography>
                <Divider sx={{ mb: 2 }} />

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
            </Box>
        </Modal>
    );
}


export default ViewCompanyDetailsDialog;
import * as React from 'react';
import { Box, Divider, Modal, Typography } from '@mui/material';
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

const ViewCOALedgerModal = ({ openModal, setOpenModal, metadata = {} }) => {
    const { data, title } = metadata;

    return (
        <Modal
            onClose={() => setOpenModal(!openModal)} open={openModal}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description" sx={{ overflowY: "scroll" }} >

            <Box sx={style} minWidth={{ xs: "auto", md: 450 }}>
                <Typography id="modal-modal-title" variant="h6"> {title} </Typography>
                <Divider sx={{ mb: 2 }} />


                <VRow data={[
                    { label: "Account Code", value: 101010001 },
                    { label: "Account Name", value: "APM Global Logistics Bangladesh Ltd" },
                    { label: "Sub-Group", value: "Trade Receivables" },
                    { label: "Group", value: "Current Asset" },
                    { label: "Category", value: "Property & Assets" },
                    { label: "Added Date", value: "05/11/2023" },
                ]} />
            </Box>
        </Modal>
    );
}


export default ViewCOALedgerModal;
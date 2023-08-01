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

const ViewOpeningBalanceModal = ({ openModal, setOpenModal, metadata = {} }) => {
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
                    { label: "Party Name", value: data.party_name },
                    { label: "Project Name", value: data.project_name },
                    { label: "Account Name", value: data.account_name },
                    { label: "Opening Balance", value: data.opening_balance },
                    { label: "Type", value: data.type },
                    { label: "Opening Date", value: data.opening_date },
                ]} />
            </Box>
        </Modal>
    );
}


export default ViewOpeningBalanceModal;
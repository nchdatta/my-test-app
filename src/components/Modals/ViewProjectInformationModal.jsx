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

const ViewProjectInformationModal = ({ openModal, setOpenModal, metadata = {} }) => {
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
                    { label: "Project No.", value: "P-23-200" },
                    { label: "Project Name", value: data.project_name },
                    { label: "Customer Name", value: "Nayan Datta" },
                    { label: "Start Date", value: "12/05/2023" },
                    { label: "End Date", value: "20/06/2023" },
                    { label: "Aging Day", value: 10 },
                ]} />
            </Box>
        </Modal>
    );
}


export default ViewProjectInformationModal;
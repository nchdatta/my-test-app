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

const ViewRoleModal = ({ openModal, setOpenModal, metadata = {} }) => {
    const { data, title } = metadata;

    return (
        <Modal
            onClose={() => setOpenModal(!openModal)} open={openModal}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description" sx={{ overflowY: "scroll" }} >

            <Box sx={style} minWidth={{ xs: "auto", md: 450 }}>
                <Typography id="modal-modal-title" variant="h6"> {title} | {data.name}</Typography>
                <Divider sx={{ mb: 2 }} />

                <VRow data={[
                    { label: "Role ID", value: 1 },
                    { label: "Role Name", value: "Admin" },
                    { label: "Created at", value: "12/20/2023" },
                    { label: "Description", value: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, corrupti ullam! Eveniet corporis tempora animi." },
                ]} />

            </Box>
        </Modal>
    );
}


export default ViewRoleModal;
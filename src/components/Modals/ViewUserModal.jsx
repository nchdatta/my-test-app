import * as React from 'react';
import { Avatar, Box, Divider, Modal, Stack, Typography } from '@mui/material';
import VRow from '../Msc/VRow';
import { blueGrey } from '@mui/material/colors';

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

const ViewUserModal = ({ openModal, setOpenModal, metadata = {} }) => {
    const { data, title } = metadata;

    return (
        <Modal
            onClose={() => setOpenModal(!openModal)} open={openModal}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description" sx={{ overflowY: "scroll" }} >

            <Box sx={style} minWidth={{ xs: "auto", md: 450 }} >
                <Typography id="modal-modal-title" variant="h6"> {title} | {data.name}</Typography>
                <Divider sx={{ mb: 2 }} />

                <Stack direction={"row"} gap={{ xs: 2, md: 12 }}>
                    <VRow data={[
                        { label: "Emplyee ID", value: data.id },
                        { label: "Name", value: data.name },
                        { label: "Phone Number", value: data.phone },
                        { label: "Email Address", value: data.email },
                    ]} />
                    {data?.photo ?
                        <Avatar
                            src={data.photo}
                            alt="Profile"
                            sx={{
                                width: 80,
                                height: 80,
                                display: "flex",
                            }}
                        /> :
                        <Avatar sx={{
                            width: 80,
                            height: 80,
                            display: "flex",
                            bgcolor: blueGrey[300], fontSize: '2.5rem', fontWeight: 'bold'
                        }}>{data.name.charAt(0)}</Avatar>}
                </Stack>
            </Box>
        </Modal>
    );
}


export default ViewUserModal;
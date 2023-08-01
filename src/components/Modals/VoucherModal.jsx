import * as React from 'react';
import { Box, IconButton, InputAdornment, Modal, OutlinedInput, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import { accountData } from '../../__mock/msc';
import { BsPlus } from 'react-icons/bs';
import { FiSearch } from 'react-icons/fi';

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

const VoucherModal = ({ openModal, setOpenModal, setData = {}, metadata = {} }) => {
    const { title } = metadata;

    return (
        <Modal
            onClose={() => setOpenModal(!openModal)} open={openModal}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description" sx={{ overflowY: "scroll" }} >

            <Box sx={style} minWidth={{ xs: "auto", md: 650 }}>
                <Stack direction={"row"} justifyContent={"space-between"} alignItems={"center"}>
                    <Typography id="modal-modal-title" variant="h6" fontWeight={"bold"} mb={2}> {title} </Typography>
                    <OutlinedInput
                        size='small'
                        placeholder={"Search..."}
                        endAdornment={<InputAdornment position="end"><FiSearch /></InputAdornment>}
                    />
                </Stack>

                <Stack direction={"row"} gap={{ xs: 2, md: 12 }}>
                    <TableContainer >
                        <Table size="medium" aria-label="simple table">
                            <TableHead>
                                <TableRow >
                                    <TableCell align="center" sx={{ fontWeight: "bold" }}>SL. </TableCell>
                                    <TableCell align="center" sx={{ fontWeight: "bold" }}>Account No.</TableCell>
                                    <TableCell align="left" width={300} sx={{ fontWeight: "bold" }}>Account Name</TableCell>
                                    <TableCell align="center" sx={{ fontWeight: "bold" }}>Action</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {accountData?.map((row, index) => (
                                    <TableRow key={index}>
                                        <TableCell align="center" >{index + 1}</TableCell>
                                        <TableCell align="center">{row.account_number}</TableCell>
                                        <TableCell align="left" width={300}>{row.account_name}</TableCell>
                                        <TableCell align="center">
                                            <IconButton title='Add' onClick={() => {
                                                setOpenModal(false);
                                                setData(row);
                                            }}>
                                                <BsPlus size={20} />
                                            </IconButton>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>

                    </TableContainer>
                </Stack>
            </Box>
        </Modal>
    );
}


export default VoucherModal;
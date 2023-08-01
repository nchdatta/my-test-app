import React from 'react';
import {
    IconButton, Paper, Stack, Table, TableBody,
    TableCell, TableContainer, TableHead, TablePagination, TableRow
} from '@mui/material';
import { grey } from '@mui/material/colors';
import employees from '../../../__mock/employees';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { useState } from 'react';
import Page from '../../../layout/Page';
import PageHeader from '../../../layout/PageHeader';
import Filter from '../../../components/Forms/Filter';
import ActionMenu from '../../../components/Menus/ActionMenu';
import DeleteDialog from '../../../components/Dialogs/DeleteDialog';
import ViewUserModal from '../../../components/Modals/ViewUserModal';
import { TbArrowsSort } from 'react-icons/tb';

const UserManage = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const [page, setPage] = useState(0);
    const [limit, setLimit] = useState(10);
    const [rowData, setRowData] = useState(null);
    const [deleteDialog, setDeleteDialog] = useState(false);
    const [viewModal, setViewModal] = useState(false);
    const open = Boolean(anchorEl);
    const [employeesData, setEmployeesData] = useState(employees);

    const handleClick = (event, row) => {
        setAnchorEl(event.currentTarget);
        setRowData(row);
    };

    const handleSorting = () => {
        const sortedArray = [...employeesData];
        sortedArray.reverse();
        setEmployeesData(sortedArray);
    }


    return (
        <Page title='Manage Users'>
            <PageHeader
                title="Manage Users"
                btnText="Add User"
                navigate="/settings/user/add"
                currentPage="Manage Users" />

            <Filter placeholder='Search User...' enableExport />


            <TableContainer component={Paper} className="rad-grad">
                <Table size="medium" sx={{ minWidth: 650, minHeight: '70vh' }} aria-label="simple table">
                    <TableHead>
                        <TableRow sx={{ bgcolor: grey[100] }}>
                            <TableCell align="center" sx={{ fontWeight: "bold" }}>
                                <Stack direction={"row"} justifyContent={"center"} alignItems={"center"} gap={1}>
                                    <span>#</span> <IconButton title='Sort' onClick={handleSorting}>
                                        <TbArrowsSort size={15} />
                                    </IconButton>
                                </Stack>
                            </TableCell>
                            <TableCell align="left" sx={{ fontWeight: "bold" }}>Employee ID</TableCell>
                            <TableCell align="left" sx={{ fontWeight: "bold" }}>Name</TableCell>
                            <TableCell align="center" sx={{ fontWeight: "bold" }}>Role</TableCell>
                            <TableCell align="center" sx={{ fontWeight: "bold" }}>Status</TableCell>
                            <TableCell align="center" sx={{ fontWeight: "bold" }}>Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {employeesData.map((row, index) => (
                            <TableRow key={index}>
                                <TableCell align="center" >{index + 1}</TableCell>
                                <TableCell align="left">{row?.id}</TableCell>
                                <TableCell align="left">{row?.name}</TableCell>
                                <TableCell align="center">{row?.role}</TableCell>
                                <TableCell align="center">{row?.status}</TableCell>
                                <TableCell align="center">
                                    <IconButton
                                        id="basic-button"
                                        aria-controls={open ? 'basic-menu' : undefined}
                                        aria-haspopup="true"
                                        aria-expanded={open ? 'true' : undefined}
                                        onClick={(e) => handleClick(e, row)}  >
                                        <BsThreeDotsVertical />
                                    </IconButton>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
                <TablePagination
                    component="div"
                    count={100}
                    page={page}
                    onPageChange={(e, newPage) => {
                        setPage(newPage);
                    }}
                    rowsPerPage={limit}
                    onRowsPerPageChange={(e) => {
                        setLimit(parseInt(e.target.value, 10));
                        setPage(0);
                    }}
                />

            </TableContainer>



            <ActionMenu
                anchorEl={anchorEl}
                setAnchorEl={setAnchorEl}
                open={open}
                handleView={() => setViewModal(true)}
                editUrl={`/settings/user/edit/${rowData?.id}`}
                handleDeleteDialog={() => setDeleteDialog(true)} />


            {deleteDialog && <DeleteDialog setOpenDialog={setDeleteDialog} openDialog={deleteDialog} />}
            {viewModal && <ViewUserModal
                setOpenModal={setViewModal}
                openModal={viewModal}
                metadata={{ title: 'User Information', data: rowData }} />}

        </Page>
    );
};

export default UserManage;
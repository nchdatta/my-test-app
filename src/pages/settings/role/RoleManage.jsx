import React, { useState } from 'react';
import Page from '../../../layout/Page';
import PageHeader from '../../../layout/PageHeader';
import Filter from '../../../components/Forms/Filter';
import { IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow } from '@mui/material';
import { grey } from '@mui/material/colors';
import { TbArrowsSort } from 'react-icons/tb';
import { BsThreeDotsVertical } from 'react-icons/bs';
import ActionMenu from '../../../components/Menus/ActionMenu';
import DeleteDialog from '../../../components/Dialogs/DeleteDialog';
import RoleDialog from '../../../components/Dialogs/RoleDialog';
import { roles } from '../../../__mock/msc';
import ViewRoleModal from '../../../components/Modals/ViewRoleModal';

const RoleManage = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const [page, setPage] = useState(0);
    const [limit, setLimit] = useState(10);
    const [rowData, setRowData] = useState(null);
    const [deleteDialog, setDeleteDialog] = useState(false);
    const [viewModal, setViewModal] = useState(false);
    const [addNewDialog, setAddNewDialog] = useState(false);
    const open = Boolean(anchorEl);
    const [rolesData, setRolesData] = useState(roles);

    const handleClick = (event, row) => {
        setAnchorEl(event.currentTarget);
        setRowData(row);
    };

    const handleSorting = () => {
        const sortedArray = [...rolesData];
        sortedArray.reverse();
        setRolesData(sortedArray);
    }


    return (
        <Page title='Manage Roles'>
            <PageHeader
                title="Manage Roles"
                btnText="Add New"
                handleBtn={() => {
                    setRowData(null);
                    setAddNewDialog(true);
                }}
                currentPage="Manage Roles" />


            <Filter placeholder="Search Role..." enableExport />

            <TableContainer component={Paper} className="rad-grad">
                <Table size="medium" sx={{ minWidth: 650, minHeight: '70vh' }} aria-label="simple table">
                    <TableHead>
                        <TableRow sx={{ bgcolor: grey[100] }}>
                            <TableCell align="center" sx={{ fontWeight: "bold" }}>
                                <span>#</span> <IconButton title='Sort' onClick={handleSorting}>
                                    <TbArrowsSort size={15} />
                                </IconButton>
                            </TableCell>
                            <TableCell align="left" width={250} sx={{ fontWeight: "bold" }}>Role Name</TableCell>
                            <TableCell align="center" sx={{ fontWeight: "bold" }}>Created at</TableCell>
                            <TableCell align="center" sx={{ fontWeight: "bold" }}>Status</TableCell>
                            <TableCell align="center" sx={{ fontWeight: "bold" }}>Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rolesData?.map((row, index) => (
                            <TableRow key={index} hover>
                                <TableCell align="center">{index + 1}</TableCell>
                                <TableCell align="left" width={250}>{row?.name}</TableCell>
                                <TableCell align="center">{"12/01/2023"}</TableCell>
                                <TableCell align="center">{"active"}</TableCell>
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
                hanldeEdit={() => setAddNewDialog(true)}
                handleDeleteDialog={() => setDeleteDialog(true)} />


            {deleteDialog && <DeleteDialog setOpenDialog={setDeleteDialog} openDialog={deleteDialog} />}
            {addNewDialog && <RoleDialog setOpenDialog={setAddNewDialog} openDialog={addNewDialog} metadata={{ id: rowData?.id }} />}
            {viewModal && <ViewRoleModal
                setOpenModal={setViewModal}
                openModal={viewModal}
                metadata={{ title: 'Role Information', data: rowData }} />}
        </Page>
    );
};

export default RoleManage;
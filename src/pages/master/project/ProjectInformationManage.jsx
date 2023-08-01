import React, { useState } from 'react';
import { IconButton, Paper, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow } from '@mui/material';
import { grey } from '@mui/material/colors';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { TbArrowsSort } from 'react-icons/tb';
import { openingBalanceArray } from '../../../__mock/msc';
import Page from '../../../layout/Page';
import PageHeader from '../../../layout/PageHeader';
import Filter from '../../../components/Forms/Filter';
import ActionMenu from '../../../components/Menus/ActionMenu';
import DeleteDialog from '../../../components/Dialogs/DeleteDialog';
import ViewProjectInformationModal from '../../../components/Modals/ViewProjectInformationModal';

const ProjectInformationManage = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const [page, setPage] = useState(0);
    const [limit, setLimit] = useState(10);
    const [rowData, setRowData] = useState(null);
    const [deleteDialog, setDeleteDialog] = useState(false);
    const [viewModal, setViewModal] = useState(false);
    const open = Boolean(anchorEl);
    const [openingBalanceData, setOpeningBalanceData] = useState(openingBalanceArray);

    const handleClick = (event, row) => {
        setAnchorEl(event.currentTarget);
        setRowData(row);
    };

    const handleSorting = () => {
        const sortedArray = [...openingBalanceData];
        sortedArray.reverse();
        setOpeningBalanceData(sortedArray);
    }


    return (
        <Page title='Project Management'>
            <PageHeader
                title="Manage Projects"
                btnText="Add New"
                navigate='/master/project/add'
                currentPage="Manage Projects" />

            <Filter enableExport />


            <TableContainer component={Paper} className="rad-grad">
                <Table size="medium" sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow sx={{ bgcolor: grey[100] }}>
                            <TableCell align="center" sx={{ fontWeight: "bold" }}>
                                <Stack direction={"row"} justifyContent={"center"} alignItems={"center"} >
                                    <span>#</span> <IconButton title='Sort' onClick={handleSorting}>
                                        <TbArrowsSort size={15} />
                                    </IconButton>
                                </Stack>
                            </TableCell>
                            <TableCell align="left" width={200} sx={{ fontWeight: "bold" }}>Project No.</TableCell>
                            <TableCell align="left" width={200} sx={{ fontWeight: "bold" }}>Project Name</TableCell>
                            <TableCell align="left" sx={{ fontWeight: "bold" }}>Customer Name</TableCell>
                            <TableCell align="center" sx={{ fontWeight: "bold" }}>Start Date</TableCell>
                            <TableCell align="center" sx={{ fontWeight: "bold" }}>End Date</TableCell>
                            <TableCell align="center" sx={{ fontWeight: "bold" }}>Aging day</TableCell>
                            <TableCell align="right" sx={{ fontWeight: "bold" }}>Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {openingBalanceData?.map((row, index) => (
                            <TableRow key={index}>
                                <TableCell align="center" >{index + 1}</TableCell>
                                <TableCell align="left">{"P-23-011"}</TableCell>
                                <TableCell align="left">{row?.project_name}</TableCell>
                                <TableCell align="left">{"Nayan Datta"}</TableCell>
                                <TableCell align="center">{"12/04/2023"}</TableCell>
                                <TableCell align="center">{"20/06/2023"}</TableCell>
                                <TableCell align="center">{33}</TableCell>
                                <TableCell align="right">
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
                editUrl={`/master/project/edit/${rowData?.id}`}
                handleDeleteDialog={() => setDeleteDialog(true)} />


            {deleteDialog && <DeleteDialog setOpenDialog={setDeleteDialog} openDialog={deleteDialog} />}
            {viewModal && <ViewProjectInformationModal setOpenModal={setViewModal} openModal={viewModal} metadata={{ title: "Project Information", data: rowData }} />}

        </Page>
    );
};

export default ProjectInformationManage;
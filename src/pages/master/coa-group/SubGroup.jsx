import React, { useState } from 'react';
import Page from '../../../layout/Page';
import { financialYears } from '../../../__mock/msc';
import PageHeader from '../../../layout/PageHeader';
import Filter from '../../../components/Forms/Filter';
import { IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow } from '@mui/material';
import { grey } from '@mui/material/colors';
import { TbArrowsSort } from 'react-icons/tb';
import { BsThreeDotsVertical } from 'react-icons/bs';
import ActionMenu from '../../../components/Menus/ActionMenu';
import DeleteDialog from '../../../components/Dialogs/DeleteDialog';
import COASubGroupDialog from '../../../components/Dialogs/COASubGroupDialog';
import ViewCOAGroupModal from '../../../components/Modals/ViewCOAGroupModal';
import VRow from '../../../components/Msc/VRow';

const SubGroup = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const [page, setPage] = useState(0);
    const [limit, setLimit] = useState(10);
    const [rowData, setRowData] = useState(null);
    const [deleteDialog, setDeleteDialog] = useState(false);
    const [viewModal, setViewModal] = useState(false);
    const [addNewDialog, setAddNewDialog] = useState(false);
    const open = Boolean(anchorEl);
    const [financialYearsData, setFinancialYears] = useState(financialYears);

    const handleClick = (event, row) => {
        setAnchorEl(event.currentTarget);
        setRowData(row);
    };

    const handleSorting = () => {
        const sortedArray = [...financialYearsData];
        sortedArray.reverse();
        setFinancialYears(sortedArray);
    }


    return (
        <Page title='COA Sub-Group Management'>
            <PageHeader
                title="COA Sub-Group Management"
                btnText="Add New"
                handleBtn={() => {
                    setRowData(null);
                    setAddNewDialog(true);
                }}
                currentPage="COA Sub-Group Management" />


            <Filter placeholder="Search Sub-Group..." enableExport />

            <TableContainer component={Paper} className="rad-grad">
                <Table size="medium" sx={{ minWidth: 650, minHeight: '70vh' }} aria-label="simple table">
                    <TableHead>
                        <TableRow sx={{ bgcolor: grey[100] }}>
                            <TableCell align="center" sx={{ fontWeight: "bold" }}>
                                <span>#</span> <IconButton title='Sort' onClick={handleSorting}>
                                    <TbArrowsSort size={15} />
                                </IconButton>
                            </TableCell>
                            <TableCell align="left" sx={{ fontWeight: "bold" }}>Sub-Group Code</TableCell>
                            <TableCell align="left" sx={{ fontWeight: "bold" }}>Sub-Group Name</TableCell>
                            <TableCell align="left" sx={{ fontWeight: "bold" }}>Group Name</TableCell>
                            <TableCell align="center" sx={{ fontWeight: "bold" }}>Added on</TableCell>
                            <TableCell align="right" sx={{ fontWeight: "bold" }}>Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {financialYearsData.map((row, index) => (
                            <TableRow key={index}>
                                <TableCell align="center" sx={{ pl: 3 }}>{index + 1}</TableCell>
                                <TableCell align="left">{11001}</TableCell>
                                <TableCell align="left">{"Trade Receivables"}</TableCell>
                                <TableCell align="left">{"Current Asset"}</TableCell>
                                <TableCell align="center">{"14/10/2023"}</TableCell>
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
                hanldeEdit={() => setAddNewDialog(true)}
                handleDeleteDialog={() => setDeleteDialog(true)} />


            {deleteDialog && <DeleteDialog setOpenDialog={setDeleteDialog} openDialog={deleteDialog} />}
            {addNewDialog && <COASubGroupDialog setOpenDialog={setAddNewDialog} openDialog={addNewDialog} metadata={{ id: rowData?.id }} />}
            {viewModal && <ViewCOAGroupModal
                setOpenModal={setViewModal}
                openModal={viewModal}
                metadata={{ title: 'Sub-Group Information', data: rowData }} >
                <VRow data={[
                    { label: "Sub-Group Code", value: 1101 },
                    { label: "Sub-Group Name", value: "Trade Receivables" },
                    { label: "Group Name", value: "Current Asset" },
                    { label: "Added on", value: "14/10/2023" },
                    { label: "Brief Description", value: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, natus." },
                ]} />
            </ViewCOAGroupModal>}
        </Page>
    );
};

export default SubGroup;
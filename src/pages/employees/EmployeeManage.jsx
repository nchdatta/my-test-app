import { useState } from "react";
import {
    Avatar,
    IconButton,
    Paper,
    Stack,
    Table, TableBody, TableCell,
    TableContainer,
    TableHead, TablePagination, TableRow,
} from "@mui/material";
import { BsThreeDotsVertical } from "react-icons/bs";
import employees from "../../__mock/employees";
import PageHeader from "../../layout/PageHeader";
import { grey } from "@mui/material/colors";
import ActionMenu from "../../components/Menus/ActionMenu";
import DeleteDialog from "../../components/Dialogs/DeleteDialog";
import Page from "../../layout/Page";
import Filter from "../../components/Forms/Filter";
import ViewUserModal from "../../components/Modals/ViewUserModal";
import { TbArrowsSort } from "react-icons/tb";

const EmployeeManage = () => {
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
        <Page title="Manage Employees">
            <PageHeader
                title="Manage Employees"
                btnText="Add Employee"
                navigate="/employees/add"
                currentPage="Manage Employees" />


            <Filter placeholder="Search Employee..." enableExport />

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
                            <TableCell align="left" sx={{ fontWeight: "bold" }}>Photo</TableCell>
                            <TableCell align="left" sx={{ fontWeight: "bold" }}>Email</TableCell>
                            <TableCell align="left" sx={{ fontWeight: "bold" }}>Phone</TableCell>
                            <TableCell align="center" sx={{ fontWeight: "bold" }}>Status</TableCell>
                            <TableCell align="center" sx={{ fontWeight: "bold" }}>Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {employeesData.map((row, index) => (
                            <TableRow key={index} hover>
                                <TableCell align="center" >{index + 1}</TableCell>
                                <TableCell align="left">{row?.id}</TableCell>
                                <TableCell align="left">{row?.name}</TableCell>
                                <TableCell align="center">
                                    <Avatar alt={row?.name} src={row?.avatar} sx={{ width: 56, height: 56 }} />
                                </TableCell>
                                <TableCell align="left">{row?.email}</TableCell>
                                <TableCell align="left">{row?.phone}</TableCell>
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
                editUrl={`/employees/edit/${rowData?.id}`}
                handleDeleteDialog={() => setDeleteDialog(true)} />


            {deleteDialog && <DeleteDialog setOpenDialog={setDeleteDialog} openDialog={deleteDialog} />}
            {viewModal && <ViewUserModal
                setOpenModal={setViewModal}
                openModal={viewModal}
                metadata={{ title: 'Employee Information', data: rowData }} />}
        </Page>
    )
}

export default EmployeeManage;
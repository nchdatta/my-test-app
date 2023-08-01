import { useState } from "react";
import {
    IconButton,
    Paper,
    Stack,
    Table, TableBody, TableCell,
    TableContainer,
    TableHead, TablePagination, TableRow,
} from "@mui/material";
import DeleteDialog from "../../../components/Dialogs/DeleteDialog";
import Filter from "../../../components/Forms/Filter";
import ActionMenu from "../../../components/Menus/ActionMenu";
import Page from "../../../layout/Page";
import PageHeader from "../../../layout/PageHeader";
import { companies } from "../../../__mock/msc";
import { TbArrowsSort } from "react-icons/tb";
import { grey } from "@mui/material/colors";
import { BsThreeDotsVertical } from "react-icons/bs";


const CompanyManage = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const [page, setPage] = useState(0);
    const [limit, setLimit] = useState(10);
    const [rowData, setRowData] = useState(null);
    const [deleteDialog, setDeleteDialog] = useState(false);
    const open = Boolean(anchorEl);
    const [companiesData, setCompaniesData] = useState(companies);

    const handleClick = (event, row) => {
        setAnchorEl(event.currentTarget);
        setRowData(row);
    };

    const handleSorting = () => {
        const sortedArray = [...companiesData];
        sortedArray.reverse();
        setCompaniesData(sortedArray);
    }

    return (
        <Page title="Manage Companies">
            <PageHeader
                title="Manage Companies"
                btnText="Add New"
                navigate="/admin/company/add"
                currentPage="Manage Companies" />


            <Filter placeholder="Search Company..." enableExport />

            <TableContainer component={Paper} className="rad-grad">
                <Table size="medium" sx={{ minWidth: 650, minHeight: '70vh' }} aria-label="simple table">
                    <TableHead>
                        <TableRow sx={{ bgcolor: grey[100] }}>
                            <TableCell align="left" sx={{ fontWeight: "bold" }}>
                                <Stack direction={"row"} alignItems={"center"} gap={1}>
                                    <span>#</span> <IconButton title='Sort' onClick={handleSorting}>
                                        <TbArrowsSort size={15} />
                                    </IconButton>
                                </Stack>
                            </TableCell>
                            <TableCell align="left" sx={{ fontWeight: "bold" }}>Company Name</TableCell>
                            <TableCell align="center" sx={{ fontWeight: "bold" }}>Short Name</TableCell>
                            <TableCell align="left" sx={{ fontWeight: "bold" }}>Email</TableCell>
                            <TableCell align="left" sx={{ fontWeight: "bold" }}>Address</TableCell>
                            <TableCell align="right" sx={{ fontWeight: "bold" }}>Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {companiesData.map((row, index) => (
                            <TableRow key={index}>
                                <TableCell align="left" sx={{ pl: 4 }}>{index + 1}</TableCell>
                                <TableCell align="left">{row?.name}</TableCell>
                                <TableCell align="center">{row?.short_name}</TableCell>
                                <TableCell align="left">{row?.email}</TableCell>
                                <TableCell align="left">{row?.address}</TableCell>
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
                handlePrint={() => console.log("Print")}
                viewUrl={`/admin/company/view/${rowData?.id}`}
                editUrl={`/admin/company/edit/${rowData?.id}`}
                handleDeleteDialog={() => setDeleteDialog(true)} />


            {deleteDialog && <DeleteDialog setOpenDialog={setDeleteDialog} openDialog={deleteDialog} />}

        </Page>
    )
}

export default CompanyManage;
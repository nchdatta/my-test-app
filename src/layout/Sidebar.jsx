import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { FaChartPie, FaUsers, } from "react-icons/fa";
import { SiMastercard } from "react-icons/si";
import { RiBankCard2Fill } from "react-icons/ri";
import { GrTransaction } from "react-icons/gr";
import { HiPlusSm, HiMinusSm } from "react-icons/hi";
import { FcSalesPerformance } from "react-icons/fc";
import { FiSettings } from "react-icons/fi";
import { MdDashboard, MdAdminPanelSettings } from "react-icons/md";
import { Collapse, Typography } from "@mui/material";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import { useEffect, useState } from "react";
import SidebarMenu from "./SidebarMenu";
import useWindowDimensions from "../hooks/useWindowDimensions";
import { useLocation } from "react-router-dom";


const Sidebar = ({ open, onClose }) => {
    const [coaGroupSubmenu, setCoaGroupSubmenu] = useState(false);
    const location = useLocation()
    const [submenuControl, setSubmenuControl] = useState({
        admin: false,
        employees: false,
        master: false,
        coaGroup: false,
        transaction: false,
        vouchers: false,
        sales: false,
        reports: false,
        settings: false,
    })

    const [drawerWidth, setDrawerWidth] = useState(240)

    const handleClick = (key) => {
        let newValue = { ...submenuControl }
        const currentValue = newValue[key];
        Object.keys(newValue).forEach(keyItem => {
            newValue[keyItem] = false;
        });
        newValue[key] = !currentValue
        setSubmenuControl(newValue)
    }

    const { width } = useWindowDimensions();

    useEffect(() => {
        if (width > 960) {
            setDrawerWidth(270);
        } else {
            onClose();
            setDrawerWidth(320);
        }
    }, [width])

    useEffect(() => {
        if (location.pathname.includes("admin")) {
            let newValue = { ...submenuControl }
            newValue.admin = !newValue.admin
            setSubmenuControl(newValue)
        } else if (location.pathname.includes("employees")) {
            let newValue = { ...submenuControl }
            newValue.employees = !newValue.employees
            setSubmenuControl(newValue)
        } else if (location.pathname.includes("master")) {
            let newValue = { ...submenuControl }
            newValue.master = !newValue.master
            setSubmenuControl(newValue)
        } else if (location.pathname.includes("coaGroup")) {
            let newValue = { ...submenuControl }
            newValue.coaGroup = !newValue.coaGroup
            setSubmenuControl(newValue)
        } else if (location.pathname.includes("transaction")) {
            let newValue = { ...submenuControl }
            newValue.transaction = !newValue.transaction
            setSubmenuControl(newValue)
        } else if (location.pathname.includes("vouchers")) {
            let newValue = { ...submenuControl }
            newValue.vouchers = !newValue.vouchers
            setSubmenuControl(newValue)
        } else if (location.pathname.includes("sales")) {
            let newValue = { ...submenuControl }
            newValue.sales = !newValue.sales
            setSubmenuControl(newValue)
        } else if (location.pathname.includes("reports")) {
            let newValue = { ...submenuControl }
            newValue.reports = !newValue.reports
            setSubmenuControl(newValue)
        } else if (location.pathname.includes("settings")) {
            let newValue = { ...submenuControl }
            newValue.settings = !newValue.settings
            setSubmenuControl(newValue)
        }
    }, [])

    const handleClose = () => {
        if (width <= 960) {
            onClose();
        }
    }
    return (
        <Drawer
            open={open}
            onClose={onClose}
            variant={width > 960 ? "persistent" : "temporary"}
            sx={{
                width: drawerWidth,
                flexShrink: 0,
                [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box', zIndex: 200 },
            }}  >

            <Toolbar />

            <Box className="sidebarContainer" sx={{ overflowX: 'hidden', pt: 1.5, height: "100vh" }}>
                <List>
                    <SidebarMenu onClose={handleClose} directory="/dashboard"
                        icon={<MdDashboard size={20} color="#1ABC9C" />}
                        menuTitle={"Dashboard"} variant="p" fontWeight={"medium"} />

                    <ListItemButton onClick={() => handleClick("admin")}>
                        <ListItemIcon>
                            <MdAdminPanelSettings size={22} color="#28B463" />
                        </ListItemIcon>
                        <ListItemText primary={<Typography fontWeight={"medium"}>Admin</Typography>} />
                        {submenuControl.admin ? <HiMinusSm /> : <HiPlusSm />}
                    </ListItemButton>
                    <Collapse in={submenuControl.admin} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <SidebarMenu onClose={handleClose} icon={""} menuTitle={"Manage Company"} directory="/admin/company/manage" />
                            <SidebarMenu onClose={handleClose} icon={""} menuTitle={"Financial Year"} directory="/admin/financial-year" />
                            <SidebarMenu onClose={handleClose} icon={""} menuTitle={"Cost Center Group"} directory="/admin/cost-center-group" />
                            <SidebarMenu onClose={handleClose} icon={""} menuTitle={"Cost Center"} directory="/admin/cost-center" />
                            <SidebarMenu onClose={handleClose} icon={""} menuTitle={"Transaction Type"} directory="/admin/transaction-type" />
                            <SidebarMenu onClose={handleClose} icon={""} menuTitle={"Voucher Types"} directory="/admin/voucher-types" />
                            <SidebarMenu onClose={handleClose} icon={""} menuTitle={"Cash Flow Settings"} directory="/admin/cash-flow-settings/manage" />
                            <SidebarMenu onClose={handleClose} icon={""} menuTitle={"Invoice Settings"} directory="/admin/invoice-settings" />
                            <Divider />
                        </List>
                    </Collapse>

                    <ListItemButton onClick={() => handleClick("employees")}>
                        <ListItemIcon>
                            <FaUsers size={20} color="#28B463" />
                        </ListItemIcon>
                        <ListItemText primary={<Typography fontWeight={"medium"}>Employees</Typography>} />
                        {submenuControl.employees ? <HiMinusSm /> : <HiPlusSm />}
                    </ListItemButton>
                    <Collapse in={submenuControl.employees} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <SidebarMenu onClose={handleClose} icon={""} menuTitle={"Manage Employees"} directory="/employees/manage" />
                            <SidebarMenu onClose={handleClose} icon={""} menuTitle={"Add Employee"} directory="/employees/add" />
                            <Divider />
                        </List>
                    </Collapse>


                    <ListItemButton onClick={() => {
                        handleClick("master");
                        setCoaGroupSubmenu(false);
                    }}>
                        <ListItemIcon>
                            <SiMastercard size={22} color="#F1C40F" />
                        </ListItemIcon>
                        <ListItemText primary={<Typography fontWeight={"medium"}>Master</Typography>} />
                        {submenuControl.master ? <HiMinusSm /> : <HiPlusSm />}
                    </ListItemButton>
                    <Collapse in={submenuControl.master} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <ListItemButton onClick={() => setCoaGroupSubmenu(!coaGroupSubmenu)}>
                                <ListItemIcon>
                                    {/* <FaArrowRight size={20}   /> */}
                                </ListItemIcon>
                                <ListItemText primary={<Typography fontWeight={"medium"}>COA Group</Typography>} />
                                {coaGroupSubmenu ? <HiMinusSm /> : <HiPlusSm />}
                            </ListItemButton>
                            <Collapse in={coaGroupSubmenu} timeout="auto" unmountOnExit>
                                <List component="div" disablePadding>
                                    <SidebarMenu onClose={handleClose} icon={""} menuTitle={"Category"} directory="/master/coa/category" />
                                    <SidebarMenu onClose={handleClose} icon={""} menuTitle={"Group"} directory="/master/coa/group" />
                                    <SidebarMenu onClose={handleClose} icon={""} menuTitle={"Sub-Group"} directory="/master/coa/sub-group" />
                                    <SidebarMenu onClose={handleClose} icon={""} menuTitle={"Ledger"} directory="/master/coa/ledger" />
                                    <Divider />
                                </List>
                            </Collapse>
                            <SidebarMenu onClose={handleClose} icon={""} menuTitle={"Party Information"} directory="/master/party/manage" />
                            <SidebarMenu onClose={handleClose} icon={""} menuTitle={"Project Information"} directory="/master/project/manage" />
                            <Divider />
                        </List>
                    </Collapse>




                    <ListItemButton onClick={() => handleClick("transaction")}>
                        <ListItemIcon>
                            <GrTransaction size={20} />
                        </ListItemIcon>
                        <ListItemText primary={<Typography fontWeight={"medium"}>Transaction</Typography>} />
                        {submenuControl.transaction ? <HiMinusSm /> : <HiPlusSm />}
                    </ListItemButton>
                    <Collapse in={submenuControl.transaction} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <SidebarMenu onClose={handleClose} icon={""} menuTitle={"Opening Balance"} directory="/transaction/opening-balance" />
                            <Divider />
                        </List>
                    </Collapse>


                    <ListItemButton onClick={() => handleClick("vouchers")}>
                        <ListItemIcon>
                            <RiBankCard2Fill size={20} color="#239B56" />
                        </ListItemIcon>
                        <ListItemText primary={<Typography fontWeight={"medium"}>Vouchers</Typography>} />
                        {submenuControl.vouchers ? <HiMinusSm /> : <HiPlusSm />}
                    </ListItemButton>
                    <Collapse in={submenuControl.vouchers} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <SidebarMenu onClose={handleClose} icon={""} menuTitle={"Manage Vouchers"} directory="/vouchers/manage" />
                            <SidebarMenu onClose={handleClose} icon={""} menuTitle={"Cash Payment"} directory="/vouchers/cash-payment/manage" />
                            <SidebarMenu onClose={handleClose} icon={""} menuTitle={"Cash Receive"} directory="/vouchers/cash-receive/manage" />
                            <SidebarMenu onClose={handleClose} icon={""} menuTitle={"Bank Payment"} directory="/vouchers/bank-payment/manage" />
                            <SidebarMenu onClose={handleClose} icon={""} menuTitle={"Bank Receive"} directory="/vouchers/bank-receive/manage" />
                            <SidebarMenu onClose={handleClose} icon={""} menuTitle={"Journal"} directory="/vouchers/journal/manage" />
                            <SidebarMenu onClose={handleClose} icon={""} menuTitle={"Contra Voucher"} directory="/vouchers/contra-voucher/manage" />
                            <Divider />
                        </List>
                    </Collapse>

                    <SidebarMenu onClose={handleClose} directory="/sales/manage"
                        icon={<FcSalesPerformance size={20} />}
                        menuTitle={"Sales"} variant="p" fontWeight="medium" />


                    <ListItemButton onClick={() => handleClick("reports")}>
                        <ListItemIcon>
                            <FaChartPie size={20} color="#D4AC0D" />
                        </ListItemIcon>
                        <ListItemText primary={<Typography fontWeight={"medium"}>Reports</Typography>} />
                        {submenuControl.reports ? <HiMinusSm /> : <HiPlusSm />}
                    </ListItemButton>
                    <Collapse in={submenuControl.reports} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <SidebarMenu onClose={handleClose} icon={""} menuTitle={"COA Report"} directory="" />
                            <SidebarMenu onClose={handleClose} icon={""} menuTitle={"Voucher Reports"} directory="/reports/voucher-reports" />
                            <SidebarMenu onClose={handleClose} icon={""} menuTitle={"Party Ledger"} directory="/reports/party-ledger" />
                            <SidebarMenu onClose={handleClose} icon={""} menuTitle={"Cost Center"} directory="/reports/cost-center" />
                            <SidebarMenu onClose={handleClose} icon={""} menuTitle={"Cost Center Summary"} directory="/reports/cost-center-summary" />
                            <SidebarMenu onClose={handleClose} icon={""} menuTitle={"All Ledger"} directory="/reports/all-ledger" />
                            <SidebarMenu onClose={handleClose} icon={""} menuTitle={"Trial Balance"} directory="/reports/trial-balance" />
                            <SidebarMenu onClose={handleClose} icon={""} menuTitle={"Profit Loss"} directory="/reports/profit-loss" />
                            <SidebarMenu onClose={handleClose} icon={""} menuTitle={"Project wise Profit/ Loss"} directory="/reports/project-wise-profit-loss" />
                            <SidebarMenu onClose={handleClose} icon={""} menuTitle={"Balance Sheet"} directory="/reports/balance-sheet" />
                            <SidebarMenu onClose={handleClose} icon={""} menuTitle={"Cash Flow"} directory="/reports/cash-flow" />
                            <SidebarMenu onClose={handleClose} icon={""} menuTitle={"Opening Trial"} directory="/reports/opening-trial" />
                            <SidebarMenu onClose={handleClose} icon={""} menuTitle={"Aging Invoice"} directory="/reports/aging-invoice" />
                            <SidebarMenu onClose={handleClose} icon={""} menuTitle={"Account Receivable"} directory="/reports/account-receivable" />
                            <SidebarMenu onClose={handleClose} icon={""} menuTitle={"Account Payable"} directory="/reports/account-payable" />
                            <Divider />
                        </List>
                    </Collapse>


                    <ListItemButton onClick={() => handleClick("settings")}>
                        <ListItemIcon>
                            <FiSettings size={20} color="#117864" />
                        </ListItemIcon>
                        <ListItemText primary={<Typography fontWeight={"medium"}>Settings</Typography>} />
                        {submenuControl.settings ? <HiMinusSm /> : <HiPlusSm />}
                    </ListItemButton>
                    <Collapse in={submenuControl.settings} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <SidebarMenu onClose={handleClose} icon={""} menuTitle={"Manage Users"} directory="/settings/user/manage" />
                            <SidebarMenu onClose={handleClose} icon={""} menuTitle={"Manage Roles"} directory="/settings/role/manage" />
                            <SidebarMenu onClose={handleClose} icon={""} menuTitle={"Permissions"} directory="/settings/permissions/manage" />
                            <Divider />
                        </List>
                    </Collapse>
                </List>
            </Box>
        </Drawer>
    )
}

export default Sidebar;
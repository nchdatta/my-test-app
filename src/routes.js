import { useRoutes, Navigate } from "react-router-dom";
import Layout from "./layout/Layout";
import React, { Suspense } from "react";
import Loading from "./components/Loading/Loading";

const ContraVoucherEdit = React.lazy(() => import("./pages/vouchers/contra/ContraVoucherEdit"));
const ContraVoucherAdd = React.lazy(() => import("./pages/vouchers/contra/ContraVoucherAdd"));
const JournalVoucherEdit = React.lazy(() => import("./pages/vouchers/journal/JournalVoucherEdit"));
const JournalVoucherAdd = React.lazy(() => import("./pages/vouchers/journal/JournalVoucherAdd"));
const BankVoucherEdit = React.lazy(() => import("./pages/vouchers/bank/BankVoucherEdit"));
const BankVoucherAdd = React.lazy(() => import("./pages/vouchers/bank/BankVoucherAdd"));
const CashVoucherAdd = React.lazy(() => import("./pages/vouchers/cash/CashVoucherAdd"));
const CashVoucherEdit = React.lazy(() => import("./pages/vouchers/cash/CashVoucherEdit"));
const BankPayment = React.lazy(() => import("./pages/vouchers/bank/BankPayment"));
const ContraVoucher = React.lazy(() => import("./pages/vouchers/contra/ContraVoucher"));
const Journal = React.lazy(() => import("./pages/vouchers/journal/Journal"));
const BankReceive = React.lazy(() => import("./pages/vouchers/bank/BankReceive"));
const CompanyManage = React.lazy(() => import("./pages/admin/company/CompanyManage"));
const FinalcialYear = React.lazy(() => import("./pages/admin/FinalcialYear"));
const CostCenterGroup = React.lazy(() => import("./pages/admin/CostCenterGroup"));
const CostCenter = React.lazy(() => import("./pages/admin/CostCenter"));
const TransactionType = React.lazy(() => import("./pages/admin/TransactionType"));
const VoucherTypes = React.lazy(() => import("./pages/admin/VoucherTypes"));
const CashFlowSettings = React.lazy(() => import("./pages/admin/cash-flow-settings/CashFlowSettings"));
const InvoiceSettings = React.lazy(() => import("./pages/admin/InvoiceSettings"));
const Group = React.lazy(() => import("./pages/master/coa-group/Group"));
const SubGroup = React.lazy(() => import("./pages/master/coa-group/SubGroup"));
const Category = React.lazy(() => import("./pages/master/coa-group/Category"));
const Ledger = React.lazy(() => import("./pages/master/coa-group/Ledger"));
const OpeningBalance = React.lazy(() => import("./pages/transaction/OpeningBalance"));

const VoucherManage = React.lazy(() => import("./pages/vouchers/manage/VoucherManage"));
const VoucherAdd = React.lazy(() => import("./pages/vouchers/manage/VoucherAdd"));
const VoucherEdit = React.lazy(() => import("./pages/vouchers/manage/VoucherEdit"));
const CashPayment = React.lazy(() => import("./pages/vouchers/cash/CashPayment"));
const SalesManage = React.lazy(() => import("./pages/sales/SalesManage"));
const VoucherReport = React.lazy(() => import("./pages/reports/VoucherReport"));
const PartyLedger = React.lazy(() => import("./pages/reports/PartyLedger"));
const CostCenterReport = React.lazy(() => import("./pages/reports/CostCenterReport"));
const CostCenterSummary = React.lazy(() => import("./pages/reports/CostCenterSummary"));
const AllLedger = React.lazy(() => import("./pages/reports/AllLedger"));
const TrialBalance = React.lazy(() => import("./pages/reports/TrialBalance"));
const ProfitLoss = React.lazy(() => import("./pages/reports/ProfitLoss"));
const CashFlow = React.lazy(() => import("./pages/reports/CashFlow"));
const OpeningTrial = React.lazy(() => import("./pages/reports/OpeningTrial"));
const AgingInvoice = React.lazy(() => import("./pages/reports/AgingInvoice"));
const AccountReceivableReport = React.lazy(() => import("./pages/reports/AccountReceivableReport"));
const AccountPayableReport = React.lazy(() => import("./pages/reports/AccountPayableReport"));
const BalanceSheet = React.lazy(() => import("./pages/reports/BalanceSheet"));
const UserManage = React.lazy(() => import("./pages/settings/user/UserManage"));
const RoleManage = React.lazy(() => import("./pages/settings/role/RoleManage"));
const Permission = React.lazy(() => import("./pages/settings/Permission"));

const Login = React.lazy(() => import("./pages/auth/Login"));
const ForgotPassword = React.lazy(() => import("./pages/auth/ForgotPassword"));
const OTPVerify = React.lazy(() => import("./pages/auth/OTPVerify"));
const ResetPassword = React.lazy(() => import("./pages/auth/ResetPassword"));
const EmployeeManage = React.lazy(() => import("./pages/employees/EmployeeManage"));
const EmployeeAdd = React.lazy(() => import("./pages/employees/EmployeeAdd"));
const EmployeeEdit = React.lazy(() => import("./pages/employees/EmployeeEdit"));
const NotFound = React.lazy(() => import("./pages/error/NotFound"));
const Dashboard = React.lazy(() => import("./pages/dashboard/Dashboard"));
const MyProfile = React.lazy(() => import("./pages/profile/MyProfile"));
const AccountSettings = React.lazy(() => import("./pages/account-settings/AccountSettings"));
const UserAdd = React.lazy(() => import("./pages/settings/user/UserAdd"));
const UserEdit = React.lazy(() => import("./pages/settings/user/UserEdit"));

const CompanyAdd = React.lazy(() => import("./pages/admin/company/CompanyAdd"));
const CompanyEdit = React.lazy(() => import("./pages/admin/company/CompanyEdit"));
const CompanyView = React.lazy(() => import("./pages/admin/company/CompanyView"));
const CashFlowEdit = React.lazy(() => import("./pages/admin/cash-flow-settings/CashFlowEdit"));
const CashFlowAdd = React.lazy(() => import("./pages/admin/cash-flow-settings/CashFlowAdd"));
const PartyInformationManage = React.lazy(() => import("./pages/master/party/PartyInformationManage"));
const PartyAdd = React.lazy(() => import("./pages/master/party/PartyAdd"));
const PartyEdit = React.lazy(() => import("./pages/master/party/PartyEdit"));
const ProjectInformationManage = React.lazy(() => import("./pages/master/project/ProjectInformationManage"));
const ProjectAdd = React.lazy(() => import("./pages/master/project/ProjectAdd"));
const ProjectEdit = React.lazy(() => import("./pages/master/project/ProjectEdit"));
const PartyView = React.lazy(() => import("./pages/master/party/PartyView"));
const SaleAdd = React.lazy(() => import("./pages/sales/SaleAdd"));
const SaleEdit = React.lazy(() => import("./pages/sales/SaleEdit"));
const SaleView = React.lazy(() => import("./pages/sales/SaleView"));
const ProjectProfitLoss = React.lazy(() => import("./pages/reports/ProjectProfitLoss"));



const Router = () => {
    return (
        useRoutes([
            {
                path: "/dashboard",
                element: <Layout />,
                children: [
                    { path: "", element: <Suspense fallback={<Loading size={50} minHeight="80vh" />}><Dashboard /></Suspense> },
                ]
            },
            {
                path: "/admin",
                element: <Layout />,
                children: [
                    { path: "", element: <Navigate to={"/admin/company/manage"} /> },
                    { path: "company/manage", element: <Suspense fallback={<Loading size={50} minHeight="80vh" />}><CompanyManage /></Suspense> },
                    { path: "company/add", element: <Suspense fallback={<Loading size={50} minHeight="80vh" />}><CompanyAdd /></Suspense> },
                    { path: "company/edit/:id", element: <Suspense fallback={<Loading size={50} minHeight="80vh" />}><CompanyEdit /></Suspense> },
                    { path: "company/view/:id", element: <Suspense fallback={<Loading size={50} minHeight="80vh" />}><CompanyView /></Suspense> },
                    { path: "financial-year", element: <Suspense fallback={<Loading size={50} minHeight="80vh" />}><FinalcialYear /></Suspense> },
                    { path: "cost-center-group", element: <Suspense fallback={<Loading size={50} minHeight="80vh" />}><CostCenterGroup /></Suspense> },
                    { path: "cost-center", element: <Suspense fallback={<Loading size={50} minHeight="80vh" />}><CostCenter /></Suspense> },
                    { path: "transaction-type", element: <Suspense fallback={<Loading size={50} minHeight="80vh" />}><TransactionType /></Suspense> },
                    { path: "voucher-types", element: <Suspense fallback={<Loading size={50} minHeight="80vh" />}><VoucherTypes /></Suspense> },
                    { path: "cash-flow-settings/manage", element: <Suspense fallback={<Loading size={50} minHeight="80vh" />}><CashFlowSettings /></Suspense> },
                    { path: "cash-flow-settings/add", element: <Suspense fallback={<Loading size={50} minHeight="80vh" />}><CashFlowAdd /></Suspense> },
                    { path: "cash-flow-settings/edit/:id", element: <Suspense fallback={<Loading size={50} minHeight="80vh" />}><CashFlowEdit /></Suspense> },
                    { path: "invoice-settings", element: <Suspense fallback={<Loading size={50} minHeight="80vh" />}><InvoiceSettings /></Suspense> },
                ]
            },
            {
                path: "/employees",
                element: <Layout />,
                children: [
                    { path: "", element: <Navigate to={"/employees/manage"} /> },
                    { path: "manage", element: <Suspense fallback={<Loading size={50} minHeight="80vh" />}><EmployeeManage /></Suspense> },
                    { path: "add", element: <Suspense fallback={<Loading size={50} minHeight="80vh" />}><EmployeeAdd /></Suspense> },
                    { path: "edit/:id", element: <Suspense fallback={<Loading size={50} minHeight="80vh" />}><EmployeeEdit /></Suspense> },
                ]
            },
            {
                path: "/master",
                element: <Layout />,
                children: [
                    { path: "coa/group", element: <Suspense fallback={<Loading size={50} minHeight="80vh" />}><Group /></Suspense> },
                    { path: "coa/sub-group", element: <Suspense fallback={<Loading size={50} minHeight="80vh" />}><SubGroup /></Suspense> },
                    { path: "coa/category", element: <Suspense fallback={<Loading size={50} minHeight="80vh" />}><Category /></Suspense> },
                    { path: "coa/ledger", element: <Suspense fallback={<Loading size={50} minHeight="80vh" />}><Ledger /></Suspense> },
                    { path: "party/manage", element: <Suspense fallback={<Loading size={50} minHeight="80vh" />}><PartyInformationManage /></Suspense> },
                    { path: "party/add", element: <Suspense fallback={<Loading size={50} minHeight="80vh" />}><PartyAdd /></Suspense> },
                    { path: "party/edit/:id", element: <Suspense fallback={<Loading size={50} minHeight="80vh" />}><PartyEdit /></Suspense> },
                    { path: "party/view/:id", element: <Suspense fallback={<Loading size={50} minHeight="80vh" />}><PartyView /></Suspense> },
                    { path: "project/manage", element: <Suspense fallback={<Loading size={50} minHeight="80vh" />}><ProjectInformationManage /></Suspense> },
                    { path: "project/add", element: <Suspense fallback={<Loading size={50} minHeight="80vh" />}><ProjectAdd /></Suspense> },
                    { path: "project/edit/:id", element: <Suspense fallback={<Loading size={50} minHeight="80vh" />}><ProjectEdit /></Suspense> },
                ]
            },
            {
                path: "/transaction",
                element: <Layout />,
                children: [
                    { path: "", element: <Navigate to={"/transaction/opening-balance"} /> },
                    { path: "opening-balance", element: <Suspense fallback={<Loading size={50} minHeight="80vh" />}><OpeningBalance /></Suspense> },
                ]
            },
            {
                path: "/vouchers",
                element: <Layout />,
                children: [
                    { path: "", element: <Navigate to={"/vouchers/manage"} /> },
                    { path: "manage", element: <Suspense fallback={<Loading size={50} minHeight="80vh" />}><VoucherManage /></Suspense> },
                    { path: "add", element: <Suspense fallback={<Loading size={50} minHeight="80vh" />}><VoucherAdd /></Suspense> },
                    { path: "edit/:id", element: <Suspense fallback={<Loading size={50} minHeight="80vh" />}><VoucherEdit /></Suspense> },
                    { path: "cash-payment/manage", element: <Suspense fallback={<Loading size={50} minHeight="80vh" />}><CashPayment /></Suspense> },
                    {
                        path: "cash-payment/add", element: <Suspense fallback={<Loading size={50} minHeight="80vh" />}>
                            <CashVoucherAdd voucherType="payment"
                                metadata={{ title: "Add Cash Payment Voucher", breadcrumbLink: { label: "Manage Cash Payment", href: "/vouchers/cash-payment/manage" } }} />
                        </Suspense>
                    },
                    {
                        path: "cash-payment/edit/:id", element: <Suspense fallback={<Loading size={50} minHeight="80vh" />}>
                            <CashVoucherEdit voucherType="payment"
                                metadata={{ title: "Edit Cash Payment Voucher", breadcrumbLink: { label: "Manage Cash Payment", href: "/vouchers/cash-payment/manage" } }} />
                        </Suspense>
                    },
                    { path: "cash-receive/manage", element: <Suspense fallback={<Loading size={50} minHeight="80vh" />}><CashPayment /></Suspense> },
                    {
                        path: "cash-receive/add", element: <Suspense fallback={<Loading size={50} minHeight="80vh" />}>
                            <CashVoucherAdd voucherType="receive"
                                metadata={{ title: "Add Cash Receive Voucher", breadcrumbLink: { label: "Manage Cash Receive", href: "/vouchers/cash-receive/manage" } }} />
                        </Suspense>
                    },
                    {
                        path: "cash-receive/edit/:id", element: <Suspense fallback={<Loading size={50} minHeight="80vh" />}>
                            <CashVoucherEdit voucherType="receive"
                                metadata={{ title: "Edit Cash Receive Voucher", breadcrumbLink: { label: "Manage Cash Receive", href: "/vouchers/cash-receive/manage" } }} />
                        </Suspense>
                    },
                    { path: "bank-payment/manage", element: <Suspense fallback={<Loading size={50} minHeight="80vh" />}><BankPayment /></Suspense> },
                    {
                        path: "bank-payment/add", element: <Suspense fallback={<Loading size={50} minHeight="80vh" />}>
                            <BankVoucherAdd voucherType="payment"
                                metadata={{ title: "Add Bank Payment Voucher", breadcrumbLink: { label: "Manage Bank Payment", href: "/vouchers/bank-payment/manage" } }} />
                        </Suspense>
                    },
                    {
                        path: "bank-payment/edit/:id", element: <Suspense fallback={<Loading size={50} minHeight="80vh" />}>
                            <BankVoucherEdit voucherType="payment"
                                metadata={{ title: "Edit Bank Payment Voucher", breadcrumbLink: { label: "Manage Bank Payment", href: "/vouchers/bank-payment/manage" } }} />
                        </Suspense>
                    },
                    { path: "bank-receive/manage", element: <Suspense fallback={<Loading size={50} minHeight="80vh" />}><BankReceive /></Suspense> },
                    {
                        path: "bank-receive/add", element: <Suspense fallback={<Loading size={50} minHeight="80vh" />}>
                            <BankVoucherAdd voucherType="receive"
                                metadata={{ title: "Add Bank Receive Voucher", breadcrumbLink: { label: "Manage Bank Receive", href: "/vouchers/bank-receive/manage" } }} />
                        </Suspense>
                    },
                    {
                        path: "bank-receive/edit/:id", element: <Suspense fallback={<Loading size={50} minHeight="80vh" />}>
                            <BankVoucherEdit voucherType="receive"
                                metadata={{ title: "Edit Bank Receive Voucher", breadcrumbLink: { label: "Manage Bank Receive", href: "/vouchers/bank-receive/manage" } }} />
                        </Suspense>
                    },
                    { path: "journal/manage", element: <Suspense fallback={<Loading size={50} minHeight="80vh" />}><Journal /></Suspense> },
                    { path: "journal/add", element: <Suspense fallback={<Loading size={50} minHeight="80vh" />}><JournalVoucherAdd /></Suspense> },
                    { path: "journal/edit/:id", element: <Suspense fallback={<Loading size={50} minHeight="80vh" />}><JournalVoucherEdit /></Suspense> },
                    { path: "contra-voucher/manage", element: <Suspense fallback={<Loading size={50} minHeight="80vh" />}><ContraVoucher /></Suspense> },
                    { path: "contra-voucher/add", element: <Suspense fallback={<Loading size={50} minHeight="80vh" />}><ContraVoucherAdd /></Suspense> },
                    { path: "contra-voucher/edit/:id", element: <Suspense fallback={<Loading size={50} minHeight="80vh" />}><ContraVoucherEdit /></Suspense> },
                ]
            },
            {
                path: "/sales",
                element: <Layout />,
                children: [
                    { path: "", element: <Navigate to={"/sales/manage"} /> },
                    { path: "manage", element: <Suspense fallback={<Loading size={50} minHeight="80vh" />}><SalesManage /></Suspense> },
                    { path: "add", element: <Suspense fallback={<Loading size={50} minHeight="80vh" />}><SaleAdd /></Suspense> },
                    { path: "edit/:id", element: <Suspense fallback={<Loading size={50} minHeight="80vh" />}><SaleEdit /></Suspense> },
                    { path: "view/:id", element: <Suspense fallback={<Loading size={50} minHeight="80vh" />}><SaleView /></Suspense> },
                ]
            },
            {
                path: "/reports",
                element: <Layout />,
                children: [
                    { path: "", element: <Navigate to={"/reports/voucher-reports"} /> },
                    { path: "voucher-reports", element: <Suspense fallback={<Loading size={50} minHeight="80vh" />}><VoucherReport /></Suspense> },
                    { path: "party-ledger", element: <Suspense fallback={<Loading size={50} minHeight="80vh" />}><PartyLedger /></Suspense> },
                    { path: "cost-center", element: <Suspense fallback={<Loading size={50} minHeight="80vh" />}><CostCenterReport /></Suspense> },
                    { path: "cost-center-summary", element: <Suspense fallback={<Loading size={50} minHeight="80vh" />}><CostCenterSummary /></Suspense> },
                    { path: "all-ledger", element: <Suspense fallback={<Loading size={50} minHeight="80vh" />}><AllLedger /></Suspense> },
                    { path: "trial-balance", element: <Suspense fallback={<Loading size={50} minHeight="80vh" />}><TrialBalance /></Suspense> },
                    { path: "profit-loss", element: <Suspense fallback={<Loading size={50} minHeight="80vh" />}><ProfitLoss /></Suspense> },
                    { path: "project-wise-profit-loss", element: <Suspense fallback={<Loading size={50} minHeight="80vh" />}><ProjectProfitLoss /></Suspense> },
                    { path: "balance-sheet", element: <Suspense fallback={<Loading size={50} minHeight="80vh" />}><BalanceSheet /></Suspense> },
                    { path: "cash-flow", element: <Suspense fallback={<Loading size={50} minHeight="80vh" />}><CashFlow /></Suspense> },
                    { path: "opening-trial", element: <Suspense fallback={<Loading size={50} minHeight="80vh" />}><OpeningTrial /></Suspense> },
                    { path: "aging-invoice", element: <Suspense fallback={<Loading size={50} minHeight="80vh" />}><AgingInvoice /></Suspense> },
                    { path: "account-receivable", element: <Suspense fallback={<Loading size={50} minHeight="80vh" />}><AccountReceivableReport /></Suspense> },
                    { path: "account-payable", element: <Suspense fallback={<Loading size={50} minHeight="80vh" />}><AccountPayableReport /></Suspense> },
                ]
            },
            {
                path: "/settings",
                element: <Layout />,
                children: [
                    { path: "", element: <Navigate to={"/settings/users/manage"} /> },
                    { path: "user/manage", element: <Suspense fallback={<Loading size={50} minHeight="80vh" />}><UserManage /></Suspense> },
                    { path: "user/add", element: <Suspense fallback={<Loading size={50} minHeight="80vh" />}><UserAdd /></Suspense> },
                    { path: "user/edit/:id", element: <Suspense fallback={<Loading size={50} minHeight="80vh" />}><UserEdit /></Suspense> },
                    { path: "role/manage", element: <Suspense fallback={<Loading size={50} minHeight="80vh" />}><RoleManage /></Suspense> },
                    { path: "permissions/manage", element: <Suspense fallback={<Loading size={50} minHeight="80vh" />}><Permission /></Suspense> },
                ]
            },
            {
                path: "/profile",
                element: <Layout />,
                children: [
                    { path: "", element: <Suspense fallback={<Loading size={50} minHeight="80vh" />}><MyProfile /></Suspense> },
                ]
            },
            {
                path: "/account-settings",
                element: <Layout />,
                children: [
                    { path: "", element: <Suspense fallback={<Loading size={50} minHeight="80vh" />}><AccountSettings /></Suspense> }
                ]
            },
            {
                path: "/", element: <Navigate to="/auth/login" />
            },
            {
                path: "/auth/login",
                element: <Suspense fallback={<Loading size={50} minHeight="80vh" />}><Login /></Suspense>
            },
            {
                path: "/auth/forgot-password",
                element: <Suspense fallback={<Loading size={50} minHeight="80vh" />}><ForgotPassword /></Suspense>
            },
            {
                path: "/auth/otp-verify",
                element: <Suspense fallback={<Loading size={50} minHeight="80vh" />}><OTPVerify /></Suspense>
            },
            {
                path: "/auth/reset-password",
                element: <Suspense fallback={<Loading size={50} minHeight="80vh" />}><ResetPassword /></Suspense>
            },
            {
                path: "*",
                element: <Suspense fallback={<Loading size={50} minHeight="80vh" />}><NotFound /></Suspense>
            }
        ]));
}

export default Router;
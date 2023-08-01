import Page from "../../layout/Page";
import { Grid, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, } from "@mui/material";
import AmountStatusCard from "../../components/Dashboard/AmountStatusCard";
import { grey } from "@mui/material/colors";
import { accountReportArray } from "../../__mock/msc";
import WidgetTitle from "../../components/Dashboard/WidgetTitle";
import IncomeComparisonChart from "../../components/Dashboard/IncomeComparisonChart";
import ExpenseComparisonChart from "../../components/Dashboard/ExpenseComparisonChart";
import PositiveNegativeChart from "../../components/Dashboard/PositiveNegativeChart";
import BarchartCustom from "../../components/Dashboard/BarchartCustom";
import { BsInfoCircleFill } from "react-icons/bs";
import { useState } from "react";
import ViewCompanyDetailsDialog from "../../components/Modals/ViewCompanyDetailsDialog";

const revenueData = [
    {
        month: 'January',
        Income: 4000,
    },
    {
        month: 'February',
        Income: 3000,
    },
    {
        month: 'March',
        Income: 2000,
    },
    {
        month: 'April',
        Income: 2780,
    },
    {
        month: 'May',
        Income: 1890,
    },
    {
        month: 'June',
        Income: 2390,
    },
    {
        month: 'July',
        Income: 3490,
    },
];

const expenseData = [
    {
        month: 'January',
        Expense: 2500,
    },
    {
        month: 'February',
        Expense: 3000,
    },
    {
        month: 'March',
        Expense: 500,
    },
    {
        month: 'April',
        Expense: 1500,
    },
    {
        month: 'May',
        Expense: 1200,
    },
    {
        month: 'June',
        Expense: 1000,
    },
    {
        month: 'July',
        Expense: 2000,
    },
];
const cashBalanceData = [
    {
        month: 'April',
        Amount: 700,
    },
    {
        month: 'May',
        Amount: 1800,
    },
    {
        month: 'June',
        Amount: 1500,
    },
];
const incomeData = [
    {
        month: 'May',
        Amount: 2500,
    },
    {
        month: 'Jun',
        Amount: 1200,
    },
    {
        month: 'July',
        Amount: -1700,
    },
];


const Dashboard = () => {
    const [viewCustomerModal, setViewCustomerModal] = useState(false);

    return (
        <Page title={"Dashboard"}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6} lg={3}>
                    <AmountStatusCard cardAmount={508455} cardTitle={"Total Income"} showStatus={false} />
                </Grid>
                <Grid item xs={12} md={6} lg={3}>
                    <AmountStatusCard cardAmount={21500}
                        cardTitle={"Total Expense"} />
                </Grid>
                <Grid item xs={12} md={6} lg={3}>
                    <AmountStatusCard cardAmount={0}
                        cardTitle={"Net Loss"} />
                </Grid>
                <Grid item xs={12} md={6} lg={3}>
                    <AmountStatusCard cardAmount={486955.00}
                        cardTitle={"Net Profit"} />
                </Grid>
            </Grid>

            <Stack>
                <WidgetTitle title="Top Customers" subTitle="Current Financial Year" mt={5} mb={1.5} />
                <TableContainer sx={{ borderRadius: 1.5 }}>
                    <Table size="medium" sx={{ minWidth: 650, border: `1px solid ${grey[300]}` }} aria-label="simple table">
                        <TableHead>
                            <TableRow sx={{ bgcolor: "#808B96" }}>
                                <TableCell align="left" sx={{ fontWeight: "bold", color: "#F7F9F9" }}>SL.</TableCell>
                                <TableCell align="left" sx={{ fontWeight: "bold", color: "#F7F9F9" }}>Company Name</TableCell>
                                <TableCell align="center" sx={{ fontWeight: "bold", color: "#F7F9F9" }}>Total Revenues</TableCell>
                                <TableCell align="center" sx={{ fontWeight: "bold", color: "#F7F9F9" }}>Total Expenses</TableCell>
                                <TableCell align="center" sx={{ fontWeight: "bold", color: "#F7F9F9" }}>Gross</TableCell>
                                <TableCell align="center" sx={{ fontWeight: "bold", color: "#F7F9F9" }}></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {accountReportArray?.map((row, index) => (
                                <TableRow key={index}>
                                    <TableCell align="left">{index + 1}</TableCell>
                                    <TableCell align="left">{"Airport-APM Global Logistic Ltd"}</TableCell>
                                    <TableCell align="center">{62000.00}</TableCell>
                                    <TableCell align="center">{62000.00}</TableCell>
                                    <TableCell align="center">{0.00}</TableCell>
                                    <TableCell align="center">
                                        <BsInfoCircleFill size={15} color="#85929E" cursor={"pointer"} onClick={() => setViewCustomerModal(true)} />
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>

                </TableContainer>
            </Stack>


            <Grid container spacing={4} mt={5}>
                <Grid item xs={12} md={6} >
                    <Stack p={2} className="rad-grad">
                        <WidgetTitle title="Income/ Revenue" subTitle="Current Year (Monthly)" mb={4} />
                        <BarchartCustom data={revenueData} yxLabel="Income" barDataKey="Income" />
                    </Stack>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Stack p={2} className="rad-grad">
                        <WidgetTitle title="Expense" subTitle="Current Year (Monthly)" mb={4} />
                        <BarchartCustom data={expenseData} yxLabel="Expense" barDataKey="Expense" fill="#52BE80" />
                    </Stack>
                </Grid>
            </Grid>

            <Grid container spacing={4} mt={5}>
                <Grid item xs={12} md={6} >
                    <Stack p={2} className="rad-grad">
                        <WidgetTitle title="Cash Balance" subTitle="Last Three(3) Months" mb={4} />
                        <BarchartCustom data={cashBalanceData} yxLabel="Cash Balance" barDataKey="Amount" barSize={40} fill="#F1C40F" />
                    </Stack>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Stack p={2} className="rad-grad">
                        <WidgetTitle title="Net Income" subTitle="Last Three(3) Months" mb={4} />
                        <PositiveNegativeChart data={incomeData} />
                    </Stack>
                </Grid>
            </Grid>


            <Grid container spacing={4} mt={5}>
                <Grid item xs={12} md={6} >
                    <Stack p={2} className="rad-grad">
                        <WidgetTitle title="Revenue Comparison" subTitle="Last Year/Current Year" mb={4} />
                        <IncomeComparisonChart />
                    </Stack>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Stack p={2} className="rad-grad">
                        <WidgetTitle title="Expense Comparison" subTitle="Last Year/Current Year" mb={4} />
                        <ExpenseComparisonChart />
                    </Stack>
                </Grid>
            </Grid>

            {viewCustomerModal && <ViewCompanyDetailsDialog setOpenModal={setViewCustomerModal} openModal={viewCustomerModal} />}
        </Page>
    )
}
export default Dashboard;
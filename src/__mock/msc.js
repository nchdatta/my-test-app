export const roles = [
    { id: 1, name: "Administrator" },
    { id: 2, name: "Operator" },
    { id: 3, name: "Sales Group" },
    { id: 4, name: 'Accounts' },
    { id: 5, name: 'Admin & IT' },
    { id: 6, name: 'Super Admin' },
    { id: 7, name: 'Developer' }
];


export const moduleMenus = [
    { name: "Admin", menu: "Company" },
    { name: "Admin", menu: "Fiscal Year" },
    { name: "Admin", menu: "Cost Center Group" },
    { name: "Admin", menu: "Cost Center" },
    { name: "Admin", menu: "Transaction Type" },
    { name: "Admin", menu: "Voucher Prefix" },
    { name: "Admin", menu: "Cash Flow Settings" },
    { name: "Admin", menu: "Invoice Settings" },
    { name: "Employees", menu: "Manage Employee" },
    { name: "Master", menu: "COA Group" },
    { name: "Master", menu: "COA Sub-Group" },
    { name: "Master", menu: "COA Category" },
    { name: "Master", menu: "COA Ledger" },
    { name: "Master", menu: "Party Information" },
    { name: "Master", menu: "Project Information" },
];


export const openingBalanceArray = [
    { id: 1, party_name: "Robi Axiata", project_name: "Robi ERP", account_name: "ABC", opening_balance: 10000, type: "cash", opening_date: "12/05/2023" },
    { id: 2, party_name: "Airtel", project_name: "Airtel ERP", account_name: "Test ABC", opening_balance: 15000, type: "debit", opening_date: "20/05/2023" },
];

export const salesArrayData = [
    { id: 1, invoice: "INV230500009", party: "DHL Global Forwarding BGD. Ltd", net_amount: 1425, invoice_date: "05/17/2023", vat_challan: "rr4344", bill_number: 444432, invoice_sub_date: "05/06/2023" },
    { id: 2, invoice: "INV230500008", party: "Prottoy Technologies Limited", net_amount: 7574, invoice_date: "05/17/2023", vat_challan: "p11111", bill_number: 191091, invoice_sub_date: "05/16/2023" },
];

export const companies = [
    {
        id: 1,
        short_name: "Test",
        email: "test@gmail.com",
        name: "Frontdesk Bangladesh Ltd",
        address: "Banani, Dhaka, 1207",
    },
    {
        id: 2,
        short_name: "Test",
        email: "test@gmail.com",
        name: "Golden Infotech Limited",
        address: "Uttara, Dhaka, 1207",
    },
    {
        id: 3,
        short_name: "Test",
        email: "test@gmail.com",
        name: "Bhuiyan Group of Industries",
        address: "USA",
    },
    {
        id: 4,
        short_name: "Test",
        email: "test@gmail.com",
        name: "Axon Corporation",
        address: "Australia",
    },
    {
        id: 5,
        short_name: "Test",
        email: "test@gmail.com",
        name: "Seiko Corporation",
        address: "Japan",
    },
    {
        id: 6,
        short_name: "Test",
        email: "test@gmail.com",
        name: "Google LLC",
        address: "USA",
    },

];


export const financialYears = [
    { id: 1, start_date: "01/01/2018", end_date: "01/01/2019" },
    { id: 2, start_date: "01/01/2019", end_date: "01/01/2020" },
    { id: 3, start_date: "01/01/2020", end_date: "01/01/2021" },
    { id: 4, start_date: "01/01/2021", end_date: "01/01/2022" },
    { id: 5, start_date: "01/01/2022", end_date: "01/01/2023" },
];

export const accountData = [
    { id: 1, account_name: "APM Global Logistics Bangladesh Ltd", account_number: "101010001" },
    { id: 2, account_name: "Asian Consumer Care Pvt Ltd.", account_number: "101010002" },
    { id: 3, account_name: "Bangladesh Honda Private Limited.", account_number: "101010006" },
];
export const accountReportArray = [
    { id: 1, party_name: "Airport-APM Global Logistic Ltd", account_name: "APM Global Logistics Bangladesh Ltd", debit: 444455, credit: 365000, balance: 79455 },
    { id: 2, party_name: "Asian Consumer Care Pvt Ltd.", account_name: "DBG Technology BD Ltd", debit: 4000, credit: 0, balance: 4000 },
];
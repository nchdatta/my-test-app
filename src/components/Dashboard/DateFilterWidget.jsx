import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle, FormControl, InputLabel, MenuItem,
    Paper, Select,
    Slide,
    Stack,
    Typography
} from "@mui/material";
import {BsCalendarWeek} from "react-icons/bs";
import {forwardRef, useState} from "react";

const Transition = forwardRef(function Transition(props, ref) {
    return <Slide direction="down" ref={ref} {...props} />;
});

export default function DateFilterWidget() {
    const [open, setOpen] = useState(false);
    const [dateFilter, setDateFilter] = useState("This Month");
    const [selectedMonth, setSelectedMont] = useState("January");

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleChange = (event) => {
        setDateFilter(event.target.value);
    }

    return (
        <>
            <Paper elevation={0} sx={{p: 2}} onClick={handleClickOpen}>
                <Typography variant={"h6"} color={"#818181"}>Auto Date Range</Typography>
                <Stack direction={"row"} sx={{mt: 2}} alignItems={"center"}>
                    <BsCalendarWeek color={"#818181"} size={20}/>
                    <Typography variant={"h6"} sx={{ml: 2}}>{dateFilter === "Specific Month" ? selectedMonth : dateFilter}</Typography>
                </Stack>
            </Paper>
            <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle>{"Filter Options"}</DialogTitle>
                <DialogContent sx={{minWidth: 350}}>
                    <FormControl fullWidth size={"small"}>
                        <Select
                            value={dateFilter}
                            onChange={handleChange}
                        >
                            <MenuItem value={"This Month"}>This Month</MenuItem>
                            <MenuItem value={"Last 3 Months"}>Last 3 Months</MenuItem>
                            <MenuItem value={"Last 6 Months"}>Last 6 Months</MenuItem>
                            <MenuItem value={"Last 1 Year"}>Last 1 Year</MenuItem>
                            <MenuItem value={"Specific Month"}>Specific Month</MenuItem>
                        </Select>
                    </FormControl>
                    {dateFilter === "Specific Month" &&
                        <FormControl fullWidth size={"small"} sx={{mt: 3}}>
                            <InputLabel>Select Month</InputLabel>
                            <Select
                                value={selectedMonth}
                                onChange={(e) => setSelectedMont(e.target.value)}
                                label={"Select Month"}
                            >
                                <MenuItem value={"January"}>January</MenuItem>
                                <MenuItem value={"February"}>February</MenuItem>
                                <MenuItem value={"March"}>March</MenuItem>
                                <MenuItem value={"April"}>April</MenuItem>
                                <MenuItem value={"May"}>May</MenuItem>
                                <MenuItem value={"June"}>June</MenuItem>
                                <MenuItem value={"July"}>July</MenuItem>
                                <MenuItem value={"August"}>August</MenuItem>
                                <MenuItem value={"September"}>September</MenuItem>
                                <MenuItem value={"October"}>October</MenuItem>
                                <MenuItem value={"November"}>November</MenuItem>
                                <MenuItem value={"December"}>December</MenuItem>
                            </Select>
                        </FormControl>
                    }
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Filter</Button>
                </DialogActions>
            </Dialog>
        </>
    )
}
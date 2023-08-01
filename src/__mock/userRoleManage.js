import {Switch} from "@mui/material";

export const userRoleHeading = [
    {
        id: "sl",
        label: "SL",
        align: "center",
        width: 0
    },
    {
        id: "name",
        label: "Name",
        align: "center",
        width: 0
    },
    {
        id: "role",
        label: "Role",
        align: "center",
        width: 0
    },
    {
        id: "status",
        label: "Status",
        align: "center",
        width: 0
    },
]

export const userRoleData = [
    {
        sl: 1,
        name: "Rakib",
        role: "Admin",
        status: <Switch defaultChecked size={"small"} sx={{'& .MuiSwitch-switchBase': {color: "#33C4B1", '&.Mui-checked': {color: "#33C4B1", '& + .MuiSwitch-track': {background: "rgba(51,196,177,0.7)"}}}}}/>
    },
    {
        sl: 2,
        name: "Rakib 2",
        role: "Admin",
        status: <Switch defaultChecked size={"small"} sx={{'& .MuiSwitch-switchBase': {color: "#33C4B1", '&.Mui-checked': {color: "#33C4B1", '& + .MuiSwitch-track': {background: "rgba(51,196,177,0.7)"}}}}}/>
    },
    {
        sl: 3,
        name: "Rakib 3",
        role: "Admin",
        status: <Switch size={"small"} sx={{'& .MuiSwitch-switchBase': {color: "#33C4B1", '&.Mui-checked': {color: "#33C4B1", '& + .MuiSwitch-track': {background: "rgba(51,196,177,0.7)"}}}}}/>
    },
    {
        sl: 4,
        name: "Rakib 4",
        role: "Admin",
        status: <Switch defaultChecked size={"small"} sx={{'& .MuiSwitch-switchBase': {color: "#33C4B1", '&.Mui-checked': {color: "#33C4B1", '& + .MuiSwitch-track': {background: "rgba(51,196,177,0.7)"}}}}}/>
    },

]
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListItem from "@mui/material/ListItem";
import { Link, useLocation } from "react-router-dom";
import { Typography } from "@mui/material";

const SidebarMenu = ({ icon, menuTitle, directory = "", onClose, variant = "body2", fontWeight = "normal" }) => {
    const location = useLocation()
    return (
        <Link to={directory} onClick={onClose} style={{ textDecoration: "none" }}>
            <ListItem className={location.pathname === directory ? "sidebar-menu-active" : ""} disablePadding>
                <ListItemButton>
                    <ListItemIcon style={{ color: location.pathname === directory ? "#3F80EA" : "" }}>
                        {icon}
                    </ListItemIcon>
                    <ListItemText primary={<Typography color={location.pathname === directory ? "#3F80EA" : "#0C1E5B"} variant={variant} fontWeight={fontWeight}>{menuTitle}</Typography>} />
                </ListItemButton>
            </ListItem>
        </Link>
    )
}

export default SidebarMenu;
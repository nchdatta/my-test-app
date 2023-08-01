import {
    AppBar,
    Avatar,
    Box, Divider,
    IconButton,
    Menu, MenuItem,
    Stack,
    Toolbar,
    Tooltip,
} from "@mui/material";
import { AiFillSetting, AiOutlineLogin, } from "react-icons/ai";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { blueGrey, } from "@mui/material/colors";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = ({ open, toggleDrawer, handle }) => {
    const navigate = useNavigate();
    const [anchorEl, setAnchorEl] = useState(null);
    const [isFullscreen, setIsFullscreen] = useState(false)
    const menuOpen = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const onToggleFullscreen = () => {
        if (isFullscreen) {
            handle.exit()
            setIsFullscreen(false)
        } else {
            handle.enter()
            setIsFullscreen(true)
        }
    }

    return (
        // <AppBar position="fixed" open={open} sx={{background: "white", zIndex: (theme) => theme.zIndex.drawer + 1}}>
        <AppBar position="fixed" open={open} sx={{ background: "white", zIndex: (theme) => theme.zIndex.drawer + 1, boxShadow: 'rgba(145, 158, 171, 0.2) 0px 0px 2px 0px, rgba(145, 158, 171, 0.12) 0px 6px 12px -4px', }}>
            <Toolbar>
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    onClick={toggleDrawer}
                    edge="start"
                    sx={{ mr: 2 }} >
                    <HiOutlineMenuAlt1 color={"#0F3F62"} />
                </IconButton>
                <Stack sx={{ width: "100%" }} direction="row" justifyContent="space-between" alignItems="center">
                    <Link to={'/dashboard'}>
                        <img src="/assets/logo.png" alt="GDN ERP Logo" style={{ maxHeight: "40px" }} />
                    </Link>
                    <Stack direction="row" alignItems="center">
                        <Box>
                            <Tooltip title="Account settings">
                                <IconButton
                                    onClick={handleClick}
                                    size="small"
                                    sx={{ ml: 2 }}
                                    aria-controls={menuOpen ? 'account-menu' : undefined}
                                    aria-haspopup="true"
                                    aria-expanded={menuOpen ? 'true' : undefined} >
                                    {
                                        // user?.photo_url ?
                                        //     <Avatar
                                        //         alt="Profile"
                                        //         src={user?.photo_url}
                                        //         width={20} height={20} /> :
                                        <Avatar width={20} height={20} sx={{ bgcolor: blueGrey[400], fontSize: '1.2rem', fontWeight: 'bold' }}>N</Avatar>}
                                </IconButton>
                            </Tooltip>
                        </Box>
                    </Stack>
                    <Menu
                        anchorEl={anchorEl}
                        id="account-menu"
                        open={menuOpen}
                        onClose={handleClose}
                        onClick={handleClose}
                        PaperProps={{
                            elevation: 0,
                            sx: {
                                overflow: 'visible',
                                filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                                mt: 1.5,
                                '& .MuiAvatar-root': {
                                    width: 32,
                                    height: 32,
                                    ml: -0.5,
                                    mr: 1,
                                },
                                '&:before': {
                                    content: '""',
                                    display: 'block',
                                    position: 'absolute',
                                    top: 0,
                                    right: 14,
                                    width: 10,
                                    height: 10,
                                    bgcolor: 'background.paper',
                                    transform: 'translateY(-50%) rotate(45deg)',
                                    zIndex: 0,
                                },
                            },
                        }}
                        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                    >
                        <MenuItem onClick={() => {
                            navigate('/profile');
                            setAnchorEl(null);
                        }}>
                            <Avatar /> My Profile
                        </MenuItem>
                        <MenuItem onClick={() => {
                            navigate('/account-settings');
                            setAnchorEl(null);
                        }}>
                            <Avatar><AiFillSetting /></Avatar> Account Settings
                        </MenuItem>
                        <Divider />
                        <MenuItem onClick={() => {
                            navigate('/auth/login');
                            setAnchorEl(null);
                        }}>
                            <Avatar><AiOutlineLogin /></Avatar> Logout
                        </MenuItem>
                    </Menu>
                </Stack>
            </Toolbar>
        </AppBar>
    )
}

export default Navbar
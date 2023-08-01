import { Menu, MenuItem } from '@mui/material';
import React from 'react';
import { AiOutlineDelete, AiOutlineEye, AiOutlinePrinter } from 'react-icons/ai';
import { BiEditAlt, BiLockOpen } from 'react-icons/bi';
import { BsCheck2Circle } from 'react-icons/bs';
import { MdNotificationsNone, MdOutlineCancel } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';

const ActionMenu = ({ anchorEl, open, setAnchorEl, handleDeleteDialog, handleCancelDialog, handleApprove, handlePrint, handleView, hanldeEdit, handleNotification, viewUrl, editUrl, setPermissionDialog }) => {
    const navigate = useNavigate();
    return (
        <Menu
            anchorEl={anchorEl}
            open={open}
            onClose={() => setAnchorEl(!anchorEl)}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            MenuListProps={{
                'aria-labelledby': 'basic-button',
            }} >
            {handlePrint && <MenuItem sx={{ columnGap: 1.5 }} onClick={() => {
                handlePrint();
                setAnchorEl(!anchorEl);
            }}><AiOutlinePrinter size={21} /> Print</MenuItem>}
            {handleView && <MenuItem sx={{ columnGap: 1.5 }} onClick={() => {
                handleView();
                setAnchorEl(!anchorEl);
            }}><AiOutlineEye size={21} /> View</MenuItem>}
            {hanldeEdit && <MenuItem sx={{ columnGap: 1.5 }} onClick={() => {
                hanldeEdit();
                setAnchorEl(!anchorEl);
            }}><BiEditAlt size={21} /> Edit</MenuItem>}
            {viewUrl && <MenuItem sx={{ columnGap: 1.5 }} onClick={() => navigate(viewUrl)}><AiOutlineEye size={21} /> View</MenuItem>}
            {editUrl && <MenuItem sx={{ columnGap: 1.5 }} onClick={() => navigate(editUrl)}><BiEditAlt size={21} /> Edit</MenuItem>}
            {handleNotification && <MenuItem sx={{ columnGap: 1.5, }} onClick={() => {
                handleNotification();
                setAnchorEl(!anchorEl);
            }}><MdNotificationsNone size={21} /> Notify</MenuItem>}
            {handleApprove && <MenuItem sx={{ columnGap: 1.5, }} onClick={() => {
                handleApprove();
                setAnchorEl(!anchorEl);
            }}><BsCheck2Circle size={21} /> Approve</MenuItem>}
            {handleCancelDialog && <MenuItem sx={{ columnGap: 1.5, }} onClick={() => {
                handleCancelDialog();
                setAnchorEl(!anchorEl);
            }}><MdOutlineCancel size={21} /> Cancel</MenuItem>}
            {handleDeleteDialog && <MenuItem sx={{ columnGap: 1.5, color: 'red' }} onClick={() => {
                handleDeleteDialog();
                setAnchorEl(!anchorEl);
            }}><AiOutlineDelete size={21} /> Delete</MenuItem>}
            {setPermissionDialog && <MenuItem sx={{ columnGap: 1.5, color: 'green' }} onClick={() => {
                setPermissionDialog(true);
                setAnchorEl(!anchorEl);
            }}><BiLockOpen size={21} /> Permission</MenuItem>}
        </Menu>
    );
};

export default ActionMenu;
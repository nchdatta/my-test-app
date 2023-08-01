import { Breadcrumbs, Button, Stack, Typography } from '@mui/material';
import React from 'react';
import { BsPlusLg } from 'react-icons/bs';
import { HiHome } from 'react-icons/hi';
import { NavLink, useNavigate } from 'react-router-dom';

const PageHeader = ({ btn = true, btnText = "Add New", handleBtn, navigate = '/dashboard', title = "Title", subTitle = "", breadcrumbLinks, currentPage, mb = 4 }) => {
    const nv = useNavigate();

    return (
        <Stack direction="row" justifyContent={"space-between"} alignItems={{ md: "center" }} mb={mb}>
            <Stack >
                <Breadcrumbs aria-label="breadcrumb">
                    <NavLink
                        style={{ display: 'flex', alignItems: 'center', gap: 1, fontSize: '0.9rem', color: 'green' }}
                        to="/dashboard"  >
                        <HiHome fontSize="inherit" />
                        Dashboard
                    </NavLink>
                    {breadcrumbLinks && breadcrumbLinks?.map((link, i) => (
                        <NavLink
                            style={{ fontSize: '0.9rem', color: "GrayText" }}
                            to={link.href}
                        >{link.label} </NavLink>
                    ))}
                    {currentPage && <Typography color="GrayText" sx={{ fontSize: '0.9rem' }}>{currentPage} </Typography>}
                </Breadcrumbs>
                <Typography variant="h5" fontWeight={"bold"}>{title} {subTitle && <span style={{ fontSize: "1rem", fontWeight: "normal" }}> - {subTitle}</span>} </Typography>
            </Stack>


            {btn && <Button variant="contained" size='medium' onClick={() => handleBtn ? handleBtn() : nv(navigate)}>
                <Stack direction="row" alignItems={"center"} gap={1}>
                    <BsPlusLg />
                    <Typography sx={{ textTransform: "capitalize" }}>{btnText}</Typography>
                </Stack>
            </Button>}
        </Stack>
    );
};

export default PageHeader;
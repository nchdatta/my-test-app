import { Button, Stack, Typography } from '@mui/material';
import React from 'react';
import { HiPlus } from 'react-icons/hi';

const AddNew = ({ handleClick, btnText = "Add New", color = "primary", icon = null, btnSize = "medium", variant = "outlined" }) => {

    return (
        <Stack justifyContent={"flex-end"} alignItems={"flex-end"} direction={{ xs: 'column', md: 'row' }} my={1}>
            <Button onClick={handleClick} color={color} variant={variant} size={btnSize} >
                <Stack direction={"row"} gap={1.5} alignItems={"center"}>
                    {icon ? icon : <HiPlus size={20} />}
                    <Typography textTransform="capitalize" fontWeight="bold">{btnText}</Typography>
                </Stack>
            </Button>
        </Stack>
    );
};

export default AddNew;
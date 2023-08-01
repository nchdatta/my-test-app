import { IconButton, Stack, Tooltip, Typography } from '@mui/material';
import React from 'react';
import { BsInfoCircleFill } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';

const WidgetTitle = ({ title = "", subTitle = "", navigate = "/dashboard", mt = 0, mb = 0 }) => {
    const nv = useNavigate();

    return (
        <Stack direction={"row"} justifyContent={"space-between"} alignItems={"flex-start"} mt={mt} mb={mb}>
            <Stack>
                <Typography variant="h5" fontWeight={"bold"}>{title}</Typography>
                <Typography variant="body2" fontWeight={"normal"}>{subTitle}</Typography>
            </Stack>

            <Tooltip title="Learn more" onClick={() => nv(navigate)}>
                <IconButton >
                    <BsInfoCircleFill size={18} color="#85929E" />
                </IconButton>
            </Tooltip>
        </Stack>
    );
};

export default WidgetTitle;
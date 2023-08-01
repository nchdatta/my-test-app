import { Stack, Typography } from '@mui/material';
import React from 'react';

const VRow = ({ data, mt, row = false }) => {
    return (
        <Stack gap={1.5} mt={mt}>
            {data?.map((d, i) => (
                <Stack key={i} direction={row ? "row" : "column"} gap={row ? 1 : 0}>
                    <Typography fontWeight={"bold"}>{d.label} :</Typography>
                    <Typography>{d.value}</Typography>
                </Stack>
            ))}
        </Stack>
    );
};


export default VRow;

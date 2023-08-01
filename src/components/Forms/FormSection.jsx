import { Divider, Grid, Stack, Typography } from '@mui/material';
import React from 'react';

const FormSection = ({ title, mt = 0, mb = 0, xs = 12, md = 6, alignItems = "", children }) => {
    let childrens = [];
    !children.length ? childrens.push(children) : childrens = [...children];

    return (
        <Stack mt={mt} mb={mb}>
            {title &&
                <>
                    <Typography variant="h6" fontWeight="bold">{title}</Typography>
                    <Divider sx={{ mb: 2 }} />
                </>}


            <Grid container spacing={2} alignItems={alignItems}>
                {childrens?.map((item, i) =>
                    <Grid item xs={xs} md={md} key={i}>
                        {item}
                    </Grid>)}
            </Grid>
        </Stack>
    );
};

export default FormSection;
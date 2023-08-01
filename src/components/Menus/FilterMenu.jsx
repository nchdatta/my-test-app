import { Button, Menu, Stack, Typography } from '@mui/material';
import React from 'react';
import { MdOutlineFilterList } from 'react-icons/md';

const FilterMenu = ({ anchorEl, open, setAnchorEl, }) => {
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

            <Stack px={2} py={1} gap={1}>
                <Typography fontWeight={"bold"} >Filter Results By</Typography>

                <Button variant="contained" type="submit" color="primary" size='small' fullWidth>
                    <Stack direction="row" alignItems='center' gap={1} fontWeight={'bold'} textTransform="capitalize">
                        <MdOutlineFilterList size={15} />
                        Filter
                    </Stack>
                </Button>
            </Stack>

        </Menu>
    );
};

export default FilterMenu;
import { Button, IconButton, Stack, Tooltip } from '@mui/material';
import React from 'react';
import Search from '../Fields/Search';
import { useForm } from 'react-hook-form';
import { IoFilter } from "react-icons/io5"
import { FcExport } from "react-icons/fc"
import { useState } from 'react';
import FilterMenu from '../Menus/FilterMenu';

const Filter = ({ placeholder = "Search...", enableExport = false, handleExport }) => {
    const { control } = useForm();
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    return (
        <Stack direction={"row"} justifyContent={"flex-end"} alignItems={"center"} gap={1} mt={3} mb={2}>

            {enableExport && <Button onClick={handleExport}
                variant="outlined" size="medium"
                sx={{ textTransform: 'unset', fontWeight: "bold", py: 0.8 }} color="warning"> <FcExport size={20} style={{ marginRight: 3 }} /> Export </Button>}

            <Search
                name='search'
                control={control}
                placeholder={placeholder} />

            <Tooltip title="Filter">
                <IconButton
                    aria-label="Filter"
                    id="basic-button"
                    aria-controls={open ? 'basic-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={(e) => setAnchorEl(e.currentTarget)}>
                    <IoFilter size={30} />
                </IconButton>
            </Tooltip>

            <FilterMenu
                anchorEl={anchorEl}
                setAnchorEl={setAnchorEl}
                open={open} />
        </Stack>
    );
};

export default Filter;
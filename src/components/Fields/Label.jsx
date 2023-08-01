import { Checkbox, FormControlLabel, Stack, Typography } from '@mui/material';
import { red } from '@mui/material/colors';
import React from 'react';

const Label = ({ error = null, text = "Label Text", bold = true, required = false, search = null, handleSearch = null, allBtn = null, handleAllBtn = null }) => {

    return (
        <Stack direction={"row"} justifyContent={"space-between"} alignItems={"center"} gap={2}>
            <Typography color={!!error ? red[700] : "#4d4b4b"} fontWeight={bold && "medium"}>
                {text} <span>{required && "*"}</span>
            </Typography>

            {/* <Stack direction={"row"} justifyContent={"space-between"} alignItems={"center"} gap={1}>

                {search && <input type='search'
                    style={{ padding: '0.3rem  0.2rem', borderRadius: '4px', border: '1px solid lightgray' }}
                    placeholder='Search'
                    size="small"
                    value={search.searchValue}
                    onChange={handleSearch}
                />}
                {
                    allBtn && <FormControlLabel control={
                        <Checkbox
                            size='small'
                            disabled={allBtn.disabled}
                            checked={allBtn.selectAll}
                            onChange={handleAllBtn}
                            value='selectAll'
                        />
                    } label={<Typography >Select All</Typography>} />
                }
            </Stack> */}
        </Stack>
    );
};

export default Label;
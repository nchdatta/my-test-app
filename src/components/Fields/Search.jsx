import React from 'react';
import { Controller } from "react-hook-form";
import { FormControl, InputAdornment, OutlinedInput } from "@mui/material";
import Label from './Label';
import { FiSearch } from 'react-icons/fi';

const Search = ({ name = "search", control, placeholder = "Search", label, required = false }) => {
    return (
        <>
            <Controller
                name={name}
                control={control}
                render={({ field, formState }) => (
                    <FormControl variant="outlined" size="small">
                        {label && < Label error={formState.errors?.[name]} text={label} required={required} />}
                        <OutlinedInput
                            {...field}
                            size='small'
                            placeholder={placeholder}
                            error={!!formState.errors?.[name]}
                            endAdornment={<InputAdornment position="end"><FiSearch /></InputAdornment>}
                        />

                    </FormControl>
                )}
            />
        </>
    );
};

export default Search;
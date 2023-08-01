import React from 'react';
import { Controller } from "react-hook-form";
import { FormControl, FormHelperText, MenuItem, Select } from "@mui/material";
import Label from './Label';

const DropdownField = ({ name = "", totalValue, control, value = "", errorMsg = false, fontBold = true, label, required = false, disabled = false }) => {

    return (
        <>
            <Controller
                name={name}
                control={control}
                defaultValue={value}
                render={({ field, formState }) => (
                    <FormControl fullWidth variant="outlined" size="small">
                        {label && < Label error={formState.errors?.[name]} text={label} bold={fontBold} required={required} />}
                        <Select
                            {...field}  >
                            <MenuItem value="">Select value</MenuItem>
                            {[...Array(totalValue).keys()].map((d, i) => <MenuItem value={i + 1}>{i + 1}</MenuItem>)}
                        </Select>
                        {errorMsg && !!formState.errors?.[name] &&
                            <FormHelperText
                                error>{formState?.errors?.[name].message}</FormHelperText>}

                    </FormControl>
                )}
            />
        </>
    );
};

export default DropdownField;
import React from 'react';
import { Controller } from "react-hook-form";
import { FormControl, FormHelperText, OutlinedInput } from "@mui/material";
import Label from './Label';

const MultilineInput = ({ name = "", control, rows = 8, value = "", placeholder = "Decscribe here...", errorMsg = false, fontBold = true, label, required = false }) => {
    return (
        <>
            <Controller
                name={name}
                control={control}
                defaultValue={""}
                render={({ field, formState }) => (
                    <FormControl fullWidth variant="outlined" size="small">
                        {label && <Label error={formState.errors?.[name]} text={label} bold={fontBold} required={required} />}
                        <OutlinedInput
                            {...field}
                            multiline
                            rows={rows}
                            placeholder={placeholder}
                            error={!!formState.errors?.[name]}
                        />
                        {errorMsg && !!formState.errors?.[name] &&
                            <FormHelperText
                                error>{formState?.errors?.[name].message}</FormHelperText>}

                    </FormControl>
                )}
            />
        </>
    );
};

export default MultilineInput;
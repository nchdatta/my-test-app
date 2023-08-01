import React from 'react';
import { Controller } from "react-hook-form";
import { FormControl, FormHelperText, OutlinedInput } from "@mui/material";
import Label from './Label';

const TextInput = ({ name = "", type = "text", control, value = "", placeholder = "", size = "small", autoFocus = false, handleClick = undefined, min = 0, max, step = null, errorMsg = false, fontBold = true, label, required = false, disabled = false, readOnly = false }) => {
    return (
        <>
            <Controller
                name={name}
                control={control}
                defaultValue={value}
                render={({ field, formState }) => (
                    <FormControl fullWidth variant="outlined" size={size}>
                        {label && < Label error={formState.errors?.[name]} text={label} bold={fontBold} required={required} />}
                        <OutlinedInput
                            {...field}
                            type={type}
                            onClick={handleClick}
                            autoFocus={autoFocus}
                            inputProps={{ min, max, step }}
                            placeholder={placeholder}
                            error={!!formState.errors?.[name]}
                            disabled={disabled}
                            readOnly={readOnly}
                            sx={{ bgcolor: disabled ? "#f3f6f4" : '' }}
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

export default TextInput;
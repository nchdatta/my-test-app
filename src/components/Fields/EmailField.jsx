import React from 'react';
import { Controller } from "react-hook-form";
import { FormControl, FormHelperText, IconButton, InputAdornment, OutlinedInput } from "@mui/material";
import Label from './Label';
import { HiOutlineMail } from 'react-icons/hi';

const EmailField = ({ name = "email", type = "text", control, value = "", size = "small", placeholder = "", autoFocus = false, min = 0, max, step = null, errorMsg = false, fontBold = true, label, required = false, disabled = false }) => {
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
                            autoFocus={autoFocus}
                            inputProps={{ min, max, step }}
                            placeholder={placeholder}
                            error={!!formState.errors?.[name]}
                            disabled={disabled}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        edge="end" >
                                        <HiOutlineMail />
                                    </IconButton>
                                </InputAdornment>
                            }
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

export default EmailField;
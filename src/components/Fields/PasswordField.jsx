import React, { useState } from 'react';
import { Controller } from "react-hook-form";
import { FormControl, FormHelperText, IconButton, InputAdornment, OutlinedInput } from "@mui/material";
import Label from './Label';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';

const PasswordField = ({ name = "", control, value = "", placeholder = "******", size = "small", autoFocus = false, errorMsg = false, fontBold = true, label, required = false, disabled = false }) => {
    const [showPassword, setShowPassword] = useState(false);
    return (

        <>
            <Controller
                name={name}
                control={control}
                defaultValue={value}
                render={({ field, formState }) => (
                    <FormControl fullWidth variant="outlined" size={size}>
                        <Label error={formState.errors?.[name]} text={label} bold={fontBold} required={required} />
                        <OutlinedInput
                            id={name}
                            type={showPassword ? 'text' : 'password'}
                            {...field}
                            autoFocus={autoFocus}
                            placeholder={placeholder}
                            error={!!formState.errors?.[name]}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={() => setShowPassword(!showPassword)}
                                        edge="end"
                                    >
                                        {showPassword ? <AiFillEyeInvisible /> :
                                            <AiFillEye />}
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

export default PasswordField;
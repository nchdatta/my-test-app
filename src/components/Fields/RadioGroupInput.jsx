import React from 'react';
import { Controller } from "react-hook-form";
import { FormControl, FormHelperText, RadioGroup, FormControlLabel, Radio } from "@mui/material";
import Label from './Label';

const RadioGroupInput = ({ name = "", control, value = "", size = "small", errorMsg = false, fontBold = true, label, required = false, disabled = false, options = [] }) => {
    return (
        <>
            <Controller
                name={name}
                control={control}
                defaultValue={value}
                render={({ field, formState }) => (
                    <FormControl fullWidth component="fieldset" error={!!formState.errors?.[name]}>
                        {label && <Label error={formState.errors?.[name]} text={label} bold={fontBold} required={required} />}
                        <RadioGroup {...field} row
                            checked={value}
                            onChange={(e) => field.onChange(e.target.value)}
                        >
                            {options.map((option) => (
                                <FormControlLabel
                                    key={option.value}
                                    value={option.value}
                                    control={<Radio />}
                                    label={option.label}
                                    disabled={disabled}
                                />
                            ))}
                        </RadioGroup>
                        {errorMsg && !!formState.errors?.[name] && (
                            <FormHelperText error>{formState.errors?.[name].message}</FormHelperText>
                        )}
                    </FormControl>
                )}
            />
        </>
    );
};

export default RadioGroupInput;

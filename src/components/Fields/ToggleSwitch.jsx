import { FormControlLabel, } from '@mui/material';
import React from 'react';
import { Controller } from 'react-hook-form';
import { IosSwitch } from '../Buttons/IosSwitch';

const ToggleSwitch = ({ control, name, unregister, unregisterFields = [], label = "Label", defaultValue = false }) => {
    return (
        <Controller
            name={name}
            control={control}
            defaultValue={defaultValue}
            render={({ field, formState }) => (
                <FormControlLabel sx={{ width: '100%', display: 'inline-flex', justifyContent: 'flex-end' }}
                    {...field}
                    control={<IosSwitch sx={{ mr: 1.5 }} size='small'
                        onChange={(e) => {
                            field.onChange(e.currentTarget.checked);
                            unregister(unregisterFields);
                        }} />}
                    label={label} />

            )}
        />);

};

export default ToggleSwitch;
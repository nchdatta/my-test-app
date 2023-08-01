import { FormControl, FormHelperText, Stack } from '@mui/material';
import React from 'react';
import { Controller } from 'react-hook-form';
import ReactSelect from 'react-select';
import Label from './Label';
import { NavLink } from 'react-router-dom';

const SelectField = ({ name = "", control, defaultValue = "", data = [], unregister = false, handelChange = null, link = { label: "", to: "" }, errorMsg = false, fontBold = true, label, subLabel = true, subValue = false, required = false, isLoading, uniqueKey = null, }) => {
    // const _data = data?.map(option => ({ value: option.id, label: `${option.name} ${subLabel ? `(ID- ${option.id})` : subValue ? `(${subValue.charAt(0).toUpperCase() + subValue.slice(1)}- ${option[subValue]})` : ''}` }));
    const _data = data?.map(option => ({ value: option.id, label: `${option.name} ${subLabel ? `(ID: ${option.id})` : subValue ? `(${option[subValue]})` : ''}` }));

    return (
        <Controller
            name={name}
            control={control}
            defaultValue={defaultValue}
            render={({ field, formState }) => (
                <FormControl fullWidth  >
                    <Label error={formState.errors?.[name]} text={label} bold={fontBold} required={required} />
                    <ReactSelect
                        styles={{
                            control: (base) => ({
                                ...base,
                                border: !!formState.errors?.[name]
                                    ? "1px solid #D32F2F"
                                    : "1px solid #C4C4C4",
                                "&:hover": {
                                    border: !!formState.errors?.[name]
                                        ? "1px solid #D32F2F"
                                        : "1px solid #C4C4C4",
                                },
                            }),
                        }}
                        className="basic-single"
                        classNamePrefix="select"
                        isClearable={true}
                        isSearchable={false}
                        isLoading={isLoading}
                        key={`select_key__${uniqueKey}`}
                        name={name}
                        defaultValue={defaultValue && _data?.find(d => d.value === defaultValue)}
                        options={_data}
                        value={field?.label && data?.find((option) => option?.id === field?.id)}
                        onChange={selectedValue => {
                            field.onChange(selectedValue?.value);
                            handelChange && handelChange(selectedValue?.value);
                            unregister && unregister(unregister);
                        }}
                        getOptionValue={(option) => option.value}
                    />

                    <Stack direction="row" justifyContent={formState.errors?.[name] ? "space-between" : "flex-end"} >
                        {errorMsg && !!formState.errors?.[name] && (
                            <FormHelperText error>
                                {formState?.errors?.[name].message}
                            </FormHelperText>
                        )}
                        {link && <NavLink to={link.to} target='_blank' style={{ fontSize: '14px', color: 'blue', marginTop: 1, textAlign: 'right' }}>{link.label}</NavLink>}
                    </Stack>
                </FormControl>
            )}
        />
    );
};

export default SelectField;
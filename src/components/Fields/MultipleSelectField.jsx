import { Box, Checkbox, FormControl, FormControlLabel, FormHelperText, Typography } from '@mui/material';
import { red } from '@mui/material/colors';
import React, { useState } from 'react';
import { Controller } from 'react-hook-form';
import Label from './Label';

const MultipleSelectField = ({ name = "", control, data, errorMsg = false, defaultValue = [], disabled = false, fontBold = true, label = null, subLabel = true, subValue = false, required = false, search = false, selectAllValue = false }) => {
    const [searchValue, setSearchValue] = useState("");
    const [selectAll, setSelectAll] = useState(false);

    const handleSearch = (e) => {
        setSearchValue(e.target.value);
    }
    const filteredData = data?.filter(option => option.name.toLowerCase().includes(searchValue.toLowerCase()));


    const toggleSelectAll = (field) => {
        const allValues = data.map((name) => name.id);
        if (selectAll) {
            // deselect all values
            field.onChange([]);
            setSelectAll(false);
        } else {
            // select all values
            field.onChange(allValues);
            setSelectAll(true);
        }
    };


    return (
        <Controller
            name={name}
            control={control}
            defaultValue={defaultValue.map((value) => value.id) || []}
            render={({ field, formState }) => (
                <>
                    {label && <Label error={formState.errors?.[name]} text={label} bold={fontBold} required={required} allBtn={selectAllValue && { disabled: disabled || filteredData?.length === 0, checked: selectAll }} handleAllBtn={selectAllValue && (() => toggleSelectAll(field))} search={search && { searchValue }} handleSearch={search && handleSearch} />}
                    <Box sx={{ maxHeight: 300, borderRadius: 1, overflowY: "scroll", border: `1px solid ${!!formState.errors?.[name] ? red[700] : '#C4C4C4'}`, p: 2 }}>
                        <FormControl fullWidth >
                            {/* <FormControlLabel control={
                                <Checkbox
                                    size='small'
                                    disabled={disabled}
                                    checked={selectAll}
                                    onChange={() => toggleSelectAll(field)}
                                    value='selectAll'
                                />
                            } label={<Typography color="gray" fontWeight="bold">Select All</Typography>} /> */}
                            {filteredData?.map((name) => (
                                <FormControlLabel
                                    key={name.id}
                                    control={
                                        <Checkbox
                                            size='small'
                                            disabled={disabled}
                                            checked={field.value.indexOf(name.id) > -1 || disabled}
                                            onChange={(e) => {
                                                const { checked } = e.target;
                                                const newValue = [...field.value];
                                                if (checked) {
                                                    newValue.push(name.id);
                                                } else {
                                                    newValue.splice(newValue.indexOf(name.id), 1);
                                                }
                                                field.onChange(newValue);
                                            }}
                                            value={name.id}
                                        />
                                    }
                                    label={<Typography>{name.name} <span style={{ fontSize: '13px', color: 'gray' }}>{`${subLabel ? `(ID: ${name.id})` : subValue ? `(${name[subValue]})` : ''}`}</span> </Typography>}
                                />
                            ))
                            }

                        </FormControl>
                    </Box>

                    {errorMsg && !!formState.errors?.[name] && (
                        <FormHelperText error>
                            {formState?.errors?.[name].message}
                        </FormHelperText>
                    )}
                </>
            )}
        />
    );
};

export default MultipleSelectField;

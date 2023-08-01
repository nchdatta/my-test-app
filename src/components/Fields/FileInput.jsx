import React, { useState } from "react";
import { Controller } from "react-hook-form";
import { FormControl, FormHelperText, OutlinedInput, Typography } from "@mui/material";
import { red } from "@mui/material/colors";

function FileInput({ name = "attachments", control, label = "Attachments", multiple = false, fileTypes, placeholder = "", required = false }) {
    const [selectedFiles, setSelectedFiles] = useState([]);

    return (
        <>
            <Controller
                name={name}
                control={control}
                defaultValue={[]}
                render={({ field, formState }) => (
                    <>
                        <FormControl fullWidth variant="outlined" size="small">
                            <Typography color={!!formState.errors?.[name] && red[700]}>
                                {`${label} (Only ${placeholder})`}<span>{required && "*"}</span>
                            </Typography>

                            <OutlinedInput
                                type="file"
                                error={!!formState.errors?.[name]}
                                inputProps={{
                                    multiple,
                                    accept: fileTypes?.join(", "),
                                    onChange: (event) => {
                                        setSelectedFiles([...event.target.files]);
                                        field.onChange([...event.target.files]);
                                    },
                                }}
                            />
                            {!!formState.errors?.[name] && (
                                <FormHelperText error>
                                    {formState?.errors?.[name]?.message}
                                </FormHelperText>)}
                        </FormControl>
                        {!formState.errors?.[name] && selectedFiles.length > 0 && (
                            <ol >
                                {selectedFiles.map((file, index) => (
                                    <li key={index}>{file.name}</li>
                                ))}
                            </ol>
                        )}
                    </>
                )}
            />
        </>
    );
}

export default FileInput;

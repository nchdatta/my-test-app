import { Avatar, FormHelperText, IconButton } from '@mui/material';
import React, { useState } from 'react';
import { Controller } from 'react-hook-form';
import { MdOutlineCameraAlt } from 'react-icons/md';

const PhotoAvatarUpload = ({ name = "photo", control, imageUrl, fileType = "image/*" }) => {
    const [photo, setPhoto] = useState(null);


    const handleFileUpload = async (e) => {
        if (e.target.files[0]) {
            const file = e.target.files[0];
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => {
                setPhoto(reader.result);
            };
            reader.onerror = (error) => {
                console.log("Error: ", error);
            };
        } else {
            setPhoto(null)
        }

    };

    return (
        <Controller
            name={name}
            control={control}
            render={({ field: { value, onChange }, formState: { errors } }) => (
                <>
                    <Avatar
                        sx={{
                            width: 120,
                            height: 120,
                            bgcolor: "#eaf5ff",
                            display: "flex",
                            margin: "0 auto"
                        }}>
                        <label htmlFor="photo-input">
                            <IconButton
                                color="primary"
                                aria-label="upload picture"
                                component="span" sx={{
                                    width: 120,
                                    height: 120,
                                    bgcolor: "#eaf5ff",
                                }} >
                                {photo || imageUrl ? <img src={photo ? photo : imageUrl ? imageUrl : null} alt="" style={{ width: 120, height: 120 }} /> : <MdOutlineCameraAlt />}
                            </IconButton>
                        </label>
                    </Avatar>
                    <input
                        id="photo-input"
                        accept={fileType}
                        type="file"
                        onChange={(e) => {
                            onChange(e.target.files[0]);
                            handleFileUpload(e)
                        }}
                        style={{ display: "none" }}
                    />
                    {errors?.[name] && (
                        <FormHelperText error>{errors?.[name].message}</FormHelperText>
                    )}
                </>

            )}
        />
    );
};

export default PhotoAvatarUpload;
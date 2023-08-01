import { Button, CircularProgress, Grid, Paper, Stack } from '@mui/material';
import React from 'react';
import { BiArrowBack } from 'react-icons/bi';
import { AiOutlineCloudUpload } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';

const AddForm = ({ handleSubmit, handleBack, maxWidth = 500, minHeight = '70vh', submitBtn = "Submit", loading = false, py = 3, children, gradient = true }) => {
    const navigate = useNavigate();
    let childrens = [];
    if (!children.length) {
        childrens.push(children)
    } else {
        childrens = [...children];
    }

    const childrenProps = childrens.filter(child => child !== false && child !== undefined && child !== null);


    return (
        <Paper elevation={0} sx={{ px: 2, py: py, minHeight }} className={gradient ? "rad-grad" : ''}>
            <form onSubmit={handleSubmit}>
                <Grid container gap={2} maxWidth={{ md: maxWidth }} sx={{ margin: "1rem auto" }} alignItems="center" justifyContent="center">
                    {childrenProps?.map((item, i) => <Grid item xs={12} key={i}>{item} </Grid>)}

                    <Grid container spacing={2} justifyContent={"space-between"} sx={{ my: 5 }}>
                        <Grid item xs={6} md={3}>
                            <Button variant="outlined" onClick={() => handleBack ? handleBack() : navigate(-1)} color="success" size='large' fullWidth >
                                <Stack direction="row" alignItems='center' gap={1} fontWeight={'bold'} textTransform="capitalize">
                                    <BiArrowBack size={20} /> Back
                                </Stack>
                            </Button>
                        </Grid>
                        <Grid item xs={6} md={3}>
                            <Button variant="contained" disabled={loading} type="submit" color="primary" size='large' fullWidth>
                                <Stack direction="row" alignItems='center' gap={1} fontWeight={'bold'} textTransform="capitalize">
                                    {loading ? <CircularProgress size={18} /> : <AiOutlineCloudUpload size={20} />}
                                    Submit
                                </Stack>
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
            </form>
        </Paper>
    );
};

export default AddForm;
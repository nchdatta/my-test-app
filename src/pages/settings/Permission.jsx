import React from 'react';
import Page from '../../layout/Page';
import PageHeader from '../../layout/PageHeader';
import SelectField from '../../components/Fields/SelectField';
import { useForm } from 'react-hook-form';
import { moduleMenus, roles } from '../../__mock/msc';
import { Divider, Paper, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import { grey } from '@mui/material/colors';
import { IosSwitch } from '../../components/Buttons/IosSwitch';
import employees from '../../__mock/employees';

const Permission = () => {
    const { control, watch } = useForm();

    return (
        <Page title='Permission Management'>
            <PageHeader
                title="Permission Management"
                btn={false}
                currentPage="Permission Management" />

            <Stack direction={{ xs: "auto", md: "row" }} alignItems={{ xs: "auto", md: "center" }} maxWidth={{ xs: '100%', md: 600 }} gap={3} mb={3}>
                <SelectField
                    name='role'
                    control={control}
                    label={"Select Role"}
                    subLabel={false}
                    data={roles} />
                <Divider sx={{ fontWeight: "bold" }}>OR</Divider>
                <SelectField
                    name='user'
                    control={control}
                    label={"Select User"}
                    subLabel={false}
                    data={employees} />
            </Stack>

            {!watch("role") ?
                <Typography variant='h4' mt={4} textAlign={'center'}>
                    Select Role First!
                </Typography> : <TableContainer component={Paper} className="rad-grad">
                    <Table size="medium" sx={{ minWidth: 650, minHeight: '70vh' }} aria-label="simple table">
                        <TableHead>
                            <TableRow sx={{ bgcolor: grey[100] }}>
                                <TableCell align="left" sx={{ fontWeight: "bold", pl: 4 }}>Module</TableCell>
                                <TableCell align="left" width={200} sx={{ fontWeight: "bold" }}>Menu Name</TableCell>
                                <TableCell align="center" sx={{ fontWeight: "bold" }}>
                                    <Typography fontWeight={"bold"} >Create</Typography>
                                    <IosSwitch size='small' />
                                </TableCell>
                                <TableCell align="center" sx={{ fontWeight: "bold" }}>
                                    <Typography fontWeight={"bold"} >Read</Typography>
                                    <IosSwitch size='small' />
                                </TableCell>
                                <TableCell align="center" sx={{ fontWeight: "bold" }}>
                                    <Typography fontWeight={"bold"} >Update</Typography>
                                    <IosSwitch size='small' />
                                </TableCell>
                                <TableCell align="center" sx={{ fontWeight: "bold" }}>
                                    <Typography fontWeight={"bold"} >Delete</Typography>
                                    <IosSwitch size='small' />
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {moduleMenus.map((row, index) => {
                                const isFirstModule = index === 0 || row.name !== moduleMenus[index - 1].name;
                                return (
                                    <TableRow key={index} hover>
                                        {isFirstModule && <TableCell align="left" sx={{ pl: 4 }} rowSpan={moduleMenus.filter(m => m.name === row.name).length}>{row.name}</TableCell>}
                                        <TableCell align="left">{row.menu}</TableCell>
                                        <TableCell align="center">
                                            <IosSwitch size='small' />
                                        </TableCell>
                                        <TableCell align="center">
                                            <IosSwitch size='small' />
                                        </TableCell>
                                        <TableCell align="center">
                                            <IosSwitch size='small' />
                                        </TableCell>
                                        <TableCell align="center">
                                            <IosSwitch size='small' />
                                        </TableCell>
                                    </TableRow>
                                );
                            })}
                        </TableBody>
                    </Table>
                </TableContainer>}
        </Page >
    );
};

export default Permission;

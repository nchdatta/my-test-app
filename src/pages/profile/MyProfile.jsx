import { Avatar, Divider, Paper, Stack, Typography } from '@mui/material';
import React, { useState } from 'react';
import { BiEdit } from 'react-icons/bi';
import Page from '../../layout/Page';
import { blueGrey } from '@mui/material/colors';
import employees from '../../__mock/employees';
import EditUserDialog from '../../components/Dialogs/EditUserDialog';
import VRow from '../../components/Msc/VRow';

const MyProfile = () => {
  const [dialog, setDialog] = useState(false);
  // const { data: userData, isLoading } = useGetUserInfo();

  // if (isLoading) return <Loading />;
  // const user = userData?.response_data;

  return (
    <Page title='Profile'>
      <Paper elevation={0} sx={{ p: 4, minHeight: '85vh', }} className='rad-grad' >
        <Typography variant='h5' fontWeight={"bold"} >My Profile <BiEdit onClick={() => setDialog(!dialog)} size={21} style={{ color: 'blueviolet', marginLeft: '0.5rem', cursor: "pointer" }} /> </Typography>
        <Divider sx={{ my: 1 }} />
        <Stack direction={"row"} alignItems={"center"} sx={{ my: 4 }} spacing={2}>
          {employees[0]?.avatar ?
            <Avatar
              src={employees[0]?.avatar}
              alt="Profile"
              sx={{ width: '5rem', height: '5rem' }}
            /> :
            <Avatar sx={{ width: '5rem', height: '5rem', bgcolor: blueGrey[500], fontSize: '2.5rem', fontWeight: 'bold' }}>{employees[0]?.name.charAt(0)}</Avatar>}
          <div>
            <Typography variant='h6' fontWeight={'bold'}>{employees[0]?.name} </Typography>
            <Typography variant='body2' color={'gray'}>Role / {employees[0]?.role}</Typography>
          </div>
        </Stack>

        <VRow row data={[
          { label: "ID", value: employees[0]?.id },
          { label: "Full Name", value: employees[0]?.name },
          { label: "Email Address", value: employees[0]?.email },
          { label: "Phone Number", value: employees[0]?.phone },
        ]} />

      </Paper>

      {dialog && <EditUserDialog openDialog={dialog} setOpenDialog={setDialog} />}
    </Page>
  );
};

export default MyProfile;
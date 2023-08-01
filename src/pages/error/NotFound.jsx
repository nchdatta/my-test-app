import { useNavigate } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import { Button, Typography, Container, Box } from '@mui/material';
import Page from '../../layout/Page';


const StyledContent = styled('div')(({ theme }) => ({
  maxWidth: 480,
  margin: 'auto',
  minHeight: '100vh',
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
}));


const NotFound = () => {
  const navigate = useNavigate();

  return (
    <Page title='404 Page Not Found'>
      <Container>
        <StyledContent sx={{ textAlign: 'center', alignItems: 'center' }}>
          <Typography sx={{ color: 'text.secondary' }}>
            Sorry, we couldn't find the page you're looking for. Perhaps you've mistyped the URL? Be sure to check your
            spelling.
          </Typography>

          <Box
            component="img"
            src="/assets/images/illustration_404.svg"
            sx={{ height: 350, mx: 'auto', my: 6 }}
          />

          <Button size="large" variant="contained" onClick={() => navigate(-1)} >  Go to Home  </Button>
        </StyledContent>
      </Container>
    </Page>
  );
}

export default NotFound;
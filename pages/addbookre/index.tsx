import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

function Copyright(props: any) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function BookRecive() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <AddCircleIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            ทะเบียนหนังสือรับ
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>

            <TextField
              margin="normal"
              required
              fullWidth
              name="receive_numRe"
              label="เลขทะเบียนรับ"
              type="text"
              id="receive_numRe"
              autoFocus
            />
              <TextField
              margin="normal"
              required
              fullWidth
              id="receive_date"
              label="วันเดือนปี"
              name="receive_date"
              autoComplete="receive_date"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="receive_num"
              label="ที่หนังสือ"
              type="text"
              id="receive_num"
              autoFocus
            />
              <TextField
              margin="normal"
              required
              fullWidth
              name="receive_from"
              label="จาก"
              type="text"
              id="receive_from"
              autoFocus
            />
              <TextField
              margin="normal"
              required
              fullWidth
              name="receive_to"
              label="ถึง"
              type="text"
              id="receive_to"
              autoFocus
            />
              <TextField
              margin="normal"
              required
              fullWidth
              name="receive_sub"
              label="เรื่อง"
              type="text"
              id="receive_sub"
              autoFocus
            />
                          <TextField
              margin="normal"
              required
              fullWidth
              name="receive_des"
              label="การปฎิบัติ"
              type="text"
              id="receive_des"
              autoFocus
            />
                          <TextField
              margin="normal"
              required
              fullWidth
              name="receive_note"
              label="หมายเหตุ"
              type="text"
              id="receive_note"
              autoFocus
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              เพิ่มหนังสือรับ
            </Button>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}
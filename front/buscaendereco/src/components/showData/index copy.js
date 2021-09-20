import * as React from 'react';
import { Grid,  Button, TextField, Box, Typography} from '@material-ui/core';


export default function SignInSide() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
        <Grid
            item
            desktop={12}
            mobile={12}
            sx={{
                height: '50%',
                display: 'flex',
                flexFlow: 'row nowrap',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
          <Box
        sx={{
            height: '100vh',
            width: '100%',
            border: '2px solid red',
            display: 'flex',
            flexFlow: 'row wrap',
            justifyContent: 'center',
            alignItems: 'center',
            background: 'white',
            borderRadius: '10px'

        }}
      >
        <Box component="form" onSubmit={handleSubmit} Validate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="cep"
            label="CEP:"
            name="cep"
            autoFocus
          />
          <Typography component="h1" variant="h5">
            Sign in
        </Typography>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
          </Button>
        </Box>
      </Box>

          </Grid>
  );
}

import * as React from 'react';
import { Grid,   TextField, } from '@material-ui/core';


export default function SignInSide() {

  return (
        <Grid container spacing={1}
            sx={{
                height: '90vh',
                width: '80vw',
                display: 'block',

                bgcolor: 'white'
            }}
        >
            <Grid item lg={12}>
            <TextField
            sx={{
                width: '100%',
            }}
            id="cep"
            label="int"
            name="cep"
            autoFocus
          />
          </Grid>
          <Grid item lg={5}  >
            <TextField
            sx={{
                width: '100%',
            }}
            required
            id="cep"
            label="CEP:"
            name="cep"
            autoFocus
          />
          </Grid>
          <Grid item lg={5}  >
            <TextField
            sx={{
                width: '100%',
            }}
            required
            id="cep"
            label="CEP:"
            name="cep"
            autoFocus
          />
          </Grid>
          <Grid item lg={6}  >
            <TextField
            sx={{
                width: '100%',
            }}
            required
            id="cep"
            label="CEP:"
            name="cep"
            autoFocus
          />
          </Grid>
          <Grid item lg={6}  >
            <TextField
            sx={{
                width: '100%',
            }}
            required
            id="cep"
            label="CEP:"
            name="cep"
            autoFocus
          />
          </Grid>
            <Grid item lg={3} >
            <TextField
            sx={{
                width: '100%',
            }}
            required
            id="cep"
            label="CEP:"
            name="cep"
            autoFocus
          />
            </Grid>
            <Grid item lg={3} >
            <TextField
            sx={{
                width: '100%',
            }}
            required
            id="cep"
            label="CEP:"
            name="cep"
            autoFocus
          />
            </Grid>
            <Grid item lg={3} >
            <TextField
            sx={{
                width: '100%',
            }}
            required
            id="cep"
            label="CEP:"
            name="cep"
            autoFocus
          />
            </Grid>
            <Grid item lg={3} >
            <TextField
            sx={{
                width: '100%',
            }}
            required
            id="cep"
            label="CEP:"
            name="cep"
            autoFocus
          />
            </Grid>

          </Grid>
  );
}

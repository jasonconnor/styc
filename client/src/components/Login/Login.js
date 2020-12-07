import React from 'react'

// MATERIAL UI
import {
    makeStyles,
    Grid,
    Button,
    TextField,
    Snackbar,
  } from '@material-ui/core/';

// REACT-HOOK-FORM / YUP
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
// import { yupResolver } from '@hookform/resolvers';


const schema = yup.object().shape({
    Email: yup
      .string()
      .email('Email address not valid.')
      .required('Email is a required field.'),
    Name: yup
      .string()
      .matches(/^([^0-9]*)$/, 'Name should not contain numbers.')
      .required('Your name is a required field.'),
});

const useStyles = makeStyles(theme => ({
    loginBody: {

    },

    loginContainer: {
        border: 'solid',
        borderWidth: 5,
        borderColor: 'black'
    }
}))

export default function Login() {

    const classes = useStyles()

    return (
        <div className={classes.loginBody}>
            <h1>Log In</h1>

            <form>
            <Grid 
              container
              className={classes.loginContainer}
              direction='column'
              justify='center'
              alignItems='center'
            >   
                {/* NAME */}
                <Grid item>
                  <TextField label={'Name'}>

                  </TextField>
                </Grid>

                {/* EMAIL */}
                <Grid item>
                  <TextField 
                    label={'Email'}
                  >
                  </TextField>
                </Grid>

                {/* PASSWORD */}
                <Grid item>
                  <TextField 
                    label={'Password'}
                  >
                  </TextField>
                </Grid>

                {/* SUBMIT */}
                <Button 
                  variant="contained"
                  color="primary"
                >
                  Submit
                </Button>
            </Grid>
            </form>


        </div>
    )
}

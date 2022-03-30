import React from 'react'
import { Link, Grid, Paper, Avatar, TextField, Button, Typography } from '@material-ui/core'
import LockOpenIcon from '@material-ui/icons/LockOpen';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox'



export default function LoginPage({ handleChange }) {


  const paperStyle = { padding: 20, height: '70vh', width: 300, margin: '0 auto', backgroundColor: 'lightgreen' }
  const avataracolor = { backgroundColor: "green" }
  const btnstyles = { margin: '8px 0' }
  return (
    <Grid>
      <Paper style={paperStyle}>
        <Grid align="center">
          <Avatar style={avataracolor}><LockOpenIcon /></Avatar>
          <h2>Sign in</h2>
        </Grid>
        <TextField label="UserName" placeholder="Enter username" fullWidth required />
        <TextField label="Password" placeholder="Enter Password" type="password" fullWidth required />
        <FormControlLabel
          control={
            <Checkbox
              name="checkedB"
              color="primary"
            />
          }
          label="Remember me"
        />
        <Button href="/home" type='submit' color='primary' variant="contained" style={btnstyles} fullWidth>Sign in</Button>
        <Typography>
          <Link href="#" >
            <h3>Forgot Password?</h3>
          </Link>
        </Typography>
        <Typography> do you have an account?
          <p>
            <Link href="#" onClick={() => handleChange("event", 1)}>Sign up</Link>
          </p>
        </Typography>

      </Paper>
    </Grid>
  )


}

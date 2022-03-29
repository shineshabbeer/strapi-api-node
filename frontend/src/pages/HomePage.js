import React from 'react'
import { Link, Grid, Paper, Avatar, TextField, Button, Typography } from '@material-ui/core'
import LockOpenIcon from '@material-ui/icons/LockOpen';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox'


export default function HomePage() {
  const paperStyle = { padding: 20, height: '70vh', width: 280, margin: '20px auto', backgroundColor: 'green' }
  const avataracolor = { backgroundColor: "green" }
  const btnstyles = { margin: '8px 0' }
  return (
    <Grid>
      <Paper evaluation={10} style={paperStyle}>
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
        <Button href="/details" type='submit' color='primary' variant="contained" style={btnstyles} fullWidth >Sign in</Button>
        <Typography>
          <Link href="#" >
            <h3>Forgot Password?</h3>
          </Link>
        </Typography>
        <Typography> do you have an account?
          <p>
            <Link href="/Signup">Sign up</Link>
          </p>
        </Typography>

      </Paper>
    </Grid>
  )


}

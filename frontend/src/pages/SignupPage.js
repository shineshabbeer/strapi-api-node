import React from 'react'
import { Link, Grid, Paper, Avatar, TextField, Button, Typography } from '@material-ui/core'
import AddCircleIcon from '@material-ui/icons/AddCircle';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

export default function SignupPage() {
    const paperStyle = { padding: 20, height: '70vh', width: 300, margin: '0 auto', backgroundColor: 'lightgreen' }
    const avataracolor = { backgroundColor: "green" }
    const btnstyles = { margin: '8px 0' }
    return (
        <Grid>
            <Paper style={paperStyle}>
                <Grid align="center">
                    <Avatar style={avataracolor}><AddCircleIcon /></Avatar>
                    <h2>Sign Up</h2>
                </Grid>
                <TextField label="Name" placeholder="Enter Ur Name" fullWidth required />
                <TextField label="email" placeholder="Enter Password" type="email" fullWidth required />
                <FormControl component="fieldset">
                    <FormLabel component="legend">Gender</FormLabel>
                    <RadioGroup aria-label="gender" name="gender1" style={{ display: 'initial' }}>
                        <FormControlLabel value="female" control={<Radio />} label="Female" />
                        <FormControlLabel value="male" control={<Radio />} label="Male" />
                    </RadioGroup>
                </FormControl>
                <TextField label="number" placeholder="Enter ur phone number" fullWidth required />
                <TextField label="password" placeholder="Enter Password" type="password" fullWidth required />
                <TextField label="confirm password" placeholder="Confirm ur Password" type="password" fullWidth required />
                <Button href='/' type='submit' color='primary' variant="contained" style={btnstyles} fullWidth >Sign up!</Button>
                <Typography> you have a account?
                    <p>
                        <Link href="/">Sign in</Link>
                    </p>
                </Typography>

            </Paper>
        </Grid>
    )
}

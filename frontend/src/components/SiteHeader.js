import React from 'react'
import { AppBar, Toolbar, Button, Typography } from '@material-ui/core'

export default function SiteHeader() {
    return (
        <div>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" >
                        HI
                    </Typography>
                    <Button color="inherit">Codebele</Button>
                </Toolbar>
            </AppBar>
        </div>
    )
}
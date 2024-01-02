import React, {Component} from "react";
// import React, { useState } from 'react';

// @ts-ignore
// import { useHistory } from 'react-router-dom';
import {
    Container,
    CssBaseline,
    Box,
    Avatar,
    Typography,
    TextField,
    Button,
    Grid,
    Link,
} from '@mui/material';
import LockOutlined from '@mui/icons-material/LockOutlined';


export class Register extends Component {
    render() {


        return (
            <Container maxWidth="xs" className=" mb-6">
                <CssBaseline/>
                <Box
                    sx={{
                        mt: 10,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{m: 1, bgcolor: 'primary.light'}}>
                        <LockOutlined/>
                    </Avatar>
                    <Typography variant="h5">Register</Typography>
                    <Box sx={{mt: 1}}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoFocus
                            // value={email}
                            // onChange={(e) => setEmail(e.target.value)}
                        />

                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="password"
                            name="password"
                            label="Password"
                            type="password"
                            // value={password}
                            // onChange={(e) => setPassword(e.target.value)}
                        />

                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="password"
                            name="password"
                            label="Confirm Password"
                            type="password"
                            // value={password}
                            // onChange={(e) => setPassword(e.target.value)}
                        />

                        <Button
                            fullWidth
                            variant="contained"
                            sx={{mt: 3, mb: 2}}
                            // onClick={handleRegister}
                        >Register
                        </Button>

                        <Button
                            fullWidth
                            variant="outlined"
                            sx={{mt: 2, mb: 1}}
                            // onClick={handleBack}
                        >
                            Back
                        </Button>
                        <Grid container justifyContent={'flex-end'}>
                            <Grid item>

                                Already have an account?{' '}
                                <span className="text-blue-500 hover:text-blue-900 cursor-pointer"> Login</span>

                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Container>
        );
    }
}
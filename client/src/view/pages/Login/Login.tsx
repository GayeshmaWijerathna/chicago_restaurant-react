import {Link} from "react-router-dom";
import {Avatar, Box, Button, Container, CssBaseline, Grid, TextField, Typography} from "@mui/material";
import {LockOutlined} from "@mui/icons-material";
import logon from "../../../Images/Background2.jpg";
import {Component} from "react";


export class Login extends Component {


    render() {


        const signImage = {
            backgroundImage: `url(${logon})`,
            backgroundSize: 'cover',
            padding: '53px', // Add padding as needed
        };


        return (

            <div style={signImage}>
                <Container maxWidth="xs" className="bg-white bg-opacity-80 bg-rounded-l mb-20">
                    <CssBaseline/>
                    <Box
                        sx={{
                            mt: 9,
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                        }}
                    >
                        <Avatar sx={{m: 2, bgcolor: "primary.light"}}>

                            <LockOutlined/>
                        </Avatar>
                        <Typography variant="h5">Login</Typography>
                        <Box sx={{mt: 1}}>
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoFocus

                            />

                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="password"
                                name="password"
                                label="Password"
                                type="password"

                            />


                            <Button
                                fullWidth
                                variant="contained"
                                sx={{mt: 3, mb: 2}}
                            >
                                Login
                            </Button>

                            <Link to="/"> <Button
                                fullWidth
                                variant="outlined"
                                sx={{mt: 2, mb: 1}}
                            >
                                Back
                            </Button></Link>

                            <Grid container justifyContent={"flex-end"} className="mb-2">
                                <Grid item>
                                    <Link to="/register">Don't have an account? <span
                                        className="text-blue-500 hover:text-blue-900 ">Register</span></Link>
                                </Grid>
                            </Grid>
                        </Box>
                    </Box>
                </Container>
            </div>


        );
    }

}

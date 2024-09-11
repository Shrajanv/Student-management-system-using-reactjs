import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";

function Login() {
  const [admin, setAdmin] = useState({ username: "", password: "" });
  const [errMessage, setErrMessage] = useState("");
  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setAdmin((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleAdminSubmit = (event) => {
    event.preventDefault();
    if (admin.username !== "admin" || admin.password !== "admin123") {
      setErrMessage("Invalid admin credentials");
      return;
    }
    navigate("/dashboard");
  };

  const theme = createTheme();

  return (
    <ThemeProvider theme={theme}>
      <Grid
        container
        component="main"
        sx={{
          height: "100vh",
          backgroundColor: "#FF8701",
        }}
      >
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage:
              "url(https://static.vecteezy.com/system/resources/previews/017/115/738/original/support-of-help-to-solve-problem-manager-mentorship-or-coaching-to-help-team-success-leadership-to-guide-employee-to-achieve-goal-concept-giant-hand-help-business-people-cross-the-problem-gap-vector.jpg)",
            backgroundRepeat: "no-repeat",
            backgroundColor: (t) =>
              t.palette.mode === "light"
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square sx={{ backgroundColor: '#6E90DE' }}>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              backgroundImage: "url(https://img.freepik.com/premium-photo/abstract-background-design-images-wallpaper-ai-generated_643360-149954.jpg)",
              backgroundRepeat: "no-repeat",
              borderRadius: "8px",
              padding: "16px",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "blue" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5" sx={{ m: 1, color: "#FEFFFF" }}>
              Please Login
            </Typography>
            <Box component="form" noValidate onSubmit={handleAdminSubmit} sx={{ mt: 1 }}>
              <TextField
                onChange={handleChange}
                margin="normal"
                required
                fullWidth
                id="username"
                label="Username"
                name="username"
                autoComplete="username"
                autoFocus
              />
              <TextField
                onChange={handleChange}
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" sx={{  color: "#FEFFFF" }} />}
                label="Remember me"
                sx={{ m: 1, color: "#FEFFFF" }}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Login
              </Button>
            </Box>
            <Typography variant="h6" color="error" sx={{ mt: 2 }}>
              {errMessage}
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

export default Login;

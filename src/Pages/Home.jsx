import React, { useState } from "react";
import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import SendIcon from "@mui/icons-material/Send";
import SearchIcon from "@mui/icons-material/Search";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import LogoutIcon from '@mui/icons-material/Logout';
const customFont = {
  fontFamily: "'Pacifico', cursive",
};

const backgroundImageStyle = {
  position: "fixed",
  width: "100%",
  height: "100%",
  zIndex: "-1",
  backgroundImage: "url('https://png.pngtree.com/background/20220729/original/pngtree-abstract-background-with-broken-glass-effect-picture-image_1858275.jpg')",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
};

const buttonHoverEffect = {
  transform: "scale(1.05)",
};

const Home = () => {
  const [showPopup, setShowPopup] = useState(false);

  const handleButtonClick = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "20px",
        padding: "20px",
        minHeight: "100vh",
        position: "relative",
        overflow: "hidden",
        transition: "transform 0.2s ease-in-out",
      }}
    >
      <div style={backgroundImageStyle}></div>

      <Typography variant="h3" sx={customFont} color="#FFFFFF">
        Student Management System Dashboard
      </Typography>

      <Grid container spacing={3} justifyContent="center">
        <Grid item>
          <Card
            sx={{
              width: "300px",
              borderRadius: "15px",
              boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.1)",
            }}
            sx={{ backgroundColor: "#000000" }}
          >
            <Link to="/dashboard/submit" style={{ textDecoration: "none" }}>
              <CardContent
                onClick={handleButtonClick}
                sx={{
                  cursor: "pointer",
                  "&:hover": buttonHoverEffect,
                  "&:active": buttonHoverEffect,
                }}
              >
                <SendIcon style={{ fontSize: 40, color: "#FC5E0F" }} />
                <Typography variant="h5" component="div" style={{ color: "#FFFFFF" }}>
                  Submit Student
                </Typography>
              </CardContent>
            </Link>
          </Card>
        </Grid>

        <Grid item>
          <Card
            sx={{
              width: "300px",
              borderRadius: "15px",
              boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.1)",
            }}
            sx={{ backgroundColor: "#000000" }}
          >
            <Link to="/dashboard/get" style={{ textDecoration: "none" }}>
              <CardContent
                onClick={handleButtonClick}
                sx={{
                  cursor: "pointer",
                  "&:hover": buttonHoverEffect,
                  "&:active": buttonHoverEffect,
                }}
              >
                <SearchIcon style={{ fontSize: 40, color: "#FC5E0F" }} />
                <Typography variant="h5" component="div" style={{ color: "#FFFFFF" }}>
                  Get Student Details
                </Typography>
              </CardContent>
            </Link>
          </Card>
        </Grid>

        <Grid item>
          <Card
            sx={{
              width: "300px",
              borderRadius: "15px",
              boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.1)",
            }}
            sx={{ backgroundColor: "#000000" }}
          >
            <Link to="/dashboard/update" style={{ textDecoration: "none" }}>
              <CardContent
                onClick={handleButtonClick}
                sx={{
                  cursor: "pointer",
                  "&:hover": buttonHoverEffect,
                  "&:active": buttonHoverEffect,
                }}
              >
                <EditIcon style={{ fontSize: 40, color: "#FC5E0F" }} />
                <Typography variant="h5" component="div" style={{ color: "#FFFFFF" }}>
                  Update Student Details
                </Typography>
              </CardContent>
            </Link>
          </Card>
        </Grid>
        <Grid item>
          <Card
            sx={{
              width: "300px",
              borderRadius: "15px",
              boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.1)",
            }}
            sx={{ backgroundColor: "#000000" }}
          >
            <Link to="/dashboard/AllStudent" style={{ textDecoration: "none" }}>
              <CardContent
                onClick={handleButtonClick}
                sx={{
                  cursor: "pointer",
                  "&:hover": buttonHoverEffect,
                  "&:active": buttonHoverEffect,
                }}
              >
                < GroupAddIcon style={{ fontSize: 40, color: "#FC5E0F" }} />
                <Typography variant="h5" component="div" style={{ color: "#FFFFFF" }}>
                  All Student Details
                </Typography>
              </CardContent>
            </Link>
          </Card>
        </Grid>

        <Grid item>
          <Card
            sx={{
              width: "300px",
              borderRadius: "15px",
              boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.1)",
            }}
            sx={{ backgroundColor: "#020000" }}
          >
            <Link to="/dashboard/delete" style={{ textDecoration: "none" }}>
              <CardContent
                onClick={handleButtonClick}
                sx={{
                  cursor: "pointer",
                  "&:hover": buttonHoverEffect,
                  "&:active": buttonHoverEffect,
                }}
              >
                <DeleteIcon style={{ fontSize: 40, color: "#FF0101" }} />
                <Typography variant="h5" component="div" style={{ color: "#FF0000" }}>
                  Delete student
                </Typography>
              </CardContent>
            </Link>
          </Card>
        </Grid>
        <Grid item>
          <Card
            sx={{
              width: "300px",
              borderRadius: "15px",
              boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.1)",
            }}
            sx={{ backgroundColor: "#020000" }}
          >
            <Link to="/" style={{ textDecoration: "none" }}>
              <CardContent
                onClick={handleButtonClick}
                sx={{
                  cursor: "pointer",
                  "&:hover": buttonHoverEffect,
                  "&:active": buttonHoverEffect,
                }}
              >
                <LogoutIcon style={{ fontSize: 40, color: "#FF0101" }} />
                <Typography variant="h5" component="div" style={{ color: "#FF0000" }}>
                  Logout
                </Typography>
              </CardContent>
            </Link>
          </Card>
        </Grid>
      </Grid>
      

      {showPopup && (
        <Box
          sx={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "rgba(0, 0, 0, 0.5)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          onClick={handleClosePopup}
        >
          <Typography variant="h4" sx={{ color: "#fff" }}>
            Popup Content
          </Typography>
        </Box>
      )}
    </Box>
  );
};

export default Home;

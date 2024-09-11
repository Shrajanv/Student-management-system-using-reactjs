import React, { useState } from "react";
import {
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Container,
  IconButton,
  Grid,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import DeleteIcon from "@mui/icons-material/Delete";
import { Link } from "react-router-dom";
import Tooltip from '@mui/material/Tooltip';

const DeleteStudent = () => {
  const [usn, setUsn] = useState("");
  const [isDialogOpen, setDialogOpen] = useState(false);
  const [isDeleted, setDeleted] = useState(false);
  const [notFoundDialogOpen, setNotFoundDialogOpen] = useState(false);

  const handleGetUsn = () => {
    const storedStudentsData = JSON.parse(localStorage.getItem("studentsData")) || {};
    const student = storedStudentsData[usn];

    if (student) {
      setDialogOpen(true);
    } else {
      setNotFoundDialogOpen(true);
    }
  };

  const handleDelete = () => {
    const storedStudentsData = JSON.parse(localStorage.getItem("studentsData")) || {};
    delete storedStudentsData[usn];

    localStorage.setItem("studentsData", JSON.stringify(storedStudentsData));
    setDeleted(true);
    setDialogOpen(false);
  };

  const handleCloseDialog = () => {
    setDialogOpen(false);
    setNotFoundDialogOpen(false);
  };

  const backgroundImageStyle = {
    position: "fixed",
    width: "100%",
    height: "100%",
    zIndex: "-1",
    backgroundImage: "url('https://wallpaper-house.com/data/out/10/wallpaper2you_373146.jpg')",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  };

  return (
    <div style={backgroundImageStyle}>
      <Container>
        <Grid container justifyContent="center" alignItems="center" style={{ height: "100vh" }}>
          <Grid item xs={12} sm={8} md={6}>
            <div>
              <h1 style={{ fontSize: "2.5em", color: "#fff", marginBottom: "20px" }}>
                Delete Student Data
              </h1>
              <TextField
                label="Enter USN"
                variant="outlined"
                margin="normal"
                name="usn"
                value={usn}
                onChange={(e) => setUsn(e.target.value)}
                fullWidth
                InputProps={{
                  style: {
                    color: "#fff",
                    borderColor: "#5610EE",
                    backgroundColor: "#A90C0C",
                  },
                }}
              />
              <Button
                variant="contained"
                onClick={handleGetUsn}
                style={{ marginTop: "10px", background: "#ff5722", color: "#fff" }}
              >
                Delete Data
              </Button>

              <Dialog open={isDialogOpen} onClose={handleCloseDialog}>
                <DialogTitle style={{ color: "#fff" }}>{"Delete Student Data?"}</DialogTitle>
                <DialogContent>
                  <DialogContentText style={{ color: "#000000" }}>
                    Are you sure you want to delete the student data with USN: {usn}?
                  </DialogContentText>
                </DialogContent>
                <DialogActions>
                  <Button onClick={handleCloseDialog} style={{ color: "#ff5722" }}>
                    Cancel
                  </Button>
                  <Button onClick={handleDelete} style={{ color: "#fff", background: "#4caf50" }}>
                    Yes, Delete
                  </Button>
                </DialogActions>
              </Dialog>

              <Dialog open={notFoundDialogOpen} onClose={handleCloseDialog}>
                <DialogTitle>{"USN Not Found"}</DialogTitle>
                <DialogContent>
                  <DialogContentText>
                    No data found for the given USN: {usn}.
                  </DialogContentText>
                </DialogContent>
                <DialogActions>
                  <Button onClick={handleCloseDialog} color="primary">
                    OK
                  </Button>
                </DialogActions>
              </Dialog>

              {isDeleted && (
                <Dialog open={isDeleted} onClose={() => setDeleted(false)}>
                  <DialogTitle>{"Deleted Successfully"}</DialogTitle>
                  <DialogContent>
                    <DialogContentText>
                      Student data with USN: {usn} has been deleted successfully!
                    </DialogContentText>
                  </DialogContent>
                  <DialogActions>
                    <Button onClick={() => setDeleted(false)} color="primary">
                      OK
                    </Button>
                  </DialogActions>
                </Dialog>
              )}
 <Tooltip title="Go back to home pg" placement="right">
              <IconButton component={Link} to="/dashboard" style={{ marginTop: "20px", color: "#fff" }}>
                <ArrowBackIcon />
              </IconButton>
              </Tooltip>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default DeleteStudent;

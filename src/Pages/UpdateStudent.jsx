import React, { useState } from "react";
import { Link } from "react-router-dom";
import Tooltip from '@mui/material/Tooltip';
import {
  Button,
  TextField,
  Container,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  Grid,
  Modal,
  Typography,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const UpdateStudent = () => {
  const [usn, setUsn] = useState("");
  const [studentData, setStudentData] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [updateSuccess, setUpdateSuccess] = useState(false);

  const handleGetUsn = () => {
    const storedStudentsData = JSON.parse(localStorage.getItem("studentsData")) || {};
    const student = storedStudentsData[usn];

    if (student) {
      setStudentData(student);
    } else {
      setShowModal(true);
    }
  };

  const handleUpdate = () => {
    const storedStudentsData = JSON.parse(localStorage.getItem("studentsData")) || {};
    storedStudentsData[usn] = studentData;

    localStorage.setItem("studentsData", JSON.stringify(storedStudentsData));
    setUpdateSuccess(true);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setStudentData((prevData) => {
      // Handle nested structures
      if (name.includes(".")) {
        const [field, subfield] = name.split(".");
        return {
          ...prevData,
          [field]: { ...prevData[field], [subfield]: value },
        };
      }

      return {
        ...prevData,
        [name]: value,
      };
    });
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

  const containerStyle = {
    width: "70%",
    marginTop: "50px",
    background: "rgba(255, 255, 255, 0.8)",
    padding: "20px",
    borderRadius: "10px",
    maxHeight: "80vh",
    overflowY: "auto",
  };

  const tableContainerStyle = {
    marginTop: "20px",
  };

  const modalStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  const modalPaperStyle = {
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "10px",
  };

  return (
    <div style={backgroundImageStyle}>
      <Container component="main" style={containerStyle}>
        <Grid container justifyContent="center" alignItems="center">
          <Grid item xs={12} sm={8} md={6}>
            <div>
              <h1 style={{ fontSize: "2.5em", color: "#3f51b5", marginBottom: "20px" }}>
                Update Student Data
              </h1>
              <TextField
                label="Enter USN"
                variant="outlined"
                margin="normal"
                name="usn"
                value={usn}
                onChange={(e) => setUsn(e.target.value)}
                fullWidth
              />
              <Button variant="contained" onClick={handleGetUsn} fullWidth style={{ marginTop: "10px" }}>
                Get Data
              </Button>

              {studentData && (
                <>
                  <TableContainer component={Paper} style={tableContainerStyle}>
                    <Table>
                      <TableHead>
                        <TableRow>
                          <TableCell>Field</TableCell>
                          <TableCell>Data</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {Object.entries(studentData).map(([field, data]) => (
                          <TableRow key={field}>
                            <TableCell>{field}</TableCell>
                            <TableCell>
                              {typeof data === "object" ? (
                                Object.entries(data).map(([subfield, subData]) => (
                                  <div key={subfield}>
                                    <TextField
                                      name={`${field}.${subfield}`}
                                      value={subData}
                                      onChange={handleInputChange}
                                      variant="outlined"
                                      size="small"
                                      fullWidth
                                    />
                                  </div>
                                ))
                              ) : (
                                <TextField
                                  name={field}
                                  value={data}
                                  onChange={handleInputChange}
                                  variant="outlined"
                                  size="small"
                                  fullWidth
                                />
                              )}
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>

                  <Button
                    variant="contained"
                    onClick={() => {
                      handleUpdate();
                      setShowModal(true);
                    }}
                    style={{ marginTop: "20px" }}
                    fullWidth
                  >
                    Update
                  </Button>
                </>
              )}
        
              <Link className={"back-link"} to="/dashboard">
                <Tooltip title="Go back to home pg" placement="left">
                  <IconButton style={{ marginTop: "20px" }}>
                    <ArrowBackIcon />
                  </IconButton>
                </Tooltip>
              </Link>
            </div>
          </Grid>
        </Grid>
      </Container>

      <Modal
        open={showModal}
        onClose={() => setShowModal(false)}
        style={modalStyle}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <Paper style={modalPaperStyle}>
          {updateSuccess ? (
            <>
              <Typography variant="h5" color="primary" gutterBottom>
                Update Successful
              </Typography>
              <Typography variant="body1" paragraph>
                Data updated successfully! Safe to move out
              </Typography>
            </>
          ) : (
            <>
              <Typography variant="h5" color="error" gutterBottom>
                Update Failed
              </Typography>
              <Typography variant="body1" paragraph>
                Something went wrong while updating the data.
              </Typography>
            </>
          )}
         <Link className={"back-link"} to="/dashboard">
          {/* <Tooltip title="Go back to home pg" placement="left"> */} 
                  <IconButton style={{ marginTop: "20px" }}>
                    <ArrowBackIcon />
                  </IconButton>
                {/* </Tooltip> */}
                </Link>
        </Paper>
      </Modal>
    </div>
  );
};

export default UpdateStudent;

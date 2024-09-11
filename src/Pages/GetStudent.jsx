import React, { useState } from "react";
import { Link } from "react-router-dom";
import Tooltip from '@mui/material/Tooltip';
import {
  Button,
  Container,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  IconButton,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import PersonIcon from "@mui/icons-material/Person";

function GetStudent() {
  const [output, setOutput] = useState({
    usn: "",
    name: "",
    email: "",
    phone: "",
    batch: "",
    semester: "",
    examName: "",
    subCode: "",
    subName: "",
    marks: "",
    placementDetails: {
      placed: false,
      company: "",
      designation: "",
      ctc: "",
    },
  });

  const [usn, setUsn] = useState("");
  const [errMessage, setErrMessage] = useState("");
  const [responseMessage, setResponseMessage] = useState("");

  const handleChange = (event) => {
    setOutput({
      usn: "",
      name: "",
      email: "",
      phone: "",
      batch: "",
      semester: "",
      examName: "",
      subCode: "",
      subName: "",
      marks: "",
      placementDetails: {
        placed: false,
        company: "",
        designation: "",
        ctc: "",
      },
    });
    setResponseMessage("");
    setErrMessage("");
    const newUsn = event.target.value;
    setUsn(newUsn);
  };

  const handleFetchDetails = async () => {
    setErrMessage("");
    setResponseMessage("");

    if (!/^[0-9A-Za-z]+$/.test(usn)) {
      setErrMessage("Student USN is empty or invalid");
      document.getElementById("usn").focus();
      return;
    }

    // Fetch data from local storage
    const storedStudentsData = JSON.parse(localStorage.getItem("studentsData")) || {};
    const studentData = storedStudentsData[usn];

    if (studentData) {
      setResponseMessage("Student details successfully retrieved");
      setOutput(studentData);

      // Additional operations using the entered student USN
      // Perform your operations here...

    } else {
      setResponseMessage("Student not found");
    }
  };

  const containerStyle = {
    backgroundImage: `url('https://wallpaper-house.com/data/out/10/wallpaper2you_373146.jpg')`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    minHeight: "100vh",
    Width:"300px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#fff", // Text color
  };

  return (
    <div  style={{backgroundImage: `url('https://wallpaper-house.com/data/out/10/wallpaper2you_373146.jpg')`}}>
    <Container style={containerStyle}>
      <div  >
        <PersonIcon style={{ fontSize: 100, color: "#2196f3" }} />
        <div >
          <Typography variant="h4" gutterBottom style={{ color: "#fff" }}>
            Get Student Details
          </Typography>
          <form >
            <input
              id="usn"
              placeholder="Enter USN"
              value={usn}
              onChange={handleChange}
              style={{ color: "#000", backgroundColor: "#fff" }} // Input field color combination
            />
            <Typography variant="h6" color="error" style={{ color: "#ff5722" }}>
              {errMessage}
            </Typography>
            
            
            <Button
              onClick={handleFetchDetails}
              variant="contained"
              style={{ marginTop: "10px", background: "#4caf50", color: "#fff" }} // Button color combination
            >
              Get Student Details
            </Button>
            <Link to="/dashboard">
            <IconButton>
            <Tooltip title="Go to home pg" placement="right">
                <ArrowBackIcon style={{ color: "#fff" }} />
                </Tooltip>
              </IconButton>
              
            </Link>
          </form>

          {output.usn && (
            <>
              <TableContainer style={{backgroundColor:"#3E082D"}}>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell style={{ color: "#fff" }}>Attribute</TableCell>
                      <TableCell style={{ color: "#fff" }}>Value</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {Object.entries(output).map(([key, value]) => (
                      key !== "placementDetails" && (
                        <TableRow key={key}>
                          <TableCell style={{ color: "#fff" }}>{key}</TableCell>
                          <TableCell style={{ color: "#fff" }}>{typeof value === "object" ? JSON.stringify(value) : value}</TableCell>
                        </TableRow>
                      )
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
              {output.placementDetails.placed && (
                <>
                  <Typography variant="h6" style={{ color: "#fff", marginTop: "20px" }}>
                    Placement Details
                  </Typography>
                  <TableContainer style={{backgroundColor:"#3E082D"}}>
                    <Table>
                      <TableHead>
                        <TableRow>
                          <TableCell style={{ color: "#fff" }}>Attribute</TableCell>
                          <TableCell style={{ color: "#fff" }}>Value</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {Object.entries(output.placementDetails).map(([key, value]) => (
                          <TableRow key={key}>
                            <TableCell style={{ color: "#fff" }}>{key}</TableCell>
                            <TableCell style={{ color: "#fff" }}>{value}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                </>
              )}
            </>
          )}

          <Typography variant="h6" style={{ color: "#fff" }}>{responseMessage}</Typography>
        </div>
      </div>
    </Container>
    </div>
  );
}

export default GetStudent;

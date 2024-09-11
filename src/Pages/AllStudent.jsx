import React, { useState, useEffect } from "react";
import Tooltip from '@mui/material/Tooltip';
import { Link } from "react-router-dom";
import './table.css'
import {
  Container,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  IconButton,
  Button,
  Modal,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import PersonIcon from "@mui/icons-material/Person";
import VisibilityIcon from "@mui/icons-material/Visibility";

function AllStudent() {
  const [studentsData, setStudentsData] = useState([]);
  const [responseMessage, setResponseMessage] = useState("");
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [openModal, setOpenModal] = useState(false);

  const fetchAllDetails = () => {
    setResponseMessage("");

    const storedStudentsData =
      JSON.parse(localStorage.getItem("studentsData")) || {};
    const allStudentsData = Object.values(storedStudentsData);

    if (allStudentsData.length > 0) {
      setResponseMessage("GO TO HOME PAGE");
      setStudentsData(allStudentsData);
    } else {
      setResponseMessage("No student data found in local storage");
    }
  };

  useEffect(() => {
    fetchAllDetails();
  }, []);

  const containerStyle = {
    backgroundImage: `url('https://wallpaper-house.com/data/out/10/wallpaper2you_373146.jpg')`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#fff",
  };

  const modalStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  const tableCellStyle = {
    color: "#fff",
  };

  const buttonStyle = {
    color: "#2196f3", // Blue color suitable for dark background
  };

  const modalContentStyle = {
    background: "#fff",
    padding: "10px",
    borderRadius: "10px",
    backgroundColor: "#78757A",
    width:"600px",
    maxWidth: "1000px", // Set the maximum width
    margin: "0 auto", // Center the content horizontally
  };

  const modalHeaderStyle = {
    color: "#000",
    marginBottom: "20px",
  };

  const modalDetailsStyle = {
    fontSize: "18px", // Increased font size
    marginBottom: "10px",
    backgroundColor: "#C2BABA", // Add the desired background color here
    padding: "5px", // Add padding for better visual appeal
    borderRadius: "5px", // Optional: Add border radius
  };

  const closeButtonStyle = {
    fontSize: "16px", // Increased font size
  };

  const handleViewMore = (student) => {
    setSelectedStudent(student);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  return (
    <div style={containerStyle}>
      <Container>
        <div>
          <PersonIcon style={{ fontSize: 100, color: "#2196f3" }} />
          <div>
            <Typography variant="h4" gutterBottom style={{ color: "#fff" }}>
              All Students Details
            </Typography>

            {studentsData.length > 0 && (
              <TableContainer sx={{ backgroundColor: "#4F4B4B" }}>
                <Table>
                  <TableHead>
                    <TableRow >
                      <TableCell style={tableCellStyle}>Name</TableCell>
                      <TableCell style={tableCellStyle}>USN</TableCell>
                      <TableCell style={tableCellStyle}>Email</TableCell>
                      <TableCell style={tableCellStyle}>Phone</TableCell>
                      <TableCell style={tableCellStyle}>View More</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {studentsData.map((student, index) => (
                      <TableRow
                      className="row"
                        key={index}
                        style={{ cursor: "pointer"}}
                      >
                        <TableCell style={tableCellStyle}>
                          {student.name}
                        </TableCell>
                        <TableCell style={tableCellStyle}>{student.usn}</TableCell>
                        <TableCell style={tableCellStyle}>
                          {student.email}
                        </TableCell>
                        <TableCell style={tableCellStyle}>
                          {student.phone}
                        </TableCell>
                        <TableCell style={tableCellStyle}>
                          <IconButton
                            onClick={() => handleViewMore(student)}
                            style={buttonStyle}
                          >
                            <VisibilityIcon />
                          </IconButton>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            )}

            <Typography variant="h6" style={{ color: "#fff" }}>
              {responseMessage}
            </Typography>

            <Link to="/dashboard">
            <Tooltip title="Go to back home pg " placement="left-start">
              <IconButton>
                <ArrowBackIcon style={{ color: "#fff" }} />
              </IconButton>
              </Tooltip>
            </Link>
          </div>
        </div>
      </Container>

      {/* Modal */}
      <Modal open={openModal} onClose={handleCloseModal} style={modalStyle}>
        <div style={modalContentStyle}>
          <Typography variant="h5" style={modalHeaderStyle}>
            Detailed Information
          </Typography>
          {selectedStudent && (
            <div>
              <Typography style={modalDetailsStyle}>
                Batch: {selectedStudent.batch}
              </Typography>
              <Typography style={modalDetailsStyle}>
                Semester: {selectedStudent.semester}
              </Typography>
              <Typography style={modalDetailsStyle}>
                Exam: {selectedStudent.examName}
              </Typography>
              <Typography style={modalDetailsStyle}>
                SubCode: {selectedStudent.subCode}
              </Typography>
              <Typography style={modalDetailsStyle}>
                SubName: {selectedStudent.subName}
              </Typography>
              <Typography style={modalDetailsStyle}>
                Marks: {selectedStudent.marks}
              </Typography>
              {selectedStudent?.placementDetails?.placed === "true" && (
                <>
                  <Typography style={modalDetailsStyle}>
                    Company: {selectedStudent?.placementDetails?.company}
                  </Typography>
                  <Typography style={modalDetailsStyle}>
                    CTC: {selectedStudent?.placementDetails?.ctc}
                  </Typography>
                  <Typography style={modalDetailsStyle}>
                    Designation:{" "}
                    {selectedStudent?.placementDetails?.designation}
                  </Typography>
                </>
              )}
           
              <Button
                onClick={handleCloseModal}
                variant="contained"
                color="primary"
                style={closeButtonStyle}
              >
                Close
              </Button>
            </div>
          )}
        </div>
      </Modal>
    </div>
  );
}

export default AllStudent;

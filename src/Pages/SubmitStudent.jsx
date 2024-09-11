import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Button,
  TextField,
  FormControl,
  Radio,
  RadioGroup,
  FormControlLabel,
  Container,
  Grid,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  MenuItem,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import AllStudent from "./AllStudent";

const SubmitStudent = () => {
  const navigate = useNavigate();

  const [student, setStudent] = useState({
    name: "",
    usn: "",
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

  const [openDialog, setOpenDialog] = useState(false);

  const handleOpenDialog = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    // Validation for the name field (only alphabets)
    if (name === "name" && !/^[a-zA-Z ]+$/.test(value)) {
      return; // Do not update state for invalid name
    }

    // Validation for the email field (valid email format)
    if (name === "email" && !/^\S+@\S+\.\S+$/.test(value)) {
      return; // Do not update state for invalid email
    }

    // Validation for the phone field (only 10 numeric digits)
    if (name === "phone" && !/^\d{0,10}$/.test(value)) {
      return; // Do not update state for invalid phone number
    }

    setStudent((prevStudent) => ({
      ...prevStudent,
      [name]: value,
    }));
  };

  const handlePlacementDetailsChange = (event) => {
    const { name, value } = event.target;
    setStudent((prevStudent) => ({
      ...prevStudent,
      placementDetails: {
        ...prevStudent.placementDetails,
        [name]: value,
      },
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const storedStudentsData = JSON.parse(localStorage.getItem('studentsData')) || {};
    const uniqueKey = student.usn;

    if (storedStudentsData[uniqueKey]) {
      console.log(`Student with USN ${uniqueKey} already exists. You can handle this case.`);
    } else {
      storedStudentsData[uniqueKey] = student;
      localStorage.setItem('studentsData', JSON.stringify(storedStudentsData));
      console.log("Form submitted:", student);

      handleOpenDialog();

      navigate('/dashboard/AllStudent');
    }
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

  const formContainerStyle = {
    marginTop: "50px",
    background: "rgba(255, 255, 255, 0.8)",
    padding: "20px",
    borderRadius: "10px",
    maxHeight: "80vh",
    overflowY: "auto",
  };

  return (
    <div style={backgroundImageStyle}>
      <Container component="main" maxWidth="xs" style={formContainerStyle}>
        <div className="student-container">
          <h1 style={{ fontSize: "2.5em", color: "#3f51b5", marginBottom: "20px" }}>
            Enter Mentee Details
          </h1>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  label="Student Name"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  name="name"
                  value={student.name}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="USN"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  name="usn"
                  value={student.usn}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Email"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  name="email"
                  value={student.email}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Phone Number"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  name="phone"
                  value={student.phone}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <FormControl component="fieldset" margin="normal">
                  <RadioGroup
                    row
                    aria-label="batch"
                    name="batch"
                    value={student.batch}
                    onChange={handleChange}
                  >
                    <FormControlLabel value="A" control={<Radio />} label="Batch A" />
                    <FormControlLabel value="B" control={<Radio />} label="Batch B" />
                  </RadioGroup>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Semester"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  name="semester"
                  select
                  value={student.semester}
                  onChange={handleChange}
                >
                  {[1, 2, 3, 4].map((semester) => (
                    <MenuItem key={semester} value={semester}>
                      {`Semester ${semester}`}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>

              <Grid item xs={12}>
                <TextField
                  label="Exam Name"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  name="examName"
                  select
                  value={student.examName}
                  onChange={handleChange}
                >
                  {["Internal 1", "Internal 2", "End Semester"].map((exam) => (
                    <MenuItem key={exam} value={exam}>
                      {exam}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>

              <Grid item xs={12}>
                <TextField
                  label="Subject Code"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  name="subCode"
                  select
                  value={student.subCode}
                  onChange={handleChange}
                >
                  {[
                    "21MCA201",
                    "21MCA202",
                    "21MCA203",
                    "21MCA204",
                    "21MCA205",
                    "21MCA206",
                  ].map((code) => (
                    <MenuItem key={code} value={code}>
                      {code}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Subject Name"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  name="subName"
                  select
                  value={student.subName}
                  onChange={handleChange}
                >
                  {["WEB DEVELOPMENT", "MATH", "DSA", "MAD", "DBMS", "SE"].map((name) => (
                    <MenuItem key={name} value={name}>
                      {name}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Marks Obtained"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  name="marks"
                  type="number"
                  inputProps={{ max: 100, min: 0 }} // Set max and min attributes for input
                  value={student.marks}
                  onChange={handleChange}
                />
              </Grid>
            </Grid>

            <h2
              style={{
                fontSize: "1.8em",
                color: "#4caf50",
                marginTop: "20px",
                marginBottom: "15px",
              }}
            >
              Placement Details
            </h2>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <FormControl component="fieldset" margin="normal">
                  <RadioGroup
                    row
                    aria-label="placement"
                    name="placed"
                    value={student.placementDetails.placed}
                    onChange={handlePlacementDetailsChange}
                  >
                    <FormControlLabel value="true" control={<Radio />} label="Placed" />
                    <FormControlLabel value="false" control={<Radio />} label="Not Placed" />
                  </RadioGroup>
                </FormControl>
              </Grid>
              {student.placementDetails.placed && (
                <>
                  <Grid item xs={12}>
                    <TextField
                      label="Company Name"
                      variant="outlined"
                      fullWidth
                      margin="normal"
                      name="company"
                      value={student.placementDetails.company}
                      onChange={handlePlacementDetailsChange}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      label="Designation"
                      variant="outlined"
                      fullWidth
                      margin="normal"
                      name="designation"
                      value={student.placementDetails.designation}
                      onChange={handlePlacementDetailsChange}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      label="CTC"
                      variant="outlined"
                      fullWidth
                      margin="normal"
                      name="ctc"
                      value={student.placementDetails.ctc}
                      onChange={handlePlacementDetailsChange}
                    />
                  </Grid>
                </>
              )}
            </Grid>

            <Button type="submit" variant="contained" style={{ marginTop: "20px" }}>
              Submit Student
            </Button>

            {/* Dialog for successful submission */}
            <Dialog open={openDialog} onClose={handleCloseDialog}>
              <DialogTitle>Success</DialogTitle>
              <DialogContent>
                <DialogContentText>
                  Data submitted successfully!
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button onClick={handleCloseDialog} color="primary">
                  OK
                </Button>
              </DialogActions>
            </Dialog>
          </form>
        </div>
      </Container>
    </div>
  );
};

export default SubmitStudent;

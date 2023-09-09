import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import {
  Box,
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Table,
  TableContainer,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
} from "@mui/material";

const Home = () => {
  const [dataList, setDataList] = useState([
    {
      name: "krp",
      age: "21",
      availability: ["Sunday", "Wednesday"],
      email: "krp@mail.com",
      language: ["hindi", "english", "marathi", "gujarati"],
      location: "pune",
      mobile: "9876543211",
    },
  ]);

  const addData = (newRegistration) => {
    setDataList([...dataList, newRegistration]);
  };

  const [newData, setNewData] = useState({
    name: "",
    age: "",
    mobile: "",
    email: "",
    location: "",
    language: [],
    availability: [],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewData({ ...newData, [name]: value });
  };

  const handleLanguageChange = (e) => {
    const selectedLanguages = e.target.value;
    setNewData({ ...newData, language: selectedLanguages });
  };

  const handleChangeAvailability = (e) => {
    const { name, value } = e.target;
    setNewData({ ...newData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(newData);
    addData(newData);
    setNewData({
      name: "",
      age: "",
      mobile: "",
      email: "",
      location: "",
      language: [],
      availability: [],
    });
  };
  return (
    <div>
      <Header />
      <Box sx={{ backgroundColor: "#FBEAFF" }}>
        <Box>
          <Grid container spacing={2}>
            <Grid item xs={5}></Grid>
            <Grid item xs={4}>
              {" "}
              <h2>New Registration</h2>
            </Grid>
            {/* <Grid item xs={4}></Grid> */}
          </Grid>

          <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={2}></Grid>
              <Grid item xs={4}>
                <TextField
                  label="Name"
                  variant="outlined"
                  fullWidth
                  margin="none"
                  name="name"
                  value={newData.name}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={1}>
                <TextField
                  label="Age"
                  variant="outlined"
                  fullWidth
                  margin="none"
                  name="age"
                  value={newData.age}
                  onChange={handleChange}
                  type="number"
                />
              </Grid>
              <Grid item xs={3}>
                <TextField
                  label="Location"
                  variant="outlined"
                  fullWidth
                  margin="none"
                  name="location"
                  value={newData.location}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={2}></Grid>
              <Grid item xs={2}></Grid>
              <Grid item xs={4}>
                <TextField
                  label="Mobile"
                  variant="outlined"
                  fullWidth
                  margin="none"
                  name="mobile"
                  value={newData.mobile}
                  onChange={handleChange}
                  type="number"
                />
              </Grid>
              <Grid item xs={4}>
                <TextField
                  label="Email"
                  variant="outlined"
                  fullWidth
                  margin="none"
                  name="email"
                  value={newData.email}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={2}></Grid>
              <Grid item xs={2}></Grid>

              <Grid item xs={4}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">
                    Language
                  </InputLabel>
                  <Select
                    label="Language"
                    fullWidth
                    margin="none"
                    name="language"
                    value={newData.language}
                    onChange={handleLanguageChange}
                    multiple
                  >
                    <MenuItem value="english">English</MenuItem>
                    <MenuItem value="marathi">Marathi</MenuItem>
                    <MenuItem value="hindi">Hindi</MenuItem>
                    <MenuItem value="gujarati">Gujarati</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={4}>
                <FormControl fullWidth>
                  <InputLabel id="availability-label">Availability</InputLabel>
                  <Select
                    labelId="availability-label"
                    label="Availability"
                    fullWidth
                    margin="none"
                    name="availability"
                    value={newData.availability}
                    onChange={handleChangeAvailability}
                    multiple
                  >
                    <MenuItem value="Monday">Monday</MenuItem>
                    <MenuItem value="Tuesday">Tuesday</MenuItem>
                    <MenuItem value="Wednesday">Wednesday</MenuItem>
                    <MenuItem value="Thursday">Thursday</MenuItem>
                    <MenuItem value="Friday">Friday</MenuItem>
                    <MenuItem value="Saturday">Saturday</MenuItem>
                    <MenuItem value="Sunday">Sunday</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={2}></Grid>
              <Grid item xs={5}></Grid>
              <Grid item xs={2}>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  fullWidth
                >
                  Register
                </Button>
              </Grid>
              <Grid item xs={4}></Grid>
              <Grid item xs={4}></Grid>
            </Grid>
          </form>
        </Box>
      </Box>
      <Box sx={{ backgroundColor: "#C1FCF5" }}>
        <Grid container spacing={2}>
          <Grid item xs={5}></Grid>
          <Grid item xs={4}>
            {" "}
            <h2>List of Registered Users</h2>
          </Grid>
          {/* <Grid item xs={4}></Grid> */}
        </Grid>
        <TableContainer
          component={Paper}
          style={{
            width: "1200px",
            height: "auto",
            margin: "0 auto",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Age</TableCell>
                <TableCell>Availability</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Language</TableCell>
                <TableCell>Location</TableCell>
                <TableCell>Mobile</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {dataList.map((item, index) => (
                <TableRow key={index}>
                  <TableCell>{item.name}</TableCell>
                  <TableCell>{item.age}</TableCell>
                  <TableCell>{item.availability.join(", ")}</TableCell>
                  <TableCell>{item.email}</TableCell>
                  <TableCell>{item.language.join(", ")}</TableCell>
                  <TableCell>{item.location}</TableCell>
                  <TableCell>{item.mobile}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
      {/* <Box sx={{ backgroundColor: "#DCF8D7" }}>qwerty</Box> */}
    </div>
  );
};

export default Home;

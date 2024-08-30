import {
  Box,
  createTheme,
  FormControl,
  FormLabel,
  Grid,
  Grid2,
  Paper,
  TextField,
  ThemeProvider,
  Radio,
  RadioGroup,
  FormControlLabel,
  InputLabel,
  MenuItem,
  Select
} from "@mui/material";
import React from "react";

const TargetAudience = ({ data, handler }) => {
  const darkTheme = createTheme({ palette: { mode: "dark" } });

  return (
    <>
      <Grid2
        size={12}
        sx={{ alignItems: "center", justifyItems: "center", paddingTop: "2%" }}
        // container
        spacing={3}
      >
        <Grid2>
          <ThemeProvider theme={darkTheme}>
            <Paper
              elevation={6}
              sx={{
                alignSelf: "center",
                textAlign: "center",
                width: 150,
                height: 40,
                lineHeight: "40px",
              }}
            >
              Target Audience
            </Paper>
          </ThemeProvider>
        </Grid2>
        <Grid2 sx={{ justifyItems: "center", paddingTop: "2%" }}>
          <FormControl>
            <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="female"
              name="radio-buttons-group"
              onChange={(e) =>{
                handler({ ...data, "gender": e.target.value })
              }}
            >
              <FormControlLabel
                value="female"
                control={<Radio />}
                label="Female"
              />
             <FormControlLabel
                value="male"
                control={<Radio />}
                label="Male"
              />
              <FormControlLabel
                value="male and female"
                control={<Radio />}
                label="Both"
              />
            </RadioGroup>
          </FormControl>
        </Grid2>
        <Grid2 sx={{ justifyItems: "center", paddingTop: "2%" }}>
          <FormControl >
            <InputLabel id="demo-simple-select-label">Age</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={data.age}
              label="Age"
              defaultValue={`kid`}
              onChange={(e) =>
                handler({ ...data, 'targetAudienceAge': e.target.value })
              }
            >
              <MenuItem value={`kid`}>Kid</MenuItem>
              <MenuItem value={`teen`}>Teen</MenuItem>
              <MenuItem value={`mid-thirties`}>Mid 30s and 40s</MenuItem>
              <MenuItem value={`old`}>Old</MenuItem>
            </Select>
          </FormControl>
        </Grid2>
      </Grid2>
    </>
  );
};

export default TargetAudience;

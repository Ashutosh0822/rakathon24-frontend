import {
  createTheme,
  Grid2,
  Paper,
  TextField,
  ThemeProvider,
  FormControl,
  FormLabel,
  Radio,
  RadioGroup,
  FormControlLabel,
} from "@mui/material";
import React from "react";

const ContextDetails = ({ data, handler, ind }) => {
  const darkTheme = createTheme({ palette: { mode: "dark" } });
  const onChange= (e, label) => {
    let i=1;
    handler(data.map(d=>{
      if(ind==i){
        i++;
        return {...d,[label]:e.target.value}
      }
      i++;
      return d;
    }))
   
  }
  return (
    <>
    {console.log(data)}
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
                width: 90,
                height: 40,
                lineHeight: "40px",
              }}
            >
              Context Details
            </Paper>
          </ThemeProvider>
        </Grid2>
        <Grid2 sx={{ justifyItems: "center", paddingTop: "2%" }}>
          <TextField
            id="filled-multiline-flexible"
            label="Resembling personality"
            name="actorResemblence"
            variant="filled"
            onChange={(e)=>onChange(e,e.target.name)}
          
          />
        </Grid2>
        <Grid2 sx={{ justifyItems: "center", paddingTop: "2%" }}>
          <TextField
            id="filled-multiline-flexible"
            label="Actor age"
            name="actorAge"
            variant="filled"
            onChange={(e)=>onChange(e,e.target.name)}
          />
        </Grid2>
        <Grid2 sx={{ justifyItems: "center", paddingTop: "2%" }}>
          <TextField
            id="filled-multiline-flexible"
            label="Actor attire"
            name="actorAttire"
            variant="filled"
            onChange={(e)=>onChange(e,e.target.name)}
          />
        </Grid2>
        <Grid2 sx={{ justifyItems: "center", paddingTop: "2%" }}>
          <FormControl>
            <FormLabel id="demo-radio-buttons-group-label">
              Body Shape
            </FormLabel>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="fit"
              name="radio-buttons-group"
              onChange={(e)=>onChange(e,'bodyShape')}
            >
              <FormControlLabel value="fit" control={<Radio />} label="Fit" />
              <FormControlLabel value="thin" control={<Radio />} label="Thin" />
              <FormControlLabel value="male" control={<Radio />} label="Male" />
              <FormControlLabel
                value="fat"
                control={<Radio />}
                label="Healthy"
              />
            </RadioGroup>
          </FormControl>
        </Grid2>

        <Grid2 sx={{ justifyItems: "center", paddingTop: "2%" }}>
          <TextField
            id="filled-multiline-flexible"
            label="Actor Action"
            name="actorAction"
            multiline
            maxRows={4}
            variant="filled"
            onChange={(e)=>onChange(e,e.target.name)}
          />
        </Grid2>
        <Grid2 sx={{ justifyItems: "center", paddingTop: "2%" }}>
          <TextField
            id="filled-multiline-flexible"
            label="Background Audience"
            name="backGroundAudience"
            multiline
            maxRows={4}
            variant="filled"
            onChange={(e)=>onChange(e,e.target.name)}
          />
        </Grid2>
        <Grid2 sx={{ justifyItems: "center", paddingTop: "2%" }}>
          <TextField
            id="filled-multiline-flexible"
            label="Background Specification"
            name="backGroundSpecification"
            multiline
            maxRows={4}
            variant="filled"
            onChange={(e)=>onChange(e,e.target.name)}
          
          />
        </Grid2>
        <Grid2 sx={{ justifyItems: "center", paddingTop: "2%" }}>
          <TextField
            id="filled-multiline-flexible"
            label="Mood and Lightings"
            name="moodAndLightening"
            variant="filled"
            onChange={(e)=>onChange(e,e.target.name)}
           
          />
        </Grid2>
      </Grid2>
    </>
  );
};

export default ContextDetails;

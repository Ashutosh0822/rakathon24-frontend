import {
  createTheme,
  Grid2,
  Paper,
  TextField,
  ThemeProvider,
} from "@mui/material";
import React from "react";

const ProductDetails = ({ data, handler }) => {
  const darkTheme = createTheme({ palette: { mode: "dark" } });

  return (
    <>
      <Grid2
        size={12}
        sx={{alignItems:'center', justifyItems: "center", paddingTop: "2%" }}
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
              Product Details
            </Paper>
          </ThemeProvider>
        </Grid2>
        <Grid2 sx={{ justifyItems: "center", paddingTop: "2%" }}>
          <TextField
            id="filled-multiline-flexible"
            label="Product description"
            name="description"
            multiline
            maxRows={4}
            variant="filled"
            onChange={(e) =>
              handler({ ...data, [e.target.name]: e.target.value })
            }
          />
        </Grid2>
        <Grid2 sx={{ justifyItems: "center", paddingTop: "2%" }}>
          <TextField
            id="filled-multiline-flexible"
            label="Impact to be acheieved"
            name="impact"
            multiline
            maxRows={4}
            variant="filled"
            onChange={(e) =>
              handler({ ...data, [e.target.name]: e.target.value })
            }
          />
        </Grid2>
      </Grid2>
    </>
  );
};

export default ProductDetails;

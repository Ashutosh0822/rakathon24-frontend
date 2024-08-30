import React, { useState } from "react";
import Stack from "@mui/material/Stack";
import ProductDetails from "../components/ProductDetailsComponent";

const ExperimentPage = () => {
  const [data, handler] = useState({});
  return (
      <Stack sx={{padding:"2%",margin:"1%"}}>
        {/* {console.log(data)} */}
        <ProductDetails data={data} handler={handler} sx={{justifyContent:'center'}} />
      </Stack>
  );
};

export default ExperimentPage;

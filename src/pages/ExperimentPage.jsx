import React, { useState } from "react";
import ProductDetails from "../components/ProductDetailsComponent";
import TargetAudience from "../components/TargetAudiene";
import ContextDetails from "../components/ContextDetailsComponent";
import { Button, Grid2 } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import axios from "axios";

const ExperimentPage = () => {
  const nos = [1, 2, 3];
  const [productData, productHandler] = useState({});
  const [contextData, contextHander] = useState([
    {
      bodyShape: "thin",
    },
  ]);
  const [imageUrls, setImages] = useState([
    "https://hotpotmedia.s3.us-east-2.amazonaws.com/8-wTIggq6Vu6sXNgH.png",
  ]);
  const [targetAudienceData, TargetAudienceHandler] = useState({
    targetAudienceAge: "kid",
    gender: "female",
  });
  const [cnt, updateCount] = useState(1);
  const submitForm = () => {
    console.log({ productData, targetAudienceData, contextData });
    axios
      .post(`http://localhost:8080/experiment`, {
        productData,
        targetAudienceData,
        contextData,
      })
      .then((res) => {
        console.log(res);
        setImages(res.data.imgUrls);
      });
  };
  return (
    <>
      <Grid2 sx={{ padding: "2%", justifyContent: "center", margin: "1%" }}>
        <Grid2>
          <ProductDetails
            data={productData}
            handler={productHandler}
            sx={{ justifyContent: "center" }}
          />
          <TargetAudience
            data={targetAudienceData}
            handler={TargetAudienceHandler}
            sx={{ justifyContent: "center" }}
          />
        </Grid2>
        <AddIcon
            sx={{ padding: 15, margin: 15 }}
            fontSize="large"
            onClick={(e) => {
              e.preventDefault();
              if (cnt < 3) {
                updateCount(cnt + 1);
                contextHander([
                  ...contextData,
                  {
                    bodyShape: "thin",
                  },
                ]);
              }
            }}
        />
        <Grid2>
          <Grid2>
            {nos
              .filter((no) => no <= cnt)
              .map((no) => (
                <>
                  <Grid2>
                    <ContextDetails
                      key={no}
                      ind={no}
                      data={contextData}
                      handler={contextHander}
                      sx={{ justifyContent: "center" }}
                    />
                  </Grid2>

                  {imageUrls.length >= no ? (
                    <Grid2>
                      <img key={imageUrls[no - 1]} src={imageUrls[no - 1]} />
                    </Grid2>
                  ) : null}
                </>
              ))}
          </Grid2>
        </Grid2>

        <Grid2>
          <Button variant="outlined" onClick={() => submitForm()}>
            Generate Results
          </Button>
        </Grid2>
      </Grid2>
    </>
  );
};

export default ExperimentPage;

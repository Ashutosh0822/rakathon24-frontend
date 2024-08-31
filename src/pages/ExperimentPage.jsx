import React, { useState } from "react";
import ProductDetails from "../components/ProductDetailsComponent";
import TargetAudience from "../components/TargetAudience";
import ContextDetails from "../components/ContextDetailsComponent";
import { Box, Button, IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import axios from "axios";
import "./ExperimentPage.css";

const ExperimentPage = () => {
  const maxContexts = 3;
  const nos = [1, 2, 3];

  const [productData, setProductData] = useState({});
  const [contextData, setContextData] = useState([{ bodyShape: "thin" }]);
  const [imageUrls, setImageUrls] = useState([]);
  const [targetAudienceData, setTargetAudienceData] = useState({
    targetAudienceAge: "young",
    gender: "female",
  });
  const [validation, setValidation] = useState([]);
  const [contextCount, setContextCount] = useState(1);

  const submitForm = () => {
    console.log({ productData, targetAudienceData, contextData });
    axios
      .post(`http://localhost:8080/experiment`, {
        productData,
        targetAudienceData,
        contextData,
      })
      .then((res) => {
        console.log(res)
        setImageUrls(res.data.imgUrls);
        setValidation(res.data.validationResponse);
      });
  };

  const addContext = (e) => {
    e.preventDefault();
    if (contextCount < maxContexts) {
      setContextCount((prevCount) => prevCount + 1);
      setContextData((prevData) => [...prevData, { bodyShape: "thin" }]);
    }
  };

  return (
    <div className="experiment-container">
      {console.log(contextData)}
      <div className="header">
        <div className="paper-root"></div>
      </div>
      <div className="form-section">
        <div className="form-item">
          <ProductDetails data={productData} handler={setProductData} />
        </div>
        <div className="form-item">
          <TargetAudience
            data={targetAudienceData}
            handler={setTargetAudienceData}
          />
        </div>
      </div>
      {/* Divider Line Above Context Section */}
      <hr className="context-divider" />
      <div className="form-section">
        <div className="context-container">
          {nos
            .filter((no) => no <= contextCount)
            .map((no) => (
              <ContextDetails
                key={no}
                ind={no}
                data={contextData}
                handler={setContextData}
              />
            ))}
          <IconButton className="add-icon" onClick={addContext}>
            <AddIcon />
          </IconButton>
        </div>
      </div>
      <Button
        className="generate-button"
        variant="outlined"
        onClick={submitForm}
      >
        Generate Results
      </Button>
      <div className="image-grid">
        {imageUrls.map((url) => (
          <img key={url} src={url} alt="Generated result" />
        ))}
      </div>
      <div>
        {
          validation.map(res=>(
            <div>
              <label style={{color:getColor(res.category)}}>{res.category}</label>
              <div>{res.description}</div>
            </div>  
          ))
        }
      </div>
    </div>
  );
};

const getColor = (key) => {
  if (key === "Maybe") {
    return "yellow";
  }
  if (key === "Not Satisfying") {
    return "red";
  }
  return "green";
};

export default ExperimentPage;

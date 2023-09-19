import { Box, Typography, Button } from "@mui/material";
import React, { useState } from "react";
import "./styling/loginForm.css";
import Heading from "./heading";

export const LoginForm = () => {
  const [isFormOpen, setIsFormOpen] = useState(true); // State variable to track form open/close

  const handleCloseForm = () => {
    // Event handler to close the form
    setIsFormOpen(false);
   
   
  };

  return (
    <>
      {isFormOpen && (
        <Box
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
          }}
          className="container"
        >
          <Box className="header">
            <button 
              className="closeButton"
              style={{
                padding: "10px",
                borderRadius: "25%",
                border: "none",
                cursor: "pointer",
              }}
              onClick={handleCloseForm} 
            >
              X
            </button>
            <Box className="logoContainer">
              <img src="./Assets/marvels.jpg" alt="marvels logo" />
            </Box>
          </Box>

          <Box className="loginForm">
            <Typography className="formHeading" variant="h5">
              Enter your email
            </Typography>
            <Typography className="formText">
              Log into your Marvel account. If you don't have one, you will be
              prompted to create one.
            </Typography>
            <input
              className="emailInput"
              type="text"
              placeholder="abc@gmail.com"
            />
            <Box style={{display:'flex',justifyContent:'center'}}>
            <Button className="submitButton" variant="outlined">
              CONTINUE
            </Button>
            </Box>
            <Typography className="disclaimer">
              Marvel is part of The Walt Disney Family of Companies.
            </Typography>
            <Typography className="disclaimer">
              This email and password lets you seamlessly log into services and
              experiences across The Walt Disney Family of Companies, such as
              ESPN, Walt Disney World, Marvel,{" "}
              <a href="www.marvels.com" className="link">
                and more
              </a>
              .
            </Typography>
            <Typography className="disclaimer">
              If you’ve used your email with one of our services, please use it
              here too.
            </Typography>
          </Box>
        </Box>
      )}
    </>
  );
};

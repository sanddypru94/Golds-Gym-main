import { Box, Button, Typography } from "@mui/material";
import React from "react";
import herobanner from "../assets/images/banner.png";

const HeroBanner = () => {
  return (
    <Box
      sx={{
        mt: { lg: "212px", xs: "70px" },
        ml: { sm: "50px" },
      }}
      position={"relative"}
      p={"20px"}
    >
      <Typography
        color={"#FF2625"}
        fontWeight={"600"}
        fontSize={"26px"}
        position={"relative"}
        zIndex={"1"}
      >
        Fitness Club
      </Typography>

      <Typography
        fontWeight={"700"}
        position={"relative"}
        color={'black'}
        zIndex={"1"}
        sx={{
          fontSize: { lg: "44px", xs: "40px" },
          color:{sm:'black',xs:'#ffff'}
        }}
        mb={"23px"}
        mt={"30px"}
      >
        Sweat, Smile <br /> And Repeat
      </Typography>
      <Typography fontSize={"22px"} lineHeight={"35px"} mb={4}>
        Check out the most effective excerises
      </Typography>

      <div className="btn">
        <Button
          variant="contained"
          color="error"
          href="#exercises"
          sx={{
            backgroundColor: "#ff2625",
            padding: "10px",
          }}
        >
          Explore Excercises
        </Button>
      </div>
      <Typography
        fontWeight={600}
        color={"#ff2625"}
        sx={{
          display: {
            opacity: 0.1,
            sm: "block",
            xs: "none",
          },
          fontSize: {
            lg: "200px",
            md: "180px",
            sm: "160px",
          },
        }}
      >
        Excercises
      </Typography>
      <div className="box">
        <img src={herobanner} alt="Herobanner" className="hero-banner-img" />
      </div>
    </Box>
  );
};

export default HeroBanner;

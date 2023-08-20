import React from "react";

import Logo from "../assets/images/Logo-1.png";
import { Box, Stack, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box
      mt="80px"
      sx={{
        position: {md:'unset',sm: "absolute", xs: "absolute" },
        left: { md: "0", sm: "50%", xs: "40%" },
      }}
    >
      <Stack gap={"40px"} alignItems={"center"} px={"40px"} pt={"24px"}>
        <img src={Logo} alt="Logo" width={"200px"} height={"40px"} />
        <Typography variant="h5" pb="40px" mt={"20px"} textAlign={"center"}>
          Made By Jamshed Khan
        </Typography>
      </Stack>
    </Box>
  );
};

export default Footer;

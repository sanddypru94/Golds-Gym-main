import { Box } from "@mui/material";
import React, { useState } from "react";
import HeroBanner from "../components/HeroBanner";
import Excerises from "../components/Excerises";
import Search from "../components/Search";

const Home = () => {
  const [bodyPart, setBodyPart] = useState("all");
  const [excerises, setExcerises] = useState([]);
  return (
    <Box>
      <HeroBanner />
      <Search
        setExcerises={setExcerises}
        bodyPart={bodyPart}
        setBodyPart={setBodyPart}
      />
      <Excerises
        excerises={excerises}
        setExcerises={setExcerises}
        bodyPart={bodyPart}
      />
    </Box>
  );
};

export default Home;

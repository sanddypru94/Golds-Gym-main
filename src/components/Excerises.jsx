import { Box, Pagination, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import ExceriseCard from "./ExceriseCard";
import { useEffect } from "react";
import { exceriseOptions, fetchData } from "../utils/fetchData";

const Excerises = ({ setExcerises, bodyPart, excerises }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const excerisePage = 9;

  const indexOfLastExercise = currentPage * excerisePage;

  const indexOfFirstExercise = indexOfLastExercise - excerisePage;

  const currentExercises = excerises.slice(
    indexOfFirstExercise,
    indexOfLastExercise
  );

  const paginate = (e, value) => {
    setCurrentPage(value);

    window.scrollTo({ top: 1800, behavior: "smooth" });
  };

  useEffect(() => {
    const fetchExercisesData = async () => {
      let excercisesData = [];

      if (bodyPart === "all") {
        excercisesData = await fetchData(
          "https://exercisedb.p.rapidapi.com/exercises",
          exceriseOptions
        );
      } else {
        excercisesData = await fetchData(
          `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`,
          exceriseOptions
        );
      }
      setExcerises(excercisesData);
    };
    fetchExercisesData();
  }, [bodyPart]);

  return (
    <Box
      id="exercises"
      sx={{
        mt: { lg: "110px" },
      }}
      mt="50px"
      p="20px"
    >
      <Typography variant="h3" mb={"46px"}>
        Showing Results
      </Typography>
      <Stack
        direction={"row"}
        sx={{
          gap: {
            lg: "110px",
            xs: "50px",
          },
        }}
        flexWrap={"wrap"}
        justifyContent={"center"}
      >
        {currentExercises.map((exercise, index) => (
          <ExceriseCard key={index} exercise={exercise} />
        ))}
      </Stack>
      <Stack mt={"100px"} alignItems={"center"}>
        {excerises.length > excerisePage && (
          <Pagination
            color="standard"
            shape="rounded"
            defaultPage={1}
            count={Math.ceil(excerises.length / excerisePage)}
            page={currentPage}
            onChange={paginate}
            size="large"
          />
        )}
      </Stack>
    </Box>
  );
};

export default Excerises;

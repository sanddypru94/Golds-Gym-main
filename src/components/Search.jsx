import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { exceriseOptions, fetchData } from "../utils/fetchData";
import { useEffect } from "react";
import HorizontalScrollbar from "./HorizontalScrollbar";

const Search = ({ setExcerises, bodyPart, setBodyPart }) => {
  const [search, setSearch] = useState("");
  const [bodyParts, setBodyParts] = useState([]);

  useEffect(() => {
    const fetchExcerisesData = async () => {
      const bodyPartData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
        exceriseOptions
      );

      setBodyParts(["all", ...bodyPartData]);
    };
    fetchExcerisesData();
  }, []);

  const handleSearch = async () => {
    if (search) {
      const exerciseData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises",
        exceriseOptions
      );

      const searchExcerises = exerciseData.filter(
        (excerise) =>
          excerise.name.toLowerCase().includes(search) ||
          excerise.target.toLowerCase().includes(search) ||
          excerise.equipment.toLowerCase().includes(search) ||
          excerise.bodyPart.toLowerCase().includes(search)
      );
      setSearch("");
      setExcerises(searchExcerises);
    }
  };

  return (
    <Stack
      alignItems={"center"}
      sx={{
        mt: {
          sm: "37px",
          xs: "13rem",
        },
        ml: {
          md: "5rem",
          sm: "22rem",
          xs: "13rem",
        },
      }}
      justifyContent={"center"}
      p={"20px"}
    >
      <Typography
        fontWeight={700}
        sx={{
          fontSize: { lg: "44px", xs: "30px" },
          width: { md: "unset", sm: "30rem", xs: "30rem" },
        }}
        mb={"50px"}
        textAlign={"center"}
      >
        Awesome Exercises You <br />
        Should Know
      </Typography>

      <Box position={"relative"} mb={"72px"}>
        <TextField
          sx={{
            input: {
              fontWeight: "700",
              border: "none",
              borderRadius: "4px",
            },
            width: {
              lg: "800px",
              md: "800px",
              sm: "500px",
              xs: "350px",
            },
            backgroundColor: "#fff",
            borderRadius: "40px",
          }}
          value={search}
          height="76px"
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
          placeholder="Search Exercises"
          type="text"
        />
        <Button
          className="search-btn"
          sx={{
            bgcolor: "#ff2625",
            color: "#fff",
            textTransform: "none",
            width: { lg: "175px", xs: "80px" },
            fontSize: { lg: "20px", xs: "14px" },
            height: "56px",
            position: "absolute",
            right: "0",
          }}
          onClick={handleSearch}
        >
          Search
        </Button>
      </Box>

      <Box
        sx={{
          position: "relative",
          width: "100%",
          p: "20px",
        }}
      >
        <HorizontalScrollbar
          data={bodyParts}
          bodyPart={bodyPart}
          setBodyPart={setBodyPart}
          isbodyPart
        />
      </Box>
    </Stack>
  );
};

export default Search;

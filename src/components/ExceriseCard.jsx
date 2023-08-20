import { Button, Stack, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const ExceriseCard = ({ exercise }) => {
  return (
    <Link className="exercise-card" to={`/exercise/${exercise.id}`}>
      <img src={exercise.gifUrl} alt={exercise.name} loading="lazy" />
      <Stack direction={"row"}>
        <Button
          sx={{
            marginLeft: "21px",
            color: "#fff",
            background: "#ffa9a9",
            fontSize: "14px",
            borderRadius: "20px",
            textTransform: "capitalize",
            fontWeight: "600",
          }}
        >
          {exercise.bodyPart}
        </Button>
        <Button
          sx={{
            marginLeft: "21px",
            color: "#fff",
            background: "#fcc757",
            fontSize: "14px",
            borderRadius: "20px",
            textTransform: "capitalize",
            fontWeight: "600",
          }}
        >
          {exercise.target}
        </Button>
      </Stack>
      <Typography
        ml={"21px"}
        color={"#000"}
        fontWeight={"bold"}
        mt={"11px"}
        pb={"10px"}
        textTransform={"capitalize"}
        sx={{ fontSize: { lg: "24px", xs: "20px" } }}
      >
        {exercise.name}
      </Typography>
    </Link>
  );
};

export default ExceriseCard;

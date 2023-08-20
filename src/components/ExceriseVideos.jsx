import { Box, Stack, Typography } from "@mui/material";
import React from "react";
// import { exceriseOptions } from "../utils/fetchData";

const ExceriseVideos = ({ exerciseVideos, name }) => {
  if (!ExceriseVideos.length) return "Loading...";
  return (
    <Box
      sx={{
        mt: {
          lg: "200px",
          xs: "20px",
        },
      }}
      p={"20px"}
    >
      <Typography
        sx={{
          fontSize: { lg: "44px", xs: "25px" },
          ml: "20px",
          mt: { lg: "100px", xs: "60px" },
        }}
        mb={"33px"}
        fontWeight={"bold"}
      >
        Watch{" "}
        <span style={{ color: "#ff2625", textTransform: "capitalize" }}>
          {name}{" "}
        </span>{" "}
        exercise videos
      </Typography>
      <Stack
        flexWrap={"wrap"}
        alignItems={"center"}
        sx={{
          flexDirection: { lg: "row" },
          gap: { lg: "110px", xs: "0" },
          justifyContent: { lg: "flex-start", md: "center" },
        }}
      >
        {exerciseVideos?.slice(0, 6).map((item, index) => (
          <a
            key={index}
            className="exercise-video"
            href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
            target="_blank"
            rel="noreferrer"
          >
            <img src={item.video.thumbnails[0].url} alt={item.video.title} />
            <Box>
              <Typography variant="h5" color={"#000"}>
                {item.video.title}
              </Typography>
              <Typography variant="h6" color={"#000"}>
                {item.video.channelName}
              </Typography>
            </Box>
          </a>
        ))}
      </Stack>
    </Box>
  );
};

export default ExceriseVideos;

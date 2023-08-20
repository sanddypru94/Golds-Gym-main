import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import SimilarExcerises from "../components/SimilarExcerises";
import ExceriseVideos from "../components/ExceriseVideos";
import Detail from "../components/Detail";
import { useParams } from "react-router-dom";
import { exceriseOptions, fetchData, videosoptions } from "../utils/fetchData";

const ExceriseDetails = () => {
  const [exceriseDetail, setExceriseDetail] = useState({});
  const [exerciseVideos, setExerciseVidoes] = useState([]);
  const [targetMuscle, setTargetMuscle] = useState([]);
  const [equipment, setEquipment] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    const fetchExcerisesData = async () => {
      const exceriseDbUrl = "https://exercisedb.p.rapidapi.com";

      const youtubeSearchUrl =
        "https://youtube-search-and-download.p.rapidapi.com";

      const exceriseDetailData = await fetchData(
        `${exceriseDbUrl}/exercises/exercise/${id}`,
        exceriseOptions
      );
      setExceriseDetail(exceriseDetailData);

      const exceriseVideoData = await fetchData(
        `${youtubeSearchUrl}/search?query=${exceriseDetailData.name}`,
        videosoptions
      );
      setExerciseVidoes(exceriseVideoData.contents);

      const targetMucleData = await fetchData(
        `${exceriseDbUrl}/exercises/target/${exceriseDetailData.target}`,
        exceriseOptions
      );
      setTargetMuscle(targetMucleData);

      const equipmentExerciseData = await fetchData(
        `${exceriseDbUrl}/exercises/equipment/${exceriseDetailData.equipment}`,
        exceriseOptions
      );
      setEquipment(equipmentExerciseData);
    };
    fetchExcerisesData();
  }, [id]);

  return (
    <Box>
      <Detail exceriseDetail={exceriseDetail} />
      <ExceriseVideos
        exerciseVideos={exerciseVideos}
        name={exceriseDetail.name}
      />
      <SimilarExcerises targetMuscle={targetMuscle} equipment={equipment} />
    </Box>
  );
};

export default ExceriseDetails;

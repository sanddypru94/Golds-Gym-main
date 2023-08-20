import { Button, Stack, Typography } from "@mui/material";
import React from "react";

import BodyPartImg from "../assets/icons/body-part.png";
import TargetImg from "../assets/icons/target.png";
import EquipementImg from "../assets/icons/equipment.png";

const Detail = ({ exceriseDetail }) => {
  const { bodyPart, gifUrl, name, target, equipment } = exceriseDetail;

  const extraDetails = [
    {
      icon: BodyPartImg,
      name: bodyPart,
    },
    {
      icon: TargetImg,
      name: target,
    },
    {
      icon: EquipementImg,
      name: equipment,
    },
  ];
  return (
    <Stack
      gap={"60px"}
      sx={{
        flexDirection: {
          lg: "row",
        },
        p: "20px",
        alignItems: "center",
      }}
    >
      <img src={gifUrl} alt={name} loading="lazy" className="detail-image" />
      <Stack
        sx={{
          gap: {
            lg: "35px",
            xs: "20px",
          },
        }}
      >
        <Typography variant="h3" fontWeight={'bold'} textTransform={"capitalize"}>
          {name}
        </Typography>
        <Typography variant="h6">
          Exercises keep you strong.{name} {` `} is on of the best exercises to
          target your {target}.It will help you to imporve your mood and gain
          energy.
        </Typography>

        {
          extraDetails.map((i)=>(
            <Stack key={i.name} direction={'row'} gap={'24px'} alignItems={'center'}>
              <Button sx={{
                background:'#fff2db',
                borderRadius:'50%',
                width:'100px',
                height:'100px'
              }}>
                <img src={i.icon} alt={bodyPart} style={{
                  width:'50px',
                  height:'50px'
                }} />
              </Button>
              <Typography textTransform={'capitalize'} variant="h5">
                {i.name}
              </Typography>
            </Stack>
          ))
        }
      </Stack>
    </Stack>
  );
};

export default Detail;

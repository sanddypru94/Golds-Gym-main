import { Box } from "@mui/material";
import React from "react";
import BodyParts from "./BodyParts";
import { ScrollMenu } from "react-horizontal-scrolling-menu";
import ExceriseCard from "./ExceriseCard";

const HorizontalScrollbar = ({ data, bodyPart, setBodyPart,isbodyPart}) => {
  return (
    <ScrollMenu
     wrapperClassName="card">
      {data.map((item) => (
        <Box
          key={item.id || item}
          itemID={item.id || item}
          title={item.id || item}
          m={"0 40px"}
        >
          {isbodyPart ? 
          <BodyParts
            item={item}
            bodyPart={bodyPart}
            setBodyPart={setBodyPart}
          /> : <ExceriseCard  exercise={item}/>}
        </Box>
      ))}
    </ScrollMenu>
  );
};

export default HorizontalScrollbar;

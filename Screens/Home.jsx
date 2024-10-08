import { Box, Typography } from "@mui/material";
import React from "react";
import LoppinImage from "/loopin.webp";
import BingImage from "/bing.webp";
import AdobeImage from "/Adobe.webp";
import MonicaImage from "/monica.webp";
import CHatGptImage from "/Chatgpt.webp";
import JasperImage from "/Jasper.webp";
import AIComponent from "../Components/AIComponent";
import { GREY_COLOR, IMAGE_SIZE, pages } from "../Constants";
import {useResponsivness} from "../Helpers";

const Home = () => {
  const checkingLg = useResponsivness("down", "lg");
  const checkingSm = useResponsivness("down", "sm");
  const checkingWidth = checkingLg ? (checkingSm ? "xs" : "lg") : "md";
  const imageSize = checkingSm ? 50 : IMAGE_SIZE;
  return (
    <Box id={pages[0]} component="section" py={35}>
      <Box position="relative">
        <Typography
          className="paytone"
          textAlign="center"
          variant={checkingSm ? "h4" : "h2"}
          color="white"
        >
          Discover <span className="colorfull_text paytone"> AI Tools </span>{" "}
          for {checkingLg && <br />} Your {!checkingLg && <br />} Business!
        </Typography>
        <Typography
          className="mulish"
          mt={3}
          fontSize={!checkingSm ? "1.2rem" : ".8rem"}
          textAlign="center"
          color={GREY_COLOR}
        >
          Streamline Your Workflow with Our List of AI tools.{" "}
          {checkingLg && <br />} Find Your {!checkingLg && <br />} Perfect
          Solution.
        </Typography>
      </Box>
      <Box position={"absolute"} top={80} width="100%">
        <Box>
          <AIComponent
            width={checkingWidth}
            img1={LoppinImage}
            img2={BingImage}
            size={imageSize}
          />
        </Box>
        <Box visibility={checkingSm ? "hidden" : "visible"}>
          <AIComponent
            width="lg"
            img1={AdobeImage}
            img2={MonicaImage}
            size={imageSize}
          />
        </Box>
        <Box mt={checkingSm ? 10 : 0}>
          <AIComponent
            width={checkingWidth}
            img1={CHatGptImage}
            img2={JasperImage}
            size={imageSize}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Home;

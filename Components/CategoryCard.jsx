import {
  Card,
  CardActionArea,
  CardContent,
  Typography,
  Box,
} from "@mui/material";
import React from "react";
import { GREY_COLOR } from "../Constants";
import { useNavigate } from "react-router-dom";

const CategoryCard = ({ name, description, image, navigateTo }) => {
  const navigate = useNavigate();
  return (
    <Card className="category_card">
      <CardActionArea
        onClick={() =>
          navigate(navigateTo, {
            state: {
              name,
            },
          })
        }
        sx={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "flex-start",
        }}
        TouchRippleProps={{ sx: { color: "white" } }}
      >
        <CardContent sx={{ px: 2 }}>
          <Box position="absolute" top={-15} right={-15}>
            <img src={image} alt="Loading.." width={100} height={100} />
          </Box>
          <Typography
            color="white"
            gutterBottom
            variant="h5"
            component="div"
            className="paytone"
          >
            {name}
          </Typography>
          <Typography className="mulish" fontSize=".8rem" color={GREY_COLOR}>
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default CategoryCard;

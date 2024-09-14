import React from "react";
import { Container, Grid2 as Grid, Typography } from "@mui/material";
import SingleCard from "../Components/SingleCard";
import { HomePageHeadingAndDescription } from "../Helpers";
import { TOOLS } from "../Constants";

const ToolsScreen = () => {
  return (
    <Container id="Tools" maxWidth="lg" sx={{ pb: 10 }} component="section">
      <HomePageHeadingAndDescription
        heading={"Popular AI Tools"}
        description={
          "Discover the Best AI Tools Making Your Life Easier and More Efficient."
        }
      />
      <Grid container spacing={2}>
        {TOOLS.map((tool) => (
          <Grid size={{ lg: 4, md: 6, xs: 12 }}>
            <SingleCard key={tool.key} {...tool} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default ToolsScreen;

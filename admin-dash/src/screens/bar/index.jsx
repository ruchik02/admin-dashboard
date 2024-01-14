import React from "react";
import { Box } from "@mui/material";
import Headers from "../../components/Headers";
const Bar = () => {
  return (
    <Box m="20px">
      {/* Header */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Headers title="BAR CHART" subtitle="Simple Bar Chart" />
      </Box>
    </Box>
  );
};

export default Bar;

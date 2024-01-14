import React from "react";
import { Box } from "@mui/material";
import Headers from "../../components/Headers";
const Line = () => {
  return (
    <Box m="20px">
      {/* Header */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Headers title="LINE CHART" subtitle="Simple Line Chart" />
      </Box>
    </Box>
  );
};

export default Line;

import React from "react";
import { Box } from "@mui/material";
import Headers from "../../components/Headers";
const Geography = () => {
  return (
    <Box m="20px">
      {/* Header */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Headers title="GEOGRAPHY" subtitle="Simple Geography Chart" />
      </Box>
    </Box>
  );
};

export default Geography;

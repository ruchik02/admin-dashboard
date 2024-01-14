import React from "react";
import { Box } from "@mui/material";
import Headers from "../../components/Headers";
const Team = () => {
  return (
    <Box m="20px">
      {/* Header */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Headers title="TEAM" subtitle="Managing the Team Members" />
      </Box>
    </Box>
  );
};

export default Team;

import React from "react";
import { Box } from "@mui/material";
import Headers from "../../components/Headers";
const Calendar = () => {
  return (
    <Box m="20px">
      {/* Header */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Headers title="Calendar" subtitle="Full Calendar Interactive Page" />
      </Box>
    </Box>
  );
};

export default Calendar;

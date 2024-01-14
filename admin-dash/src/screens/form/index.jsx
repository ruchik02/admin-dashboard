import React from "react";
import { Box } from "@mui/material";
import Headers from "../../components/Headers";
const Form = () => {
  return (
    <Box m="20px">
      {/* Header */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Headers title="CREATE USER" subtitle="Create a New User Profile" />
      </Box>
    </Box>
  );
};

export default Form;

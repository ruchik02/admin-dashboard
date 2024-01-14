import React from "react";
import { Box } from "@mui/material";
import Headers from "../../components/Headers";
const Faq = () => {
  return (
    <Box m="20px">
      {/* Header */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Headers title="FAQ" subtitle="Frequently Asked Questions Page" />
      </Box>
    </Box>
  );
};

export default Faq;

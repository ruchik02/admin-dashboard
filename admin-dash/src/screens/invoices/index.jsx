import React from "react";
import { Box } from "@mui/material";
import Headers from "../../components/Headers";
const Invoice = () => {
  return (
    <Box m="20px">
      {/* Header */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Headers title="INVOICES" subtitle="List of Invoice Balances" />
      </Box>
    </Box>
  );
};

export default Invoice;

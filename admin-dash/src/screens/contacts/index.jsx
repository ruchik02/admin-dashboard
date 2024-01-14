import React from "react";
import { Box } from "@mui/material";
import Headers from "../../components/Headers";
const Contacts = () => {
  return (
    <Box m="20px">
      {/* Header */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Headers
          title="CONTACTS"
          subtitle="List of Contacts for Future Reference"
        />
      </Box>
    </Box>
  );
};

export default Contacts;

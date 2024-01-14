import Topbar from "./screens/global/Topbar";
import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./screens/dashboard";
import Contacts from "./screens/contacts";
import Bar from "./screens/bar";
import Team from "./screens/team";
import Calendar from "./screens/calendar";
import Faq from "./screens/faq";
import Geography from "./screens/geography";
import Pie from "./screens/pie";
import Line from "./screens/line";
import Invoice from "./screens/invoices";
import Form from "./screens/form";
import Sidebar from "./screens/global/Sidebar";

function App() {
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar/>
          <main className="content">
            <Topbar />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/team" element={<Team />} />
              <Route path="/invoices" element={<Invoice />} />
              <Route path="/bar" element={<Bar />} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/faq" element={<Faq />} />
              <Route path="/form" element={<Form />} />
              <Route path="/geography" element={<Geography />} />
              <Route path="/line" element={<Line />} />
              <Route path="/pie" element={<Pie />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;

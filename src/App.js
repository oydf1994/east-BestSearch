import Header from "./layout/Header"
import Box from "@mui/material/Box";
import Home from './view/Home'
import Search from './view/Search'
import { Routes, Route } from 'react-router-dom'
function App() {
  return (
    <Box sx={
      {
        background: "rgb(251,247,236)",
        minHeight: "100vh"
      }
    }>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search/:keyword" element={<Search />} />
      </Routes>
    </Box>
  );
}

export default App;

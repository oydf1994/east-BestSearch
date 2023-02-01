import Box from "@mui/material/Box";
import { useEffect } from "react";
import Input from "../component/Input";
import store from "../utils/store";
import { setValue as setV } from "../utils/actionCreators";
function Home() {
  useEffect(() => {
    store.dispatch(setV(''));
  }, []);
  return (
    <Box
      sx={{
        marginTop: "200px",
      }}
    >
      <Box sx={{ fontSize: "28px", textAlign: "center" }}>Search Trends</Box>
      <Input marginTop="100px"></Input>
    </Box>
  );
}

export default Home;

import Box from "@mui/material/Box";
import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Input from "../component/Input";
import store from "../utils/store";
import { switchShow } from "../utils/actionCreators";
function Header() {
  let navigate = useNavigate();
  let location = useLocation();
  const [isShow, setShow] = useState(false);
  store.subscribe(() => {
    const show = store.getState().show;
    setShow(show);
  });
  useEffect(() => {
    store.dispatch(switchShow(location.pathname !== "/"));
  }, [location]);
  return (
    <Box
      sx={{
        display: "flex",
        padding: "10px",
        borderBottom: "1px solid #000",
        alignItems: "center",
      }}
    >
      <Box
        onClick={() => {
          navigate("/");
        }}
        sx={{
          cursor: "pointer",
        }}
      >
        <span style={{ fontWeight: 900 }}>Best</span>
        <span>Search</span>
      </Box>
      {isShow && <Input type="header"></Input>}
    </Box>
  );
}

export default Header;

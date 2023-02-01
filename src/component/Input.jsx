import IconButton from "@mui/material/IconButton";
import { Search } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import { useState, useEffect } from "react";
import store from "../utils/store";
import { setValue as setV } from "../utils/actionCreators";
const Input = (props) => {
  const [value, setValue] = useState("");
  useEffect(() => {
    setValue(store.getState().value);
    store.subscribe(() => {
      const data = store.getState().value;
      setValue(data);
    });
  }, []);
  let navigate = useNavigate();
  const enter = (e) => {
    if (e.key === "Enter") {
      store.dispatch(setV(value));
      navigate(`/search/${value.replace(/\s+/g, "+")}`);
    }
  };
  const isType = (type) => {
    if (type === "header") {
      return {
        marginLeft: "30px",
      };
    } else {
      return {
        justifyContent: "center",
      };
    }
  };
  return (
    <Box
      sx={{
        display: "flex",
        ...isType(props.type),
        marginTop: props.marginTop,
      }}
    >
      <input
        type="text"
        placeholder="Search for new products in 961K stores"
        onKeyDown={enter}
        onChange={(e) => {
          setValue(e.target.value);
        }}
        defaultValue={value}
        style={{
          width: "800px",
          outline: "none",
          paddingLeft: "10px",
        }}
      />
      <Box
        sx={{ marginLeft: "10px", border: "1px solid #ccc", padding: "2px" }}
      >
        <IconButton
          onClick={() => {
            store.dispatch(setV(value));
            navigate(`/search/${value.replace(/\s+/g, "+")}`);
          }}
        >
          <Search />
        </IconButton>
      </Box>
    </Box>
  );
};
export default Input;

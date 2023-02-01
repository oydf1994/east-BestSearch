import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { useEffect, useState } from "react";
import Skeletons from "../component/Skeletons";
import store from "../utils/store";
import { useParams } from "react-router-dom";
import { getList, setValue } from "../utils/actionCreators";
import { Chart, Area, Line, Tooltip } from "bizcharts";
function Search() {
  const [list, setList] = useState([]);
  let params = useParams();
  const scale = {
    sv: {
      min: 1,
      nice: true,
    },
  };
  useEffect(() => {
    setList([]);
    store.dispatch(setValue(params.keyword.replace(/\+/g, " ")));
    getList({
      search_phrase: params.keyword,
      login_token: "INTERVIEW_SIMPLY2021",
    }).then((res) => {
      store.dispatch(res);
    });
    store.subscribe(() => {
      const data = store.getState().list;
      setTimeout(() => setList(data), 200);
    });
  }, [params]);

  return (
    <Box
      sx={{
        width: "100%",
      }}
    >
      <Box sx={{ width: "1380px", margin: "0 auto" }}>
        <p>Related product trends</p>
        <Grid container>
          {list.length === 0 ? (
            <Skeletons></Skeletons>
          ) : (
            <Grid container>
              {list.map((i, index) => (
                <Grid item xs={3} key={index}>
                  <Chart
                    scale={scale}
                    height={400}
                    data={i.search_msv}
                    autoFit
                    padding={[50, 50]}
                  >
                    <Tooltip shared />
                    <Area position="date*sv" />
                    <Line position="date*sv" />
                  </Chart>
                </Grid>
              ))}
            </Grid>
          )}
        </Grid>
      </Box>
    </Box>
  );
}

export default Search;

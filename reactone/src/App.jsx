import Header from "./components/Header/Header";
import List from "./components/List/List";
// import Map from "./components/Map/Map";
import Map1 from "./components/Map/Map1";

// import PlaceDetails from "./components/PlaceDetails/PlaceDetails";
import './App.css';

import {CssBaseline, Grid} from '@material-ui/core';



export default function App() {
  return (
      <>
          <CssBaseline />
          <Header />
          <Grid container spacing={3} style={{ width: "100%" }}>
              <Grid item xs={12} md={4}>
                  <List />
              </Grid>
              <Grid item xs={12} md={8}>
                  {/* <Map /> */}
                  <Map1 />
              </Grid>
          </Grid>
      </>
  );
}

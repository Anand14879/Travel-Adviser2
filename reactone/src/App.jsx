import Header from "./components/Header/Header";
import List from "./components/List/List";
import Map1 from "./components/Map/Map1";
// import Map from "./components/Map/Map";
import { getPlacesData } from "./api/index.jsx";
// import PlaceDetails from "./components/PlaceDetails/PlaceDetails";
import "./App.css";
import { useEffect, useState } from "react";

import { CssBaseline, Grid } from "@material-ui/core";

export default function App() {
    const [places, setPlaces] = useState([]);

    const [coordinates, setCoordinates] = useState({});
    const [bounds, setBounds] = useState(null);
    useEffect(() => {
        navigator.geolocation.getCurrentPosition(
            ({ coords: { latitude, longitude } }) => {
                console.log(latitude, longitude);
                setCoordinates({ lat: latitude, lng: longitude });
            }
        );
    }, []);

    // useEffect(() => {
    //     getPlacesData(bounds.sw, bounds.ne).then((data) => {
    //         console.log(data);
    //         setPlaces(data);
    //     });
    // }, [coordinates, bounds]);

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
                    <Map1
                        setCoordinates={setCoordinates}
                        setBounds={setBounds}
                        coordinates={coordinates}
                    />
                </Grid>
            </Grid>
        </>
    );
}

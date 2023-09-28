import React, { useEffect } from "react";
import GoogleMapReact from "google-map-react";
import { Paper, Typography, useMediaQuery } from "@material-ui/core";
import useStyles from "./Styles";
import axios from "axios"; // Import Axios

const options = {
    method: "GET",
    url: "https://google-maps-data1.p.rapidapi.com/gmaps",
    params: {
        keyword: "hotel",
        latitude: "51.5286416",
        longitude: "-0.1015987",
        maxResults: "20",
        zoom: "15",
    },
    headers: {
        "X-RapidAPI-Key": "b3e4074ba3msh966be876c641019p1e0c46jsne3135f8d91c1",
        "X-RapidAPI-Host": "google-maps-data1.p.rapidapi.com",
    },
};

const Map = () => {
    const classes = useStyles();
    const isMobile = useMediaQuery("(min-width:600px)");
    const coordinates = { lat: 0, lng: 0 };
    const [maps,setMaps] = useState();
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.request(options);
                console.log(response.data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchData(); // Call the fetchData function in the useEffect
    }, []); // Empty dependency array to run the effect only once

    return (
        // <div className={classes.mapContainer}>
        //     <GoogleMapReact
        //         bootstrapURLKeys={{
        //             key: "YOUR_GOOGLE_MAPS_API_KEY", // Replace with your Google Maps API key
        //         }}
        //         defaultCenter={coordinates}
        //         center={coordinates}
        //         defaultZoom={14}
        //         margin={[50, 50, 50, 50]}
        //         options={""}
        //         onChange={""}
        //         onChildClick={""}
        //     ></GoogleMapReact>
        // </div>
    );
};

export default Map;

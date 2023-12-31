import {
    CircularProgress,
    Grid,
    Typography,
    InputLabel,
    MenuItem,
    FormControl,
    Select,
} from "@material-ui/core";

import useStyles from "./Styles.js";
import { useState } from "react";
import PlaceDetails from "../PlaceDetails/PlaceDetails";

const List = () => {
    const classes = useStyles();
    const [type, setType] = useState("restaurants");
    const [rating, setRating] = useState("3");
    const places = [
        { name: "Cool Place" },
        { name: "Best Beer" },
        { name: "Best Steak" },
        { name: "Best Chips" },
        { name: "Best Burger" },
        { name: "Best Temple" },
        { name: "Best Night" },
        { name: "Best Drink" },
        { name: "Best Lover" },
    ];

    return (
        <div className={classes.container}>
            <Typography variant="h4">
                Restaurants, Hotels and Attractions
            </Typography>
            <FormControl className={classes.formControl}>
                <InputLabel>Type</InputLabel>
                <Select
                    value={type}
                    onChange={(e) => {
                        setType(e.target.value);
                    }}
                >
                    <MenuItem value="restaurants">Restaurants</MenuItem>
                    <MenuItem value="hotels">Hotels</MenuItem>
                    <MenuItem value="attractions">Attractions</MenuItem>
                </Select>
            </FormControl>

            <FormControl className={classes.formControl}>
                <InputLabel>Rating</InputLabel>
                <Select
                    value={rating}
                    onChange={(e) => {
                        setRating(e.target.value);
                    }}
                >
                    <MenuItem value={0}>All </MenuItem>
                    <MenuItem value={3}>Above 3.0</MenuItem>
                    <MenuItem value={4}>Above 4.0</MenuItem>
                    <MenuItem value={4.5}>Above 4.5</MenuItem>
                </Select>
            </FormControl>
            <Grid container spacing={3} className={classes.list}>
                {places?.map((place, index) => (
                    <Grid item key={index} xs={12}>
                        <PlaceDetails place={place} />
                    </Grid>
                ))}
            </Grid>
        </div>
    );
};
export default List;

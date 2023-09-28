import axios from "axios";

const URL =
    "https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary";

export const getPlacesData = async () => {
    try {
        //request
        const {
            data: { data },
        } = await axios.get(URL, {
            params: {
                bl_latitude: "11.847676",
                tr_latitude: "12.838442",
                bl_longitude: "109.095887",
                tr_longitude: "109.149359",
            },
            headers: {
                "X-RapidAPI-Key":
                    "b3e4074ba3msh966be876c641019p1e0c46jsne3135f8d91c1",
                "X-RapidAPI-Host": "travel-advisor.p.rapidapi.com",
            },
        });
        return data;
    } catch (error) {
        console.log(error);
    }
};

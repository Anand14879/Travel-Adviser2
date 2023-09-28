import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css"; // Import leaflet.css for styling

export default function Map(props) {
    return (
        <div id="map">
            <h1>MAP</h1>
            <MapContainer
                center={props.coordinates}
                zoom={20}
                scrollWheelZoom={true}
                style={{ height: "500px", width: "100%" }}
                onMoveend={(e) => {
                    const map = e.target;
                    const center = map.getCenter();
                    props.setCoordinates([center.lat, center.lng]);
                }}
            >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
            </MapContainer>
        </div>
    );
}

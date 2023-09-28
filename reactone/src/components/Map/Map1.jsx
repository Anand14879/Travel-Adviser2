
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css"; // Import leaflet.css for styling

export default function Map1() {
    return (
        <div id="map">
            <h1>MAP</h1>
            <MapContainer
                center={[27.7172, 85.324]}
                zoom={20}
                scrollWheelZoom={true}
                style={{ height: "500px", width: "100%" }} // Set a fixed height and width
            >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[27.7172, 85.324]}>
                    <Popup>
                        A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                </Marker>
            </MapContainer>
        </div>
    );
}

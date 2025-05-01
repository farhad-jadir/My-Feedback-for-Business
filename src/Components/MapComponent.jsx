import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "400px",
};

export default function MapComponent({ location }) {
  const center = location ? location : { lat: 1.3521, lng: 103.8198 }; // Default: Singapore

  return (
    <LoadScript googleMapsApiKey="AIzaSyDF6L-rt0a86BI0pKb4QeRlcPkG8USxkTM">
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={14}>
        {location && <Marker position={location} />}
      </GoogleMap>
    </LoadScript>
  );
}

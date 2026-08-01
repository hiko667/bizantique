import { useState, useEffect } from "react";
import { MapContainer, ImageOverlay, Marker, useMap, Polygon, useMapEvents } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import markers from "../data/markers.json"
import regions from "../data/regions.json"
import { Image, Offcanvas } from "react-bootstrap";

function LogClickCoords() {
    useMapEvents({
        click: (e) => {
            console.log(`[${e.latlng.lat}, ${e.latlng.lng}],`);
        },
    });
    return null;
}

const width = 2000;
const height = 1500;

const bounds = [
    [0, 0],
    [height, width],
];

function FitBoundsOnce({ bounds }) {
    const map = useMap();
    useEffect(() => {
        map.setMinZoom(map.getBoundsZoom(bounds, true));
    }, [map, bounds]);
    return null;
}

const markerIcon = new L.Icon({
    iconUrl: "Marker.png",
    iconSize: [64, 64],
    iconAnchor: [32, 64],
    popupAnchor: [0, -64],
});

export default function MapPage() {
    const [selectedLocation, setSelectedLocation] = useState({name : "", description : "", img : ""});
    const [isOffCanvasShowing, setIsOffCanvasShowing] = useState(false);
    const handleClose = () => setIsOffCanvasShowing(false)
    return (
        <>
            <div style={{ width: "100vw", height: "100%" }} className="overflow-hidden">
                <Offcanvas className = "bg-dark text-light" show={isOffCanvasShowing} onHide={handleClose}>
                    <Offcanvas.Header closeButton>
                    <Offcanvas.Title>{selectedLocation.name}</Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <div className="overflow-auto text-light">
                            <div className="d-flex justify-content-center">
                                <Image src={selectedLocation.img} thumbnail fluid/>
                            </div>
                            <p className="py-3">{selectedLocation.description}</p>
                        </div>
                    </Offcanvas.Body>
                </Offcanvas>
                <MapContainer 
                    crs={L.CRS.Simple}
                    bounds={bounds}
                    maxBounds={bounds}
                    maxBoundsViscosity={1.0}
                    maxZoom={1}
                    minZoom={-2}
                    attributionControl={false}
                    style={{ height: '100%', width: '100%' }}
                >
                    <LogClickCoords />
                    <FitBoundsOnce bounds={bounds} />
                    <ImageOverlay url= "/Bizantique.jpg" bounds={bounds} />
                    {markers.map((m) => (
                            <Marker
                                key={m.id}
                                position={[m.y, m.x]}
                                icon={markerIcon}
                                eventHandlers={{
                                    click: () => {
                                        setSelectedLocation(m)
                                        setIsOffCanvasShowing(true);
                                    },

                                }}
                            />
                        ))}

                    {regions.map((region) => (
                            <Polygon
                                key={region.id}
                                positions={region.coordinates}
                                pathOptions={{
                                    color: region.color,
                                    weight: 0,
                                    fillOpacity: 0.0,
                                }}
                                eventHandlers={{
                                    click: () => {
                                        setSelectedLocation(region)
                                        setIsOffCanvasShowing(true);
                                    },
                                    mouseover: (e) => e.target.setStyle({ fillOpacity: 0.25 }),
                                    mouseout: (e) => e.target.setStyle({ fillOpacity: 0.0 }),
                                }}
                            />
                        ))}
                </MapContainer>
            </div>
        </>
    );
}
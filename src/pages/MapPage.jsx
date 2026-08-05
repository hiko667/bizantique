import { useState, useEffect } from "react";
import { MapContainer, ImageOverlay, Marker, useMap, Polygon, useMapEvents } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

import cityMarkers from "../data/markers.json";
import cityRegions from "../data/regions.json";
import seaMarkers from "../data/seaMarkers.json";
import seaRegions from "../data/seaRegions.json";
import worldMarkers from "../data/worldMarkers.json";
import worldRegions from "../data/worldRegions.json";

import { Form, Image, Offcanvas } from "react-bootstrap";

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
    const [selectedLocation, setSelectedLocation] = useState({ name: "", description: "", img: "" });
    const [isOffCanvasShowing, setIsOffCanvasShowing] = useState(false);
    
    const [layer, setLayer] = useState("city");

    const handleClose = () => setIsOffCanvasShowing(false);

    const activeMapImage = 
        layer === "city" 
            ? "/Bizantique.jpg" 
            : layer === "sea" 
            ? "/BizantiqueSea.jpg" 
            : "/Ignis.webp";

    const activeMarkers = 
        layer === "city" 
            ? cityMarkers 
            : layer === "sea" 
            ? seaMarkers 
            : worldMarkers;

    const activeRegions = 
        layer === "city" 
            ? cityRegions 
            : layer === "sea" 
            ? seaRegions 
            : worldRegions;

    return (
        <>
            <div style={{ width: "100vw", height: "100%" }} className="overflow-hidden">
                <Offcanvas className="bg-dark text-light" show={isOffCanvasShowing} onHide={handleClose}>
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title>{selectedLocation.name}</Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <div className="overflow-auto text-light">
                            <div className="d-flex justify-content-center">
                                <Image src={selectedLocation.img} thumbnail fluid />
                            </div>
                            <p className="py-3">{selectedLocation.description}</p>
                        </div>
                    </Offcanvas.Body>
                </Offcanvas>
                <div 
                    className="bg-dark text-white p-3 rounded" 
                    style={{
                        width: "fit-content", 
                        height: "fit-content", 
                        position: "absolute", 
                        bottom: "10px", 
                        left: "10px", 
                        zIndex: 1000
                    }}
                >
                    <Form>
                        <Form.Group>
                            <Form.Label>Warstwa</Form.Label>
                            <Form.Check 
                                type="radio" 
                                label="Bizantique - Miasto" 
                                name="layerGroup"
                                checked={layer === "city"}
                                onChange={() => setLayer("city")}
                            />
                            <Form.Check 
                                type="radio" 
                                label="Bizantique - Morze Siarki" 
                                name="layerGroup"
                                checked={layer === "sea"}
                                onChange={() => setLayer("sea")}
                            />
                            <Form.Check 
                                type="radio" 
                                label="Świat" 
                                name="layerGroup"
                                checked={layer === "world"}
                                onChange={() => setLayer("world")}
                            />
                        </Form.Group>
                    </Form>
                </div>
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
                    <ImageOverlay url={activeMapImage} bounds={bounds} />
                    {activeMarkers.map((m) => (
                        <Marker
                            key={m.id}
                            position={[m.y, m.x]}
                            icon={markerIcon}
                            eventHandlers={{
                                click: () => {
                                    setSelectedLocation(m);
                                    setIsOffCanvasShowing(true);
                                },
                            }}
                        />
                    ))}

                    {activeRegions.map((region) => (
                        <Polygon
                            key={region.id}
                            positions={region.coordinates}
                            pathOptions={{
                                color: region.color,
                                weight: 0,
                                fillOpacity: 0.1,
                            }}
                            eventHandlers={{
                                click: () => {
                                    setSelectedLocation(region);
                                    setIsOffCanvasShowing(true);
                                },
                                mouseover: (e) => e.target.setStyle({ fillOpacity: 0.5 }),
                                mouseout: (e) => e.target.setStyle({ fillOpacity: 0.1 }),
                            }}
                        />
                    ))}
                </MapContainer>
            </div>
        </>
    );
}
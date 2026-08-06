import ForceGraph2D from "react-force-graph-2d";
import data from "../data/factions.json";
import FactionModal from "../components/FactionModal";
import { useState, useCallback } from "react";

const nodes = data.map(faction => ({
    id: faction.id,
    name: faction.name,
    img: faction.img,
    short_description: faction.short_description,
    description: faction.description
}));

const links = data.flatMap(faction =>
    faction.relations.map(rel => ({
        source: faction.id,
        target: rel.faction_id,
        label: rel.relation
    }))
);

const gData = { nodes, links };

export default function FactionsPage() {
    const [currentFaction, setCurrentFaction] = useState(null);
    const [showFactionModal, setShowFactionModal] = useState(false);

    const handleNodeClick = useCallback((node, e) => {
        setCurrentFaction(node);
        console.log(node)
        setCurrentFaction(node)
        setShowFactionModal(true);
    }, []);

    const nodeCanvasObject = useCallback(({ img, x, y }, ctx) => {
        const size = 12;
        const imgSrc = img || "eye.png";
        const imageObj = new Image();
        imageObj.src = imgSrc;
        ctx.drawImage(
            imageObj,
            x - size / 2,
            y - size / 2,
            size,
            size
        );
    }, []);

    const linkCanvasObject = useCallback((link, ctx) => {
        const start = link.source;
        const end = link.target;
        if (typeof start !== 'object' || typeof end !== 'object') return;
        const textPos = {
            x: start.x + (end.x - start.x) / 2,
            y: start.y + (end.y - start.y) / 2
        };
        const fontSize = 4;
        ctx.font = `${fontSize}px Sans-Serif`;
        ctx.fillStyle = '#ffffff';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(link.label, textPos.x, textPos.y);
    }, []);

    return (
        <div className="w-100 h-100">
            <FactionModal show={showFactionModal} faction={currentFaction} onHide={() => setShowFactionModal(false)}/>
            <ForceGraph2D
                graphData={gData}
                nodeLabel="name"
                minZoom={10}
                linkColor={() => '#ffffff'}
                linkDirectionalParticles={10}
                linkDirectionalParticleSpeed={0.005}
                linkDirectionalParticleColor={() => '#ffffff'}
                linkDirectionalParticleWidth={2}
                onNodeClick={(node, event) => handleNodeClick(node, event)}
                nodeCanvasObject={nodeCanvasObject}
                linkCanvasObject={linkCanvasObject}
                linkCanvasObjectMode={() => 'after'}
            />
        </div>
    );
}
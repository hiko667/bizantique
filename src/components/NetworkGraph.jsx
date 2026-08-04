import React, { useMemo, useRef, useCallback, useState } from "react";
import ForceGraph3D from "react-force-graph-3d";
import SpriteText from "three-spritetext";
import InfoModal from "./InfoModal";


function toGraphData(items) {
    const idSet = new Set(items.map((i) => i.id));
    const nodes = items.map((item) => ({
        id: item.id,
        name: item.name,
        color: item.colorHex,
        description: item.description,
        img: item.img,
    }));
    const seen = new Set();
    const links = [];
    for (const item of items) {
        for (const targetId of item.connections || []) {
            if (!idSet.has(targetId)) continue;
            const key = [item.id, targetId].sort().join("::");
            if (seen.has(key)) continue;
            seen.add(key);
            links.push({ source: item.id, target: targetId });
        }
    }

    return { nodes, links };
}

export default function NetworkGraph3D({ data = [], height = "100%" }) {
    const fgRef = useRef();
    const [hoverNode, setHoverNode] = useState(null);
    const [selectedNode, setSelectedNode] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const graphData = useMemo(() => toGraphData(data), [data]);

    const neighborIds = useMemo(() => {
        const active = hoverNode || selectedNode;
        if (!active || !active.id) return null;
        const set = new Set([active.id]);
        graphData.links.forEach((l) => {
            const s = typeof l.source === "object" ? l.source.id : l.source;
            const t = typeof l.target === "object" ? l.target.id : l.target;
            if (s === active.id) set.add(t);
            if (t === active.id) set.add(s);
        });
        return set;
    }, [hoverNode, selectedNode, graphData.links]);

    const handleNodeClick = useCallback((node) => {
        setSelectedNode(node);
        setShowModal(true);
        if (fgRef.current) {
            const distance = 120;
            const ratio = 1 + distance / Math.hypot(node.x, node.y, node.z || 1);
            fgRef.current.cameraPosition(
                { x: node.x * ratio, y: node.y * ratio, z: node.z * ratio },
                node,
                1000
            );
        }
    }, []);

    const nodeThreeObject = useCallback(
        (node) => {
            const isDimmed = neighborIds && !neighborIds.has(node.id);
            const sprite = new SpriteText(node.name);
            sprite.color = isDimmed ? "gray" : "#ffffff";
            sprite.textHeight = 4;
            sprite.backgroundColor = "rgba(0,0,0,0.55)";
            sprite.padding = 1.5;
            sprite.borderRadius = 2;
            sprite.position.set(0, 12, 0);
            return sprite;
        },
        [neighborIds]
    );

    return (
        <div style={{ position: "relative", width: "100vw", height }}>
            <InfoModal show={showModal} data = {selectedNode} closeModal={() => setShowModal(false)}/>
            <ForceGraph3D
                ref={fgRef}
                graphData={graphData}
                nodeId="id"
                nodeLabel={(node) => `${node.name}`}
                nodeColor={(node) =>
                    neighborIds && !neighborIds.has(node.id) ? "gray" : node.color
                }
                nodeThreeObjectExtend={true}
                nodeThreeObject={nodeThreeObject}
                onNodeDragEnd={node => {
                    node.fx = node.x;
                    node.fy = node.y;
                    node.fz = node.z;
                }}
                nodeVal={3}
                nodeOpacity={1}
                linkWidth={(link) => {
                    const active = hoverNode || selectedNode;
                    if (!neighborIds || !active || !active.id) return 1;
                    const s = typeof link.source === "object" ? link.source.id : link.source;
                    const t = typeof link.target === "object" ? link.target.id : link.target;
                    return s === active.id || t === active.id ? 2 : 0.5;
                }}
                linkOpacity={0.4}
                onNodeHover={setHoverNode}
                onNodeClick={handleNodeClick}
                onBackgroundClick={() => {
                    setSelectedNode(null);
                    setShowModal(false);
                }}
            />
            {hoverNode && (
                <div
                    className="bg-dark p-3 z-1000 rounded border border-dark text-light"
                    style={{
                        position: "absolute",
                        top: 16,
                        left: 16,
                    }}
                >
                    <div>
                        <strong>{hoverNode.name}</strong>
                        <div style={{ opacity: 0.6 }}>
                            Naciśnij węzeł by dowiedzieć się więcej
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
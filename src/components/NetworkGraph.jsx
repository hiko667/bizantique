import React, { useMemo, useRef, useCallback, useState } from "react";
import ForceGraph3D from "react-force-graph-3d";


function toGraphData(items) {
    const idSet = new Set(items.map((i) => i.id));
    const nodes = items.map((item) => ({
        id: item.id,
        name: item.name,
        color: item.colorHex,
        description : item.description,
    }));

    // Budujemy krawędzie i usuwamy duplikaty (A->B oraz B->A traktujemy jako jedną krawędź)
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

    const graphData = useMemo(() => toGraphData(data), [data]);

    const neighborIds = useMemo(() => {
        const active = hoverNode || selectedNode;
        if (!active) return null;
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

    return (
        <div style={{ position: "relative", width: "100vw", height }}>
            <ForceGraph3D
                ref={fgRef}
                graphData={graphData}
                nodeId="id"
                nodeLabel={(node) => `${node.name}`}
                nodeColor={(node) =>
                    neighborIds && !neighborIds.has(node.id) ? "gray" : node.color
                }
                nodeVal={1}
                linkWidth={(link) => {
                    if (!neighborIds) return 1;
                    const s = typeof link.source === "object" ? link.source.id : link.source;
                    const t = typeof link.target === "object" ? link.target.id : link.target;
                    const active = hoverNode || selectedNode;
                    return s === active.id || t === active.id ? 2 : 0.5;
                }}
                onNodeHover={setHoverNode}
                onNodeClick={handleNodeClick}
                onBackgroundClick={() => setSelectedNode(null)}
            />
            {(hoverNode || selectedNode) && 
            <div
            className="bg-dark p-3 z-1000 rounded border border-dark text-light"
                style={{
                    position: "absolute",
                    top: 16,
                    left: 16,
                }}
            >
                <div style={{ opacity: 0.6, marginBottom: 4 }}>
                    Wybierz węzeł 
                </div>
                {(hoverNode || selectedNode) && (
                    <div>
                        <strong>{(hoverNode || selectedNode).name}</strong>
                        <div style={{ opacity: 0.6 }}>
                            <p>{(hoverNode || selectedNode).description}</p>
                        </div>
                    </div>
                )}
            </div>
            }
        </div>
    );
}
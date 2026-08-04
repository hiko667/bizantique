import ForceGraph2D from "react-force-graph-2d";

export default function FactionsPage() {
    const imgs = ['eye.png', 'eye.jpg'];

    const gData = {
        nodes: imgs.map((img, id) => ({ id, img })),
        links: [...Array(imgs.length).keys()]
            .filter(id => id)
            .map(id => ({
                source: id,
                target: Math.round(Math.random() * (id - 1)),
                label: `Krawędź ${id}`
            }))
    };

    return (
        <ForceGraph2D
            graphData={gData}
            nodeCanvasObject={({ img, x, y }, ctx) => {
                const size = 12;
                const imageObj = new Image();
                imageObj.src = `${img}`;

                ctx.drawImage(
                    imageObj,
                    x - size / 2,
                    y - size / 2,
                    size,
                    size
                );
            }}
            linkCanvasObject={(link, ctx) => {
                const start = link.source;
                const end = link.target;

                if (typeof start !== 'object' || typeof end !== 'object') return;

                const textPos = {
                    x: start.x + (end.x - start.x) / 2,
                    y: start.y + (end.y - start.y) / 2
                };

                const fontSize = 3;
                ctx.font = `${fontSize}px Sans-Serif`;
                ctx.fillStyle = 'black';
                ctx.textAlign = 'center';
                ctx.textBaseline = 'middle';
                ctx.fillText(link.label, textPos.x, textPos.y);
            }}
            linkCanvasObjectMode={() => 'after'}
        />
    );
}
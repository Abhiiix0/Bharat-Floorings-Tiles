import { Tile, TileProperties } from "../store/floor.store";
import { createCanvas, loadImage } from "canvas";

// svg manupulation
export const addDataConnectToSvg = (
  svgString: string,
  height: number,
  width: number,
  rotation: number,
  colors: { [id: number]: string }
) => {
  const parser = new DOMParser();
  const doc = parser.parseFromString(svgString, "image/svg+xml");
  const svg = doc.querySelector("svg");

  // Set the height and width attributes
  if (svg) {
    svg.setAttribute("height", height.toString());
    svg.setAttribute("width", width.toString());
    svg.setAttribute("style", `transform: rotate(${rotation}deg);`);
  }

  if (!svg) {
    throw new Error("Invalid SVG");
  }

  const elements = svg.querySelectorAll("[fill]");
  const colorMap = new Map();
  let idCounter = 1;

  elements.forEach((element) => {
    const fill = element.getAttribute("fill");
    if (!colorMap.has(fill)) {
      colorMap.set(fill, idCounter++);
    }

    const dataConnectId = colorMap.get(fill);

    element.setAttribute("data-connect", dataConnectId);

    if (colors[dataConnectId]) {
      element.setAttribute("fill", colors[dataConnectId]);
    }
  });

  return new XMLSerializer().serializeToString(svg);
};

// canvas gridlayout
function getInnerTiles(
  gridLayout: (TileProperties | {})[][]
): TileProperties[][] {
  const innerTiles: TileProperties[][] = [];

  const rows = gridLayout.length;
  const cols = gridLayout[0].length;

  console.log("gridLayout.length", gridLayout.length);
  console.log("gridLayout[0].length", gridLayout[0].length);

  for (let i = 1; i < rows - 1; i++) {
    const row: TileProperties[] = [];
    for (let j = 1; j < cols - 1; j++) {
      if (gridLayout[i][j]) {
        row.push(gridLayout[i][j] as TileProperties);
      }
    }
    innerTiles.push(row);
  }

  return innerTiles;
}

export async function createPngFromGridLayout(
  gridLayout: (TileProperties | {})[][],
  tileWidth: number,
  tileHeight: number
): Promise<string> {
  const innerTiles = getInnerTiles(gridLayout);

  // Assuming each tile is the same size (width and height)
  // const tileWidth = 100; // Example tile width
  // const tileHeight = 100; // Example tile height

  // Calculate the canvas size based on the number of inner tiles
  const canvasWidth = innerTiles[0].length * tileWidth;
  const canvasHeight = innerTiles.length * tileHeight;

  console.log("canvasWidth", innerTiles[0].length);
  console.log("canvasHeight", innerTiles.length);

  const canvas = document.createElement("canvas");
  canvas.width = canvasWidth;
  canvas.height = canvasHeight;
  const ctx = canvas.getContext("2d");

  if (ctx) {
    // Draw each inner tile on the canvas
    innerTiles.forEach((row, rowIndex) => {
      row.forEach((tile, colIndex) => {
        const x = colIndex * tileWidth;
        const y = rowIndex * tileHeight;

        const img = new Image();

        const modifiedSvgString = addDataConnectToSvg(
          tile.svgString,
          tile.height,
          tile.width,
          tile.rotation,
          tile.color
        );

        img.src = `data:image/svg+xml;base64,${btoa(modifiedSvgString)}`;

        img.onload = () => {
          // Save the current context state
          ctx.save();
          // Move the context origin to the tile's position
          ctx.translate(x + tileWidth / 2, y + tileHeight / 2);
          // Rotate the context
          ctx.rotate((tile.rotation * Math.PI) / 180);
          // Draw the image centered at the origin
          ctx.drawImage(
            img,
            -tileWidth / 2,
            -tileHeight / 2,
            tileWidth,
            tileHeight
          );
          // Restore the context state
          ctx.restore();
        };
      });
    });

    // Wait for all images to load before returning the PNG
    await Promise.all(
      innerTiles.flat().map(
        (tile) =>
          new Promise((resolve) => {
            const img = new Image();
            img.src = `data:image/svg+xml;base64,${btoa(tile.svgString)}`;
            img.onload = resolve;
          })
      )
    );

    return canvas.toDataURL("image/png");
  }

  throw new Error("Canvas rendering context is not available");
}

// filtering out the border tiles
// function getInnerTiles(
//   gridLayout: (TileProperties | {})[][]
// ): TileProperties[] {
//   const innerTiles: TileProperties[] = [];

//   const rows = gridLayout.length;
//   const cols = gridLayout[0].length;

//   for (let i = 1; i < rows - 1; i++) {
//     for (let j = 1; j < cols - 1; j++) {
//       if (gridLayout[i][j]) {
//         innerTiles.push(gridLayout[i][j] as TileProperties);
//       }
//     }
//   }

//   return innerTiles;
// }

// export async function createPngFromGridLayout(
//   gridLayout: (TileProperties | {})[][]
// ): Promise<string> {
//   const innerTiles = getInnerTiles(gridLayout);

//   // Assuming each tile is the same size (width and height)
//   const tileWidth = 100; // Example tile width
//   const tileHeight = 100; // Example tile height

//   // Calculate the canvas size based on the number of inner tiles
//   const canvasWidth = (gridLayout[0].length - 2) * tileWidth;
//   const canvasHeight = (gridLayout.length - 2) * tileHeight;

//   const canvas = document.createElement("canvas");
//   canvas.width = canvasWidth;
//   canvas.height = canvasHeight;
//   const ctx = canvas.getContext("2d");

//   if (ctx) {
//     // Draw each inner tile on the canvas
//     innerTiles.forEach((tile, index) => {
//       const x = (index % (gridLayout[0].length - 2)) * tileWidth;
//       const y = Math.floor(index / (gridLayout[0].length - 2)) * tileHeight;

//       const img = new Image();
//       img.src = `data:image/svg+xml;base64,${btoa(tile.svgString)}`;

//       img.onload = () => {
//         // Save the current context state
//         ctx.save();
//         // Move the context origin to the tile's position
//         ctx.translate(x + tileWidth / 2, y + tileHeight / 2);
//         // Rotate the context
//         ctx.rotate((tile.rotation * Math.PI) / 180);
//         // Draw the image centered at the origin
//         ctx.drawImage(
//           img,
//           -tileWidth / 2,
//           -tileHeight / 2,
//           tileWidth,
//           tileHeight
//         );
//         // Restore the context state
//         ctx.restore();
//       };
//     });

//     // Wait for all images to load before returning the PNG
//     await Promise.all(
//       innerTiles.map(
//         (tile) =>
//           new Promise((resolve) => {
//             const img = new Image();
//             img.src = `data:image/svg+xml;base64,${btoa(tile.svgString)}`;
//             img.onload = resolve;
//           })
//       )
//     );

//     return canvas.toDataURL("image/png");
//   }

//   throw new Error("Canvas rendering context is not available");
// }

// canvas
const cornerTileCanvas = async (
  svgString: string,
  width: number,
  height: number,
  rotation: number,
  color: { [id: number]: string }
) => {
  const canvas = createCanvas(width, height);

  const context = canvas.getContext("2d");
  const modifiedSvgString = addDataConnectToSvg(
    svgString,
    height,
    width,
    rotation,
    color
  );
  const img = await loadImage(
    `data:image/svg+xml;base64,${btoa(modifiedSvgString)}`
  );
  context.drawImage(img, 0, 0, width, height);

  return canvas;
};

const combineCornerTiles = async (
  svgString: string,
  width: number,
  height: number,
  tileSize: number,
  tile: Tile
) => {
  const cornerSize = tileSize / 2;

  const topLeftCanvas = await cornerTileCanvas(
    svgString,
    width,
    height,
    tile.topLeft.rotation,
    tile.topLeft.color
  );
  const topRightCanvas = await cornerTileCanvas(
    svgString,
    width,
    height,
    tile.topRight.rotation,
    tile.topRight.color
  );
  const bottomLeftCanvas = await cornerTileCanvas(
    svgString,
    width,
    height,
    tile.bottomLeft.rotation,
    tile.bottomRight.color
  );
  const bottomRightCanvas = await cornerTileCanvas(
    svgString,
    width,
    height,
    tile.bottomRight.rotation,
    tile.bottomRight.color
  );

  const tileCanvas = createCanvas(tileSize, tileSize);

  const context = tileCanvas.getContext("2d");

  context.drawImage(topLeftCanvas, 0, 0);
  context.drawImage(topRightCanvas, cornerSize, 0);
  context.drawImage(bottomLeftCanvas, 0, cornerSize);
  context.drawImage(bottomRightCanvas, cornerSize, cornerSize);

  return tileCanvas;
};

export const createMainFloorCanvas = async (
  svgString: string,
  tiles: Tile[],
  tileSize: number,
  gridSize: number,
  width: number,
  height: number
) => {
  const mainCanvasSize = gridSize * tileSize;

  const mainCanvas = createCanvas(mainCanvasSize, mainCanvasSize);

  const context = mainCanvas.getContext("2d");

  for (let i = 0; i < tiles.length; i++) {
    const row = Math.floor(i / gridSize);
    const col = i % gridSize;
    const tile = tiles[i];

    const tileCanvas = await combineCornerTiles(
      svgString,
      width,
      height,
      tileSize,
      tile
    );
    context.drawImage(tileCanvas, col * tileSize, row * tileSize);
  }

  return mainCanvas.toDataURL("image/png");
};

// SVG
const createCornerTileSvg = (
  svgString: string,
  width: number,
  height: number,
  rotation: number,
  color: { [id: number]: string }
) => {
  return addDataConnectToSvg(svgString, height, width, rotation, color);
};

const combineCornerTilesToSvg = (
  svgString: string,
  width: number,
  height: number,
  tileSize: number,
  tile: Tile
) => {
  const cornerSize = tileSize / 2;

  const topLeftSvg = createCornerTileSvg(
    svgString,
    width,
    height,
    tile.topLeft.rotation,
    tile.topLeft.color
  );
  const topRightSvg = createCornerTileSvg(
    svgString,
    width,
    height,
    tile.topRight.rotation,
    tile.topRight.color
  );
  const bottomLeftSvg = createCornerTileSvg(
    svgString,
    width,
    height,
    tile.bottomLeft.rotation,
    tile.bottomLeft.color
  );
  const bottomRightSvg = createCornerTileSvg(
    svgString,
    width,
    height,
    tile.bottomRight.rotation,
    tile.bottomRight.color
  );

  const parser = new DOMParser();
  const topLeftDoc = parser.parseFromString(topLeftSvg, "image/svg+xml");
  const topRightDoc = parser.parseFromString(topRightSvg, "image/svg+xml");
  const bottomLeftDoc = parser.parseFromString(bottomLeftSvg, "image/svg+xml");
  const bottomRightDoc = parser.parseFromString(
    bottomRightSvg,
    "image/svg+xml"
  );

  const combinedSvg = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "svg"
  );
  combinedSvg.setAttribute("width", tileSize.toString());
  combinedSvg.setAttribute("height", tileSize.toString());
  combinedSvg.setAttribute("viewBox", `0 0 106 106`);

  const appendChildrenFromDoc = (
    target: SVGElement,
    sourceDoc: Document,
    x: number,
    y: number,
    scale: number
  ) => {
    const g = document.createElementNS("http://www.w3.org/2000/svg", "g");
    g.setAttribute("transform", `translate(${x}, ${y}) scale(${scale})`);
    const childrenArray = Array.from(sourceDoc.documentElement.children);
    childrenArray.forEach((child) => {
      g.appendChild(child.cloneNode(true));
    });
    target.appendChild(g);
  };

  appendChildrenFromDoc(combinedSvg, topLeftDoc, 0, 0, 0.1);
  appendChildrenFromDoc(combinedSvg, topRightDoc, cornerSize, 0, 0.1);
  appendChildrenFromDoc(combinedSvg, bottomLeftDoc, 0, cornerSize, 0.1);
  appendChildrenFromDoc(
    combinedSvg,
    bottomRightDoc,
    cornerSize,
    cornerSize,
    0.1
  );

  console.log("combinedSvg.outerHTML", combinedSvg.outerHTML);

  return combinedSvg.outerHTML;
};

export const createMainFloorSvg = (
  svgString: string,
  tiles: Tile[],
  tileSize: number,
  gridSize: number,
  width: number,
  height: number
) => {
  const mainSvg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  const mainCanvasSize = gridSize * tileSize;
  mainSvg.setAttribute("width", mainCanvasSize.toString());
  mainSvg.setAttribute("height", mainCanvasSize.toString());
  mainSvg.setAttribute(
    "viewBox",
    `0 0 ${mainCanvasSize.toString()} ${mainCanvasSize.toString()}`
  );

  for (let i = 0; i < tiles.length; i++) {
    const row = Math.floor(i / gridSize);
    const col = i % gridSize;
    const tile = tiles[i];

    // 4 combined tiles
    const tileSvgString = combineCornerTilesToSvg(
      svgString,
      width,
      height,
      tileSize,
      tile
    );

    const parser = new DOMParser();
    const tileDoc = parser.parseFromString(tileSvgString, "image/svg+xml");
    const g = document.createElementNS("http://www.w3.org/2000/svg", "g");
    g.setAttribute(
      "transform",
      `translate(${col * tileSize}, ${row * tileSize})`
    );

    const childrenArray = Array.from(tileDoc.documentElement.children);
    childrenArray.forEach((child) => {
      g.appendChild(child.cloneNode(true));
    });
    mainSvg.appendChild(g);
  }

  return new XMLSerializer().serializeToString(mainSvg);
};

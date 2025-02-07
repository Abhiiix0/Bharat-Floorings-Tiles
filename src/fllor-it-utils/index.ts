import { Tile, TileProperties } from "../store/floor.store";
import { createCanvas, loadImage } from "canvas";
import grainsEffect from "../../public/images/tiles/grains.png"
// svg manupulation
export const addDataConnectToSvg = (
  svgString: string,
  height: number,
  width: number,
  rotation: number,
  colors: { [id: number]: string },
) => {
  console.log(svgString, height, width);
  const parser = new DOMParser();
  const doc = parser.parseFromString(svgString, "image/svg+xml");
  const svg = doc.querySelector("svg");

  if (!svg) {
    throw new Error("Invalid SVG");
  }

  // ✅ Set the height and width attributes
  svg.setAttribute("height", height.toString());
  svg.setAttribute("width", width.toString());
  svg.setAttribute("style", `transform: rotate(${rotation}deg);`);

  // ✅ Create a <defs> section for patterns if not exists
  let defs = svg.querySelector("defs");
  if (!defs) {
    defs = document.createElementNS("http://www.w3.org/2000/svg", "defs");
    svg.prepend(defs);
  }

  // ✅ Create a <pattern> for the grains effect
  const patternId = "grainTexture";
  const pattern = document.createElementNS("http://www.w3.org/2000/svg", "pattern");
  pattern.setAttribute("id", patternId);
  pattern.setAttribute("patternUnits", "objectBoundingBox"); // Ensures scaling
  pattern.setAttribute("width", "1"); // Adjust width and height for the grain texture
  pattern.setAttribute("height", "1");

  // ✅ Add the grains.png image inside the pattern
  const image = document.createElementNS("http://www.w3.org/2000/svg", "image");
  image.setAttribute("href", grainsEffect?.src); // Path or Base64 Data URL to grainsEffect.png
  image.setAttribute("x", "0");
  image.setAttribute("y", "0");
  image.setAttribute("width", "100%"); // Adjust to fit the element
  image.setAttribute("height", "100%");
  image.setAttribute("preserveAspectRatio", "xMidYMid slice"); // Ensure proper scaling
  image.setAttribute("opacity", "0.8"); // Adjust opacity for realism

  pattern.appendChild(image);
  defs.appendChild(pattern);

  // ✅ Overlay grain effect on the entire SVG
  let grainOverlay = svg.querySelector("#grainOverlay");
  if (!grainOverlay) {
    grainOverlay = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    grainOverlay.setAttribute("id", "grainOverlay");
    grainOverlay.setAttribute("x", "0");
    grainOverlay.setAttribute("y", "0");
    grainOverlay.setAttribute("width", "100%");
    grainOverlay.setAttribute("height", "100%");
    grainOverlay.setAttribute("fill", `url(#${patternId})`);
    grainOverlay.setAttribute("pointer-events", "none"); // Don't block interactions
    svg.appendChild(grainOverlay);
  }

  // ✅ Process each fillable element without breaking colors
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

export const addDataConnectToSvgWithGrainEffect = (
  svgString: string,
  height: number,
  width: number,
  rotation: number,
  colors: { [id: number]: string },
  grainsEffect:any
) => {
  console.log("tileData", svgString,
    height,
    width,
    rotation,
    colors,
    grainsEffect)
  const parser = new DOMParser();
  const doc = parser.parseFromString(svgString, "image/svg+xml");
  const svg = doc.querySelector("svg");

  if (!svg) {
    throw new Error("Invalid SVG");
  }

  // ✅ Set the height and width attributes
  svg.setAttribute("height", height.toString());
  svg.setAttribute("width", width.toString());
  svg.setAttribute("style", `transform: rotate(${rotation}deg);`);

  // ✅ Create a <defs> section for patterns if not exists
  let defs = svg.querySelector("defs");
  if (!defs) {
    defs = document.createElementNS("http://www.w3.org/2000/svg", "defs");
    svg.prepend(defs);
  }

  // ✅ Create a <pattern> for the grains effect
  const patternId = "grainTexture";
  const pattern = document.createElementNS("http://www.w3.org/2000/svg", "pattern");
  pattern.setAttribute("id", patternId);
  pattern.setAttribute("patternUnits", "objectBoundingBox"); // Ensures scaling
  pattern.setAttribute("width", "1"); // Adjust width and height for the grain texture
  pattern.setAttribute("height", "1");

  // ✅ Add the grains.png image inside the pattern
  const image = document.createElementNS("http://www.w3.org/2000/svg", "image");
  image.setAttribute("href", grainsEffect?.src); // Path or Base64 Data URL to grainsEffect.png
  image.setAttribute("x", "0");
  image.setAttribute("y", "0");
  image.setAttribute("width", "100%"); // Adjust to fit the element
  image.setAttribute("height", "100%");
  image.setAttribute("preserveAspectRatio", "xMidYMid slice"); // Ensure proper scaling
  image.setAttribute("opacity", "0.8"); // Adjust opacity for realism

  pattern.appendChild(image);
  defs.appendChild(pattern);

  // ✅ Overlay grain effect on the entire SVG
  let grainOverlay = svg.querySelector("#grainOverlay");
  if (!grainOverlay) {
    grainOverlay = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    grainOverlay.setAttribute("id", "grainOverlay");
    grainOverlay.setAttribute("x", "0");
    grainOverlay.setAttribute("y", "0");
    grainOverlay.setAttribute("width", "100%");
    grainOverlay.setAttribute("height", "100%");
    grainOverlay.setAttribute("fill", `url(#${patternId})`);
    grainOverlay.setAttribute("pointer-events", "none"); // Don't block interactions
    svg.appendChild(grainOverlay);
  }

  //  Process each fillable element without breaking colors
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
  tileHeight: number,
  scaleFactor = 3 // Increase resolution by 3x for high quality
): Promise<string> {
  const innerTiles = getInnerTiles(gridLayout);

  // Calculate high-resolution canvas size
  const canvasWidth = innerTiles[0].length * tileWidth * scaleFactor;
  const canvasHeight = innerTiles.length * tileHeight * scaleFactor;

  const canvas = document.createElement("canvas");
  canvas.width = canvasWidth;
  canvas.height = canvasHeight;
  const ctx = canvas.getContext("2d");

  if (!ctx) throw new Error("Canvas rendering context is not available");

  // set scale 
  const scaleFix = 1.056;
  ctx.imageSmoothingEnabled = false;
  ctx.imageSmoothingQuality = "high";

  // Load graining texture
  const texture = await loadImage2(grainsEffect.src);

  // Draw each inner tile on the canvas
  await Promise.all(
    innerTiles.map((row, rowIndex) =>
      Promise.all(
        row.map(async (tile, colIndex) => {
          if (!("svgString" in tile)) return; // Skip empty tiles

          const x = colIndex * tileWidth * scaleFactor;
          const y = rowIndex * tileHeight * scaleFactor;

          const img = await loadSvgAsImage(tile);

          ctx.save();

          // Move to the tile's center before scaling
          const centerX = x + (tileWidth * scaleFactor) / 2;
          const centerY = y + (tileHeight * scaleFactor) / 2;
          
          ctx.translate(centerX, centerY); // Move context to center
          ctx.scale(scaleFix, scaleFix); // Apply scaling
          ctx.translate(-centerX, -centerY); // Move back to original position

          // Draw the tile image with scaling applied
          ctx.drawImage(img, x, y, tileWidth * scaleFactor, tileHeight * scaleFactor);

          // Apply texture **per tile**
          ctx.globalAlpha = 0.8; // Adjust transparency (0.3 = subtle effect, increase if needed)
          ctx.drawImage(texture, x, y, tileWidth * scaleFactor, tileHeight * scaleFactor);
          ctx.globalAlpha = 1; // Reset alpha after applying texture

          ctx.restore();
        })
      )
    )
  );

  return canvas.toDataURL("image/png");
}

/**
 * Loads an image from a given URL
 */
async function loadImage2(src: string): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.src = src;
    img.crossOrigin = "anonymous"; // Fix CORS issues if needed
    img.onload = () => resolve(img);
    img.onerror = reject;
  });
}

/**
 * Converts an SVG string into an Image element
 */
async function loadSvgAsImage(tile: TileProperties): Promise<HTMLImageElement> {
  return new Promise((resolve) => {
    const img = new Image();
    const modifiedSvgString = addDataConnectToSvg(
      tile.svgString,
      tile.height,
      tile.width,
      tile.rotation,
      tile.color
    );
    img.src = `data:image/svg+xml;base64,${btoa(modifiedSvgString)}`;
    img.onload = () => resolve(img);
  });
}


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

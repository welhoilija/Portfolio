import React, { useEffect, useRef } from "react";
import { createNoise2D } from "simplex-noise";
import seedrandom from "seedrandom";

const TerrainGenerator = ({ seed }) => {
  const canvasRef = useRef(null);

  // Helper function to interpolate colors smoothly based on height values
  const interpolateColors = (height) => {
    const colors = [
      "#0000ff", // deep water
      "#00008b", // water
      "#228b22", // lowland
      "#6b8e23", // plateau
      "#cd853f", // hill
      "#a0522d", // mountain
      "#d3d3d3", // snow-capped mountain
      "#ffffff", // snow
      "#8b7b8b", // ridge
      "#8b0000"  // peak
    ];

    const colorIndex = Math.floor((height + 10) * (colors.length - 1) / 20);
    const lowerColor = colors[colorIndex];
    const upperColor = colors[colorIndex + 1] || colors[colorIndex];
    const t = (height + 10) * (colors.length - 1) / 20 - colorIndex;

    const r1 = parseInt(lowerColor.substring(1, 3), 16);
    const g1 = parseInt(lowerColor.substring(3, 5), 16);
    const b1 = parseInt(lowerColor.substring(5, 7), 16);
    const r2 = parseInt(upperColor.substring(1, 3), 16);
    const g2 = parseInt(upperColor.substring(3, 5), 16);
    const b2 = parseInt(upperColor.substring(5, 7), 16);
    const r = Math.floor(r1 + t * (r2 - r1));
    const g = Math.floor(g1 + t * (g2 - g1));
    const b = Math.floor(b1 + t * (b2 - b1));

    return `rgb(${r},${g},${b})`;
  };

  useEffect(() => {
    const rng = seedrandom(seed); // Create a new random function based on the seed
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    // Set the canvas size
    canvas.width = 500;
    canvas.height = 500;

    // Create a grid with 100x100 cells
    const gridSize = 100;
    const cellSize = canvas.width / gridSize;

    // Generate the terrain data with noise function
    const terrainData = [];
    const noise2D = createNoise2D(rng); // Use the custom PRNG function for noise
    for (let y = 0; y < gridSize; y++) {
      const row = [];
      for (let x = 0; x < gridSize; x++) {
        // Use the noise function to generate terrain heights
        const height = 10 * noise2D(x / 50, y / 50); // Adjust the scaling factor for desired terrain heights
        row.push(height);
      }
      terrainData.push(row);
    }

    // Draw the terrain grid based on the height data with smooth color transitions
    for (let y = 0; y < gridSize; y++) {
      for (let x = 0; x < gridSize; x++) {
        const height = terrainData[y][x];
        const color = interpolateColors(height);
        ctx.fillStyle = color;
        ctx.fillRect(x * cellSize, y * cellSize, cellSize, cellSize);
      }
    }
  }, [seed]);

  return (
    <div>
      <canvas ref={canvasRef} className="terrain-canvas" />
      <div className="info-button" title="Click for Information">
        ℹ️
        <div className="info-tooltip">
          <h2>Identifying terrain</h2>
          <p>
            This is a generated terrain based on a seed generated from your browser information.
            If this image changes suddenly, it could be that your details changed or there is some man in the middle!
          </p>
        </div>
      </div>
    </div>
  );
};

export default TerrainGenerator;
import React, { useEffect, useRef } from "react";
import { RandomFn, createNoise2D } from "simplex-noise";
import seedrandom from "seedrandom";

const TerrainGenerator: React.FC<{ seed: string }> = ({ seed }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const interpolateColors = (height: number): string => {
    const colors = [
      "#0000ff",
      "#00008b",
      "#228b22",
      "#6b8e23",
      "#cd853f",
      "#a0522d",
      "#d3d3d3",
      "#ffffff",
      "#8b7b8b",
      "#8b0000"
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
    const rng: RandomFn = seedrandom(seed);
    const canvas = canvasRef.current;
    if (!canvas) {
      throw new Error('Canvas is missing');
    }
    const ctx = canvas.getContext("2d");
    if (!ctx) {
      throw new Error('Canvas context is missing');
    }

    canvas.width = 500;
    canvas.height = 500;

    const gridSize = 100;
    const cellSize = canvas.width / gridSize;

    const terrainData: number[][] = [];
    const noise2D = createNoise2D(rng);
    for (let y = 0; y < gridSize; y++) {
      const row: number[] = [];
      for (let x = 0; x < gridSize; x++) {
        const height: number = 10 * noise2D(x / 50, y / 50);
        row.push(height);
      }
      terrainData.push(row);
    }

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
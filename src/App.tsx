import "./styles.css";
import React, { Suspense } from "react";
const HomePage = React.lazy(() => import("./scenes/HomePage"));
const VideoGame = React.lazy(() => import("./scenes/VideoGame"));
import { Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <Suspense
      fallback={
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          Loading...
        </div>
      }
    >
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/game" element={<VideoGame />} />
      </Routes>
    </Suspense>
  );
}

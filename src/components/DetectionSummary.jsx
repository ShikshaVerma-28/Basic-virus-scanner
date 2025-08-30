import React from "react";
import { ProgressBar } from "react-bootstrap";

export default function DetectionSummary({ detections, total }) {
  const percentage = Math.round((detections / total) * 100);

  return (
    <div className="mt-3">
      <h6>Detection Summary</h6>
      <ProgressBar
        now={percentage}
        label={`${detections}/${total}`}
        variant={detections > 0 ? "danger" : "success"}
      />
    </div>
  );
}

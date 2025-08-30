import React from "react";
import DetectionSummary from "./DetectionSummary";

export default function ScanResult({ result }) {
  if (!result) return null;

  return (
    <div
      className="card shadow-sm p-3 text-center mx-auto mt-4"
      style={{ maxWidth: "350px" }}
    >
      <h5 className="mb-3">Scan Result</h5>
      <p
        className={`fw-bold ${
          result.verdict.includes("SAFE") ? "text-success" : "text-danger"
        }`}
      >
        {result.verdict}
      </p>
      <p className="small text-muted mb-1">
        {result.details.detections} / {result.details.totalEngines} engines flagged
      </p>
      <p className="small">Scanned by: {result.details.scannedBy}</p>

      {/* Detection Summary Progress Bar */}
      <DetectionSummary
        detections={result.details.detections}
        total={result.details.totalEngines}
      />
    </div>
  );
}

import React, { useState } from "react";

export default function FileUpload({ onResult }) {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);

  function handleFileChange(e) {
    setFile(e.target.files[0] || null);
  }

  function mockScan(file) {
    const s = Array.from(file.name).reduce((a, c) => a + c.charCodeAt(0), 0);
    const isSafe = s % 2 === 0;
    return {
      verdict: isSafe ? "SAFE ✅" : "INFECTED ❌",
      details: {
        scannedBy: "Mock Engine",
        detections: isSafe ? 0 : 3,
        totalEngines: 10,
      },
    };
  }

  async function handleScan() {
    if (!file) return alert("Choose a file first!");
    setLoading(true);

    setTimeout(() => {
      const result = mockScan(file);
      setLoading(false);
      onResult(result);
    }, 2000);
  }

  return (
    <div className="card shadow-sm p-3 text-center mx-auto" style={{ maxWidth: "350px" }}>
      <h5 className="mb-3">Upload File</h5>
      <input
        type="file"
        onChange={handleFileChange}
        className="form-control form-control-sm mb-3"
      />
      {file && <p className="text-muted small mb-2">📂 {file.name}</p>}

      <button
        onClick={handleScan}
        disabled={!file || loading}
        className="btn btn-primary w-100 btn-sm"
      >
        {loading ? "Scanning..." : "Scan File"}
      </button>

      {loading && (
        <div className="d-flex justify-content-center mt-3">
          <div className="spinner-border spinner-border-sm text-primary" role="status"></div>
        </div>
      )}
    </div>
  );
}

import React, { useState } from "react";
import FileUpload from "./components/FileUpload";
import ScanResult from "./components/ScanResult";

export default function App() {
  const [result, setResult] = useState(null);

  return (
    <div className="d-flex flex-column align-items-center justify-content-center min-vh-100 bg-light">
      {/* Title */}
      <h1 className="mb-4 text-primary fw-bold">Antivirus Scanner</h1>

      {/* Card container for file upload + result */}
      
      <div className="col-md-6 col-lg-5 w-100">
        <FileUpload onResult={setResult} />
        <ScanResult result={result} />
      </div>

      {/* Footer */}
      <footer className="mt-5 text-muted small">
        © {new Date().getFullYear()} Antivirus App | Powered by VirusTotal API
      </footer>
    </div>
  );
}

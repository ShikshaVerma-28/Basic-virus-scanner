Antivirus – Mini Project

A basic virus scanner web app built with React.js.

Users can upload a file - scan it - see results.

Mock Scan Mode - works without an API key (returns Safe/Infected randomly).

Features

Upload any file (drag & drop or choose).

Scan button triggers the check.

Shows scan status (Safe / Infected).

Handles small files (≤ 32 MB).

Friendly error messages for large files and API rate limits.

Tech Stack

Frontend: React.js, HTML, CSS

Backend: Node.js/Express or Vercel Serverless Function

Getting Started
1. Clone Repo
git clone https://github.com/ShikshaVerma-28/Basic-virus-scanner/tree/main
cd antivirus-app

2. Install Dependencies
npm install

3. Run Frontend (React)
npm run dev


Frontend runs on http://localhost:5173


4. Run Backend (Local Option)
node server/index.js


Backend runs on http://localhost:5000


If using Vercel, place the backend file inside /api/scan.js instead.

Demo:
Live Demo: [Your Netlify/Vercel link here]

Author:

Built by Shiksha Verma as part of an evaluation mini-project.

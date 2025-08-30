const fetch = require("node-fetch");
const FormData = require("form-data");

module.exports = async (req, res) => {
  if (req.method !== "POST") return res.status(405).send("Method Not Allowed");
  try {
    const { filename, data } = req.body;
    if (!filename || !data) return res.status(400).json({ error: "missing file" });

    const base64 = data.replace(/^data:.+;base64,/, "");
    const buffer = Buffer.from(base64, "base64");

    const form = new FormData();
    form.append("file", buffer, { filename });

    const uploadResp = await fetch("https://www.virustotal.com/api/v3/files", {
      method: "POST",
      headers: {
        "x-apikey": process.env.VT_API_KEY,
        ...form.getHeaders()
      },
      body: form
    });

    const uploadJson = await uploadResp.json();
    const analysisId = uploadJson?.data?.id;
    if (!analysisId) {
      return res.status(500).json({ error: "no analysis id from VirusTotal", uploadJson });
    }

    let analysisJson = null;
    for (let i = 0; i < 8; i++) {
      const r = await fetch(`https://www.virustotal.com/api/v3/analyses/${analysisId}`, {
        headers: { "x-apikey": process.env.VT_API_KEY }
      });
      const j = await r.json();
      if (j?.data?.attributes?.status === "completed") {
        analysisJson = j;
        break;
      }
      await new Promise(r => setTimeout(r, 3000));
    }

    return res.json({ upload: uploadJson, analysis: analysisJson });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: String(err) });
  }
};

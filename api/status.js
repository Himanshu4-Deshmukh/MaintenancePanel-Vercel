let maintenanceMode = false; // ⛔️ this resets on each Vercel invocation

export default function handler(req, res) {
  res.status(200).json({ maintenance: maintenanceMode });
}

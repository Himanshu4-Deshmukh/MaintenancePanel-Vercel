let maintenanceMode = false; // ⛔️ also resets per invocation

const ADMIN_SECRET = "block"; // 🔐 hardcoded admin key

export default function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { secret, active } = req.body;

  if (secret !== ADMIN_SECRET) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  maintenanceMode = !!active; // this will reset on next request

  res.status(200).json({
    message: `Maintenance mode ${maintenanceMode ? "ON" : "OFF"}`,
    maintenance: maintenanceMode,
  });
}

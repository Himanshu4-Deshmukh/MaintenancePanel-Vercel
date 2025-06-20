export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { secret, active } = req.body;

  if (secret !== process.env.ADMIN_SECRET) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  const newMode = !!active;
  process.env.MAINTENANCE_MODE = newMode.toString(); // not persisted between invocations!

  res.status(200).json({
    message: `Maintenance mode ${newMode ? 'ON' : 'OFF'}`,
    maintenance: newMode,
  });
}

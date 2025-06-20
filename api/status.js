export default function handler(req, res) {
  const maintenance = process.env.MAINTENANCE_MODE === 'true';
  res.status(200).json({ maintenance });
}

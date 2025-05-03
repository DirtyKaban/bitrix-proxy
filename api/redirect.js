export default function handler(req, res) {
  const dealId = req.body?.PLACEMENT_OPTIONS?.ID || 0;

  if (!dealId) {
    return res.status(400).send("Deal ID not found");
  }

  const url = `https://dirtykaban.github.io/bitrix-margin-calculator/index.html?deal_id=${dealId}`;
  res.writeHead(302, { Location: url });
  res.end();
}

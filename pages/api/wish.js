export default function handler(req, res) {
  if (req.method === 'POST') {
    res.status(200).json({ name: 'POST isteği geldi' })
    const { text, userToken } = req.body
    return console.log(text)
    // Process a POST request
  }
  if (req.method === 'GET') {
    res.status(200).json({ name: 'GET isteği geldi' })
    // Process a POST request
  }
}

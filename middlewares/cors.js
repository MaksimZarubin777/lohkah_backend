const allowedCors = [
  'http://localhost:3000',
  'https://localhost:3000',
  'http://leka-english.online',
  'https://www.leka-english.online',
  'leka-english.online',
];

console.log('testing CORS111', req)
function handleCors(req, res, next) {
  const { origin } = req.headers;
  const { method } = req;
  console.log('testing CORS', origin, method)
  const DEFAULT_ALLOWED_METHODS = 'GET,HEAD,PUT,PATCH,POST,DELETE';
  const requestHeaders = req.headers['access-control-request-headers'];
  if (allowedCors.includes(origin)) {
    res.header('Access-Control-Allow-Origin', origin);
    res.header('Access-Control-Allow-Credentials', 'true');
  }
  if (method === 'OPTIONS') {
    res.header('Access-Control-Allow-Origin', origin);
    res.header('Access-Control-Allow-Methods', DEFAULT_ALLOWED_METHODS);
    res.header('Access-Control-Allow-Headers', requestHeaders);
    return res.end();
  }
  return next();
}

module.exports = {
  handleCors,
};

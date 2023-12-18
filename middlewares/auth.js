const token = require('jsonwebtoken');
const ConflictError = require('../errors/ConflictError');

module.exports = (req, res, next) => {
  console.log('auth started')
  console.log('auth cookies', req)
  const { jwt } = req.cookies;
  if (!jwt) {
    return next(new ConflictError);
  }
  let payload;
  try {
    payload = token.verify(jwt, 'dev-secret');
  } catch (err) {
    return next(new ConflictError);
  }
  req.user = payload;
  console.log('aauth ending')
  console.log('aauth req user i payload', req.user, payload)
  return next();
};

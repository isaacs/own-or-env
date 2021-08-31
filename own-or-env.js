var proc = process
var ownOr = require('own-or')
module.exports = function ownOrEnv (object, field, env, bool) {
  var res = ownOr(object, field, proc.env[env])
  if (bool)
    res = !!+(res)
  return res
}

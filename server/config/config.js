var env = process.env.NODE_ENV;
if (process.env.NODE_ENV != 'test') {
  var env = (process.env.PORT) ? 'production' : 'development';
}

console.log('env *****', env);

var config = require('./config.json');
var envConfig = config[env];

Object.keys(envConfig).forEach((key) => {
  process.env[key] = envConfig[key];
});

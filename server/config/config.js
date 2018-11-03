var env = process.env.NODE_ENV;
if (process.env.NODE_ENV != 'test') {
  var env = (process.env.PORT) ? 'production' : 'development';
}

console.log('env *****', env);

if (env === 'development') {
  process.env.PORT = 3000;
  process.env.MONGODB_URI = 'mongodb://localhost:27017/TodoApp';
} else if (env === 'test') {
  process.env.PORT = 3000;
  process.env.MONGODB_URI = 'mongodb://127.0.0.1:27017/TodoAppTest';
} else if (env === 'production') {
  process.env.MONGODB_URI = 'mongodb://Avadh vashisth:avadh123@ds239873.mlab.com' +
  ':39873/node-todo-api';
}

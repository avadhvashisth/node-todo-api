var mongoose = require('mongoose');

var url = 'mongodb://localhost:27017/TodoApp';
if (process.env.PORT) {
  url = 'mongodb://Avadh vashisth:avadh123@ds239873.mlab.com:39873/node-todo-api';
}

mongoose.Promise = global.Promise;
mongoose.connect(url, { useNewUrlParser: true });

module.exports = {
  mongoose,
};

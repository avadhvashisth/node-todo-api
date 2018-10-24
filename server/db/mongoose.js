var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://Avadh vashisth:avadh123@ds239873.mlab.com:39873/node-todo-api', { useNewUrlParser: true });

module.exports = {
  mongoose,
};

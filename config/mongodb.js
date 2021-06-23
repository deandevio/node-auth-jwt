const { connect, connection } = require("mongoose");

const MongoConnection = async () => {
  await connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
    .then((response) => console.log(`mongo atlas is connected on ${connection.host}`))
    .catch((err) => console.log(err));
};

module.exports = MongoConnection;

const config = {
  port: {
    uri: process.env.PORT || 3000,
  },
  db: {
    url: process.env.MONGODB_URL || "mongodb://localhost:27017/myApp",
  },
  dba: {
    url: "mongodb+srv://rionas:kid122796@app.j9us0af.mongodb.net/?retryWrites=true&w=majority",
  },
  jwt: {
    key: "rionas",
  },
};
module.exports = config;

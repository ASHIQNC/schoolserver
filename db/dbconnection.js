const mongoose = require("mongoose");
//connect server and atless
//connection errorsss ozhivakaaan vendi namukk second argument aayit kodukaa
//connect() method is asynchronous
// asynchronous aayath access cheyan vendi we are using promise

mongoose
  .connect(process.env.BASE_URL, {
    //connection errorsss ozhivakaaan vendi namukk second argument aayit kodukaa
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("mongodb atless connected");
  })
  .catch(() => {
    console.log("connection error");
  });

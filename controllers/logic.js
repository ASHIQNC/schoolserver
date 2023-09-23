const model = require("../models/models");
//const client=require('../models/models')

//course indo nokanam
//using find one
//object und
//logic for addcourse

const addcourse = (req, res) => {
  const image = req.body.image;
  const coursename = req.body.coursename;
  const discription = req.body.discription;
  const nextbatch = req.body.nextbatch;
  const duration = req.body.duration;
  const coursefeesonline = req.body.coursefeesonline;
  const coursefeesoffline = req.body.coursefeesoffline;
  console.log(req);

  //check coursename is present in admin collection or not
  //we are using findOne() it is asynchronous method son we are using "promise"(.then().catch()) method here

  model.admin.findOne({ coursename }).then((data) => {
    console.log("data", data);

    //atahava course indenkil we need to send a response
    if (data) {
      res.status(401).send("course already added");
    } else {
      //add new course by creating a new object for the admin course collection
      let newCourse = new model.admin({
        image,
        coursename,
        discription,
        nextbatch,
        duration,
        coursefeesonline,
        coursefeesoffline,
      });

      //the kayijttt namukk save cheyyanam ennit venam data send cheyyan
      //note:ee save() method
      newCourse.save();
      //sending responsse:athin nammuk send method use aaka but send use aakumpo nammale data jsonilott convert aakanm .so athin vendi "json()" paraja mthod use aaka
      //json():convert js data into json type and send the data.ee method use aakiya jsonileott convertum aaakum data send cheyyukayum cheyyum

      res.status(200).json(newCourse);
    }
  });
};

//get course details

const getCourse = (req, res) => {
  // find method is used to get all the data
  model.admin.find().then((value) => {
    if (value) {
      console.log(value);
      res.status(200).send(value);
    } else {
      res.status(404).send("no course exist");
    }
  });
};

//post enquiry

//db.collection name. insert method to post the data

const postEnquiry = async (req, res) => {
  const username = req.body.username;
  const phonenumber = req.body.phonenumber;
  const email = req.body.email;
  const cityname = req.body.cityname;
  const enquiry = req.body.enquiry;

  // model.clients.create().then((data) => {
  //   if (data) {
  //     // let enquiryData = {
  //     //   username,
  //     //   phonenumber,
  //     //   email,
  //     //   cityname,
  //     //   enquiry,
  //     // };
  //     res.status(200).send(data);
  //   } else {
  //     res.status(404).send({ message: "unable to send" });
  //   }
  // });
  let enquiryData = {
    username,
    phonenumber,
    email,
    cityname,
    enquiry,
  };
  // The Model.create() method of the Mongoose API is used to create single or many documents in the collection.
  //  Mongoose by default triggers save() internally when we use the create() method on any model.
  await model.clients.create(enquiryData).then((result, error) => {
    if (result !== null && result !== "") {
      res.send(result);
    } else {
      res.send("Insert error!" + error);
    }
  });
};

const getEnquiryDetails = (req, res) => {
  model.clients.find().then((data) => {
    if (data) {
      console.log(data);
      res.status(200).send(data);
    } else {
      res.status(404).send("no course exist");
    }
  });
};

// registration

const adminRegister = (req, res) => {
  const { username, password, role, email } = req.body;

  model.adminregistration.findOne({ email }).then((user) => {
    if (user) {
      res.status(401).send("user already exist");
    } else {
      let newAdmin = new model.adminregistration({
        username,
        email,
        role,
        password,
      });

      newAdmin.save();
      res.status(200).json(newAdmin);
    }
  });
};

//login
const adminLogin = (req, res) => {
  const { username, password, role } = req.body;

  model.adminregistration.findOne({ username, password }).then((admin) => {
    if (admin) {
      res.status(200).send({
        username: admin.username,
        password: admin.password,
        role: admin.role,
      });
    } else {
      res.status(401).send({
        message: "incorrect username and password",
      });
    }
  });
};

module.exports = {
  addcourse,
  getCourse,
  postEnquiry,
  getEnquiryDetails,
  adminRegister,
  adminLogin,
};

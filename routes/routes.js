//evide aaanu nammal path set aakukaa

const express = require("express");
const logic = require("../controllers/logic");

//create an object for router clss in express
//nammal eppolum object create cheyumpo new use aakum

const router = new express.Router();

//addind course to database
router.post("/courseadmin/addcourse", logic.addcourse);

//retreiving course from db

router.get("/courseadmin/getcourse", logic.getCourse);

//post enquiry from client
router.post("/courseadmin/postenquiry", logic.postEnquiry);

//retrieve enquiry from client

router.get("/courseadmin/getenquiry", logic.getEnquiryDetails);

//register user

router.post("/courseadmin/register", logic.adminRegister);

//login admin

router.post("/courseadmin/login", logic.adminLogin);

module.exports = router;

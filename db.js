const mongoose = require("mongoose");

// Connect to MongoDB
mongoose.connect(
"mongodb+srv://kirags123:8qPEa8KTKBEh2bss@cluster0.f3qlbuo.mongodb.net/course_selling_app"
);
//mongodb+srv://sahug8279:012345@cluster0.x3t6etb.mongodb.net/paytmmm-v-1
//"mongodb+srv://kirags123:8qPEa8KTKBEh2bss@cluster0.f3qlbuo.mongodb.net/course_selling_app"
// mongodb+srv://sahug8279:012345@cluster0.x3t6etb.mongodb.net/

// Define schemas
const UserSchema = new mongoose.Schema({
  // Schema definition here
  username:{
    type:String,
    required:true,
    unique:true,
    trim:true,
    lowercase:true,
    minLength:3,
    maxLength:30
  }, 
  // email:{
  //   type:String,
  //   required:true,
  // },
  firstName:{
    type:String,
    required:true,
    minLength:3,
    maxLength:30,
    trim:true,
    lowercase:true
  }, lastName:{
    type:String,
    maxLength:30,
    trim:true,
    lowercase:true
  },
   password:{
    type:String,
    required:true,
    minLength:6,
    maxLength:1024,
    trim:true,
    lowercase:true,
    // match:/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/
  }
})

const accountSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId, // Reference to User model
        ref: 'User',
        required: true
    },
    balance: {
        type: Number,
        required: true
    }
});

// const Admin = mongoose.model("Admin", AdminSchema);
const User = mongoose.model("User", UserSchema);
const Account = mongoose.model('Account', accountSchema);
// https://github.com/100xdevs-cohort-2/paytm/blob/complete-solution/backend/db.js

module.exports = {
  Account,
  User,
};

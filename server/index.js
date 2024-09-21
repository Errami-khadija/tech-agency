// CREATE SERVER
const express = require("express")
const app = express()
const cors = require("cors")
app.use(cors())

// Allow requests from  frontend URL
app.use(cors({
  origin: 'https://tech-agency-1.onrender.com',
  credentials: true, 
}));
app.use(express.json())
const { v4: uuidv4 } = require('uuid');

const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const router = express.Router();

require('dotenv').config();
app.use(bodyParser.json());

//CONNECT TO DB
const username = "techAgency",
  password = "1234",
  database = "tech-agency";

const mongoose = require("mongoose")
mongoose.connect(`mongodb+srv://${username}:${password}@cluster0.yqkzy.mongodb.net/${database}?retryWrites=true&w=majority`)


//Listen to SERVER
app.listen("1000", () => {
  console.log("server works good!");
})


//IMPORT MODELS
const UserModel = require("./models/Users");
const orderModel = require("./models/Orders");
const MessageModel = require("./models/Messages");
const serviceModel = require("./models/Services")
const ImageModel = require('./models/Images');

///######### START  Authentication Part #######///

app.post("/register", async (req, res) => {
  const { username, password, email } = req.body;
  const hashPassword = bcrypt.hashSync(password, 10);

  try {
    // Check if the user already exists by either username or email
    const existingUser = await UserModel.findOne({
      $or: [{ username }, { email }]
    });

    if (existingUser) {
      if (existingUser.username === username) {
        return res.status(400).json({ error: 'Username already exists' });
      }
      if (existingUser.email === email) {
        return res.status(400).json({ error: 'Email already exists' });
      }
    }

    const verificationToken = uuidv4();

    // Create new user
    const newUser = new UserModel({
      username,
      email,
      password: hashPassword,
      verificationToken,
      isVerified: false,
    });

    // Save user to the database
    await newUser.save();

    // Send verification email
    sendVerificationEmail(email, verificationToken);

    res.status(200).json({ message: 'Registration successful, please verify your email.' });
  } catch (error) {
    console.error('Error during registration:', error); // Log the exact error
    res.status(500).json({ error: 'Internal server error, please try again later.' });
  }
});


// Configure Nodemailer with Gmail
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER, 
    pass: process.env.GMAIL_PASS  //  Gmail app-specific password
  }
});

// Send Verification Email
function sendVerificationEmail(email, verificationToken) {
  const mailOptions = {
    from: 'khadiijaerrami2021@gmail.com', 
    to: email,
    subject: 'Email Verification',
    text: `Please verify your email by clicking on the following link: http://localhost:5173/verify/${verificationToken}`,
    html: `<p>Please verify your email by clicking on the following link:</p><a href="http://localhost:5173/verify/${verificationToken}">Verify Email</a>`
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
    } else {
      console.log('Email sent:', info.response);
    }
  });
}


app.put('/verify/:verificationToken', async (req, res) => {
  const { verificationToken } = req.params; 

  try {
    // Find the user by verification token
    const user = await UserModel.findOne({ verificationToken });

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    // Update the user's status to verified
    user.isVerified = true; 
    user.verificationToken = null;
    await user.save();

    res.status(200).json({ message: 'Email verification successful' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});



//************Login ************//
app.post("/login", async (req, res) => {
  const { username, password } = req.body;

  // Find user by username
  const user = await UserModel.findOne({ username });

  // Check if the user exists
  if (!user) {
    return res.status(404).json({ message: "User doesn't exist!" });
  }

  // Check if the email is verified
  if (!user.isVerified) {
    return res.status(400).json({ message: "Please verify your email before logging in." });
  }

  // Verify the password
  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
    return res.status(401).json({ message: "Username or password is incorrect" });
  }

  // If everything is valid, generate a token
  const token = jwt.sign({ id: user._id }, "errami");

  // Send token and user data as the response
  return res.status(200).json({
    token,
    userId: user._id,
    username: user.username,
    email: user.email,
  });
});

//******** Orders Part***********/
app.get("/orders", async (req, res) => {

  const users = await orderModel.find();
  res.json(users)

})

const cookieParser = require('cookie-parser');
const messageModel = require("./models/Messages")
app.use(cookieParser());
app.get("/ordersUser", async (req, res) => {
  const username =  req.query.username;

  try {
    const orders = await orderModel.find({ username: username });
    return res.json(orders);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
});


const currentTime = new Date();
app.post("/sendOrder", async (req, res) => {

  const newOrder = new orderModel(req.body, currentTime);
  await newOrder.save();
  res.json(req.body);

})

app.get('/count', async (req, res) => {

  try {
    const count = await orderModel.countDocuments({});
    res.status(200).json({ count });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }

});

/************Update Order *********/
app.put('/acceptByAdmin', async (req, res) => {
  const price = req.body.price
  const duration = req.body.duration
  const id = req.body.id

  try {
    const result = await orderModel.findById(id)
    if (result.price==0 && result.duration==0) {
      // Update the found document
      result.price = price;
      result.duration = duration;
      await result.save(); // Save the changes to the database
    }
  } catch (err) {
    console.log(err)
  }
  res.send("updates!")

});
app.put('/acceptByClient', async (req, res) => {
  const statut = req.body.statut
  const id = req.body.id

  try {

    const result = await orderModel.findById(id)
    if (result) {
      // Update the found document
      result.statut = statut;
      await result.save(); // Save the changes to the database
    }

  } catch (err) {
    console.log(err)
  }

  res.send("updates!")

});

/******* update Statut *******/
app.put('/refuseByAdmin', async (req, res) => {
  const statut = req.body.statut
  const id = req.body.id

  try {

    const result = await orderModel.findById(id)
    if (result) {
      // Update the found document
      result.statut = statut;
      await result.save(); // Save the changes to the database
    }

  } catch (err) {
    console.log(err)
  }

  res.send("updates!")

});
app.put('/refuseByClient', async (req, res) => {
  const statut = req.body.statut
  const id = req.body.id

  try {

    const result = await orderModel.findById(id)
    if (result) {
      // Update the found document
      result.statut = statut;
      await result.save(); // Save the changes to the database
    }

  } catch (err) {
    console.log(err)
  }

  res.send("updates!")

});

router.get('/ordersL', async (req, res) => {
  try {
    const orders = await orderModel.find({});
    res.json(orders);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
module.exports = router;


//***********Messages Part *********/

app.post("/send", async (req, res) => {
  const { email, subject, message } = req.body;

  try {
    const newMessage = new messageModel({ subject, email, message });
    await newMessage.save();

    // Respond with success message
    res.status(200).json({ message: 'Message sent successfully!' });
  } catch (error) {
    console.error('Error saving message:', error);
    res.status(500).json({ message: 'Failed to send the message. Please try again.' });
  }
});


app.get("/messages", async (req, res) => {

  const messages = await MessageModel.find();
  res.json(messages)

})

app.get("/countmessages", async (req, res) => {

  try {
    const countM = await MessageModel.countDocuments({});
    res.status(200).json({ countM });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }

});



app.post('/sendEmail', async (req, res) => {
  try {
    const { recipient, subject, body } = req.body;

    // Setup email data
    const mailOptions = {
      from: 'khadiijaerrami2021@gmail.com', // Your email
      to: recipient, // Recipient's email
      subject: subject, // Subject of the email
      text: body, // Plain text body
      html: `<p>${body}</p>`, // HTML version of the body
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    res.json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Failed to send email:', error);
    res.status(500).json({ message: 'Failed to send email' });
  }
});

//*********** Services PART ********/

app.get('/countService', async (req, res) => {
  try {
    // Use the countDocuments() method to count the documents in the collection
    const countService = await serviceModel.countDocuments({});
    res.status(200).json({ countService });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.get("/services", async (req, res) => {

  const services = await serviceModel.find();
  res.json(services)
  
})


app.post('/service/new', (req, res) => {
  const service = new serviceModel({
    name: req.body.titre,
    description:req.body. description
  });
  service.save();
  res.json(service);
});
//password

app.put('/service/update_admin/:id', async (req, res) => {
  try {
    const { titre, description } = req.body;
    const service = await serviceModel.findByIdAndUpdate(req.params.id, { name:titre, description }, { new: true });
    if (!service) {
      return res.status(404).json({ error: 'Service not found' });
    }
    res.json(service);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});
//update
app.delete('/service/delete/:id', async (req, res) => {
  const result = await serviceModel.findByIdAndDelete(req.params.id);
  res.json({ result });
});

app.put('/service/updateName', async (req, res) => {
  const name = req.body.name
  const id = req.body.id

  try {
    const result = await serviceModel.findById(id)
    if (result) {
      // Update the found document
      result.name = name;
      await result.save(); // Save the changes to the database
    }
  } catch (err) {
    console.log(err)
  }
  res.send("updates!")
});
app.put('/service/updateDescription', async (req, res) => {
  const description = req.body.description
  const id = req.body.id

  try {
    const result = await serviceModel.findById(id)
    if (result) {
      // Update the found document
      result.description = description;
      await result.save(); // Save the changes to the database
    }
  } catch (err) {
    console.log(err)
  }
  res.send("updates!")
});


/*********** USERS PART ************/

app.get("/user", async (req, res) => {

  const user = await UserModel.find();
  res.json(user)
  
})

app.get('/countClients', async (req, res) => {

  try {
    const countClient = await UserModel.countDocuments({});
    res.status(200).json({ countClient });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }

});

app.put('/updateprofile', async (req, res) => {
  const username = req.body.username
  const password = req.body.password
  const id = req.body.id

  const hashPassword = bcrypt.hashSync(password, 10)

  try {
    const result = await UserModel.findById(id)
    if (result) {
      // Update the found document
      result.username = username;
      result.password = hashPassword;
      await result.save(); // Save the changes to the database
    }
  } catch (err) {
    console.log(err)
  }
  res.send("updates!")

});

/************ CHART *********/
app.get('/chart', async (req, res) => {
  try {
    const orderCountByDay = await orderModel.aggregate([
      {
        $group: {
          _id: {
            $dateToString: { format: '%Y-%m-%d', date: '$date' }
          },
          count: { $sum: 1 },
        },
      },
    ]);
    res.json(orderCountByDay);
  } catch (error) {
    console.error('Error counting orders:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});



//Imagessss

app.post("/uploads", async (req, res)=>{
  const body= req.body;
  try{
    const newImage = await ImageModel.create(body);
    newImage.save();
    res.status(201).json({msg: "new Image Upload ...!"})
  }catch(error){
    res.status(409).json({message: error.message})
  }
})







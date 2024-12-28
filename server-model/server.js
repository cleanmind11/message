const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const authRoutes = require("./routes/auth");
const messageRoutes = require("./routes/message");
// const cloudRoutes = require("./routes/cloudinary");
const socket = require("socket.io");
const Multer = require("multer");
const http = require('http');
const bodyparser = require('body-parser')

const app = express()

app.use(cors());
app.use(express.json());
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({ extended: false }))

const mongoURL = "mongodb://127.0.0.1/chat";

// mongoose.connect('mongodb://localhost:27017', {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => {
//     console.log("DB Connetion Successfull");
//   })
//   .catch((err) => {
//     console.log(err.message);
//   });

  mongoose.connect(mongoURL)
  .then(() => {
    console.log("DB Connetion Successfull");
  })
  .catch((err) => {
    console.log(err.message);
  });

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
// app.use("/api/cloud", cloudRoutes);

const PORT = process.env.PORT || 5000
const server = app.listen(PORT,()=>{
    console.log(`Server running on Port ${PORT}`);
})



const io = socket(server,{
  cors :{
    origin : '*',
    credentials : true
  }
})

global.onlineUsers = new Map();

io.on("connection", (socket)=>{
  console.log('connect to socket', socket.id);
  global.chatSocket = socket;

  socket.on("add-user", (username)=>{
    onlineUsers.set(username, socket.id);
    console.log("username:", username);
    console.log(onlineUsers);
  })

  socket.on("send-msg", (data)=>{
    const sendUnderSocket = onlineUsers.get(data.to);
    console.log("data:",data)
    console.log("sendUnder:",sendUnderSocket);
    if(sendUnderSocket){
      
      socket.to(sendUnderSocket).emit("msg-recieve", data.message)
      console.log("data.message:",data.message);
    }
  })

  socket.on("send-notification", (data)=>{
    const sendUnderSocket = onlineUsers.get(data.to);
    if(sendUnderSocket){
      socket.to(sendUnderSocket).emit("notification-recieve",data.message)
    }
  })

})
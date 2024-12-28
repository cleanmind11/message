const router = require("express").Router();
const userinfo = require("../models/user_info");


router.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;
    await userinfo.findOne({ username, password }).then((user) => {
      if (user) res.send({ user, status: true });
      else res.json({msg: "Incorrect User", status: false});
    });
  } catch (err) {
    res.send(err);
  }
});

router.post("/register", async (req, res) => {
  try {
    const { username, password, avatar } = req.body;
    const user = await userinfo.findOne({ username });
    if (!user) {
      const UserInfo = userinfo.create({
        username,
        password,
        avatar,
      });
      UserInfo.save((err) => {if(!err) res.json('success')});
    } else {
      res.send("already registered");
    }
  } catch (err) {
    res.send(err);
  }
});

router.get("/getAll", async (req, res) => [
  await userinfo
    .find().select('username avatar')
    .then((users) => res.send(users)),
]);

router.get('/logout', async (req, res) => {
    try {
        if(req.params.id) {
            onlineUsers.delete(req.params.id);
            return res.status(200).send();
        }
    } catch(err) {
        res.send(err)
    }
})

module.exports = router;

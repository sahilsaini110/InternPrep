const express = require('express')
const router = express.Router();
const {handleGetAllUsers, handleGetUserById, handlePostUser} =  require('../controllers/user')

// router.get('/users', async (req, res)=>{
//     const allDbUsers = await User.find({});
//      const html = `
//      <ul>
//       ${allDbUsers.map((user) => `<li>${user.firstName} ${user.email}</li>`).join("")}
//      </ul>
//      `
//     return res.send(html)
// })

// sab jagha se m ne user hta diya

router.get('/', handleGetAllUsers);

router.get("/:id", handleGetUserById);  

//complete
router.patch("/:id", (req, res)=>{
    
})

//complete
router.delete("/:id", (req, res)=>{
    
})

router.post("/", handlePostUser);

module.exports = router;
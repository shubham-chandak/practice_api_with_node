const express = require('express');
const router = express.Router();

const users = ["Sayan Bhattacharya", "Amit Garg", "Niladri Das", "Abhishek Kumar", "Ajay GK"]
router.get('/', (req, res, next) => {
    res.status(200).json(
        users.map(x => {
            let fullName = x.split(" ");
            return {
                "firstName": fullName[0],
                "lastName": fullName[1]
                }
        })
    );
})

module.exports = router;
// import User = require("../Models/userModel");

const addUser = async(req, res) => {
    // const data = data.name;
    // const name = date.name;

    // const {name, age, role} = req.body;
    const {name, age, address, email, phone, date, role} = req.body;

    const addUser = new User({
        name: name,
        age: age,
        address: address,
        email: email,
        phone: phone,
        date: date,
        role: role,
    });

    try {
        const response = await addUser.save();
        if (response) {
            res.status(201).json({message: "User created successfully", response});
        }
    } catch (error) {
        res.status(500).json({message: 'Internal server error ${error}'}, error);
    }
};

module.exports = createUser;
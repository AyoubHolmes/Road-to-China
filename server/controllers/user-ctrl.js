const User = require('../models/user-model');

createUser = (req, res) => {
    const body = req.body

    if(!body) {
        return res.status(400).json({
            success: false,
            messgae: 'You must provide a body'
        })
    }

    const user = new User(body);
    if (!user)
        return res.status(400).json({success: false, message: err})
    user
        .save()
        .then(() => res.status(201).json({
            success: true,
            id: user._id,
            message: 'User added successfully'
        }))
        .catch((err) => res.status(400).json({
            err,
            message: 'azer'
        }))
}

updateUser = async (req, res) => {
    const body = req.body

    if(!body) {
        return res.status(400).json({
            success: false,
            messgae: 'You must provide a body'
        });
    }
    User.findOne({ _id: req.param.id }, (err, user) => {
        if (err)
            return res.status(404).json({ err, message: 'user not found' });
        user.name = body.name;
        user.password = body.password;
        user.phone = body.phone;
        user.address = body.address;
        user
            .save()
            .then(() => res.status(200).json({
                success: true,
                id: user._id,
                message: 'User updated successfully'
            }))
            .catch((error) => res.status(404).json({
                error,
                message: 'User not updated'
            }))
    })
}

deleteUser = async (req, res) => {
    await User.findOneAndDelete({ _id: req.param.id }, (err, user) => {
        if(err)
            return res.status(400).json({ err});
        if(!user)
            return res.status(404).json({success: false, error: 'user not found'});
        return res.status(200).json({ success: true, user: user })
    }).catch(err => console.error(err));
}

getUserById = async (req, res) => {
    await User.findOne({ _id: req.param.id }, (err, user) => {
        if(err)
            return res.status(400).json({ err});
        if(!user)
            return res.status(404).json({success: false, error: 'user not found'});
        return res.status(200).json({ success: true, user: user })
    }).catch(err => console.error(err));
}

getUsers = async (req, res) => {
    await User.findOne({}, (err, users) => {
        if(err)
            return res.status(400).json({ err});
        if(!users)
            return res.status(404).json({success: false, error: 'users not found'});
        return res.status(200).json({ success: true, users: users })
    }).catch(err => console.error(err));
}

module.exports = {
    createUser,
    updateUser,
    deleteUser,
    getUserById,
    getUsers,
};
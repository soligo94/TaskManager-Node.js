// This file manages the HTTP Requests and responds the client, using the services from UserServices
const userService = require('../services/userServices');

const getAllUsers = async (req, res) => {
    try 
    {
        const users = await userService.getAllUsers();
        res.json(users);
    } 
    catch (err) 
    {
        res.status(500).send('Error getting user data: ' + err.message);
    }
};

const getUserById = async (req, res) => {
    const { id } = req.params;

    try 
    {
        const user = await userService.getUserById(id);

        if (user) 
        {
            res.json(user);
        } else 
        {
            res.status(404).send('User not found');
        }
    } 
    catch (err)
    {
        res.status(500).send('Error getting user data: ' + err.message);
    }
};

const getUserByUsername = async (req, res) =>{
    const { username } = req.params;

    try 
    {
        const user = await userService.getUserByUsername(username);

        if (user) 
        {
            res.json(user);
        } else 
        {
            res.status(404).send('User not found');
        }

    } 
    catch (err) 
    {
        res.status(500).send('Error getting user data: ' + err.message);
    }
};

const getUserByEmail = async (req, res) =>{
    const { email } = req.params;

    try 
    {
        const user = await userService.getUserByEmail(email);

        if (user) 
        {
            res.json(user);
        } else 
        {
            res.status(404).send('User not found');
        }
    } 
    catch (err) 
    {
        res.status(500).send('Error getting user data: ' + err.message);
    }
};

const createUser = async (req, res) => {
    const { username, email, password } = req.body;
    try 
    {
        await userService.createUser({ username, email, password });
        res.status(200).send('User created successfully');
    } 
    catch (err) 
    {
        res.status(500).send('Error creating user: ' + err.message);
    }
};

const updateUser = async (req, res) => {
    const { id } = req.params;
    const { name, email, password } = req.body;

    try 
    {
        await userService.updateUser(id, { name, email, password });
        res.send('User updated successfully');
    } 
    catch (err)
    {
        res.status(500).send('Error updating user ' + err.message);
    }
};

const deleteUser = async (req, res) => {
    const { id } = req.params;

    try 
    {
        await userService.deleteUser(id);
        res.send('User deleted successfully');
    } 
    catch (err) 
    {
        res.status(500).send('Error deleting user: ' + err.message);
    }

};

const loginUser = async (req, res) => {
    const { email, password } = req.body;

    try 
    {
        const user = await userService.verifyPassword(email, password);
        res.json({ message: 'Login successfull', user });
    } 
    catch (err) 
    {
        res.status(401).send('Login error: ' + err.message);
    }
};

module.exports = {
    getAllUsers,
    getUserById,
    getUserByUsername,
    getUserByEmail,
    createUser,
    updateUser,
    deleteUser,
    loginUser
};
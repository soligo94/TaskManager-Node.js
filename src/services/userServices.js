// This file implements the buisiness logic, interacting with User's model.
const bcrypt = require('bcrypt');
const userModel = require('../models/userModel');

async function getAllUsers() {
    const result = await userModel.getAllUsers();
    return result;
};

async function getUserById(id) {
    const result = await userModel.getUserById(id);
    return result;
};

async function getUserByUsername(username) {
    const result = await userModel.getUserByUsername(username);
    return result;
};

async function getUserByEmail(email) {
    const result = await userModel.getUserByEmail(email);
    return result;
};

async function createUser(data) {
    const hashedPassword = await bcrypt.hash(data.password, 10);
    await userModel.createUser(data.username, data.email, hashedPassword);
};

async function updateUser(id, data) {
    const hashedPassword = await bcrypt.hash(data.password, 10);
    await userModel.updateUser(id, data.username, data.email, hashedPassword);
};

async function deleteUser(id) {
    await userModel.deleteUser(id);
};

async function verifyPassword(email, password) {
    const user = await getUserByEmail(email);

    if (!user) 
    {
        throw new Error('User not found');
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) 
    {
        throw new Error('Email or password are invalid. Please be sure that you are login in with correct credentials.');
    }

    return user;
};

module.exports = {
    getAllUsers,
    getUserById,
    getUserByUsername,
    getUserByEmail,
    createUser,
    updateUser,
    deleteUser,
    verifyPassword
};
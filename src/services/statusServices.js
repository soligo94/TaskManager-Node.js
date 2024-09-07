// This file implements the buisiness logic, interacting with Status model.
const statusModel = require('../models/statusModel');

async function getStatus() {
    const result = await statusModel.getStatus();
    return result;
};

async function getStatusById(id) {
    const result = await statusModel.getStatusById(id);
    return result;
};

async function createStatus(data) {
    await statusModel.createStatus(data.statusName);
};

async function updateStatus(id, statusName) {
    await statusModel.updateStatus(id, statusName);
};

async function deleteStatus(id) {
    await statusModel.deleteStatus(id);
};

module.exports = {
    getStatus,
    getStatusById,
    createStatus,
    updateStatus,
    deleteStatus
};
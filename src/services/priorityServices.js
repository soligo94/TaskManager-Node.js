// This file implements the buisiness logic, interacting with Priority's model.
const priorityModel = require('../models/priorityModel');

async function getPriorities() {
    const result = await priorityModel.getPriorities();
    return result;
};

async function getPriorityById(id) {
    const result = await priorityModel.getPriorityById(id);
    return result;
};

async function createPriority(data) {
    await priorityModel.createPriority(data.priorityName);
};

async function updatePriority(id, priorityName) {
    await priorityModel.updatePriority(id, priorityName);
};

async function deletePriority(id) {
    await priorityModel.deletePriority(id);
};

module.exports = {
    getPriorities,
    getPriorityById,
    createPriority,
    updatePriority,
    deletePriority
};
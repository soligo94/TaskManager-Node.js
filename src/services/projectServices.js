// This file implements the buisiness logic, interacting with Project's model.
const projectModel = require('../models/projectModel');

async function getProjectsByUser(id) {
    const result = await projectModel.getProjectsByUser(id);
    return result;
};

async function createProject(data) {
    await projectModel.createProject(data.projectName, data.userId);
};

async function updateProject(id, projectName) {
    await projectModel.updateProject(id, projectName);
};

async function deleteProject(id) {
    await projectModel.deleteProject(id);
};

module.exports = {
    getProjectsByUser,
    createProject,
    updateProject,
    deleteProject
};
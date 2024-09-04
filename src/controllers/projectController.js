// This file manages the HTTP Requests and responds the client, using the services from projectServices
const projectService = require('../services/projectServices');

const getProjectsByUser = async (req, res) => {
    const { id } = req.params;

    try 
    {
        const projects = await projectService.getProjectsByUser(id);

        if (projects) 
        {
            res.json(projects);
        } 
        else 
        {
            res.status(404).send('Projects not found');
        }
    } 
    catch (err)
    {
        res.status(500).send('Error getting project data: ' + err.message);
    }
};

const createProject = async (req, res) => {
    const { projectName, userId } = req.body;
    try 
    {
        await projectService.createProject({ projectName, userId });
        res.status(200).send('Project created successfully');
    } 
    catch (err) 
    {
        res.status(500).send('Error creating project: ' + err.message);
    }
};

const updateProject = async (req, res) => {
    const { id } = req.params;
    const { projectName } = req.body;

    try 
    {
        await projectService.updateProject(id, projectName);
        res.send('Project updated successfully');
    } 
    catch (err)
    {
        res.status(500).send('Error updating project ' + err.message);
    }
};

const deleteProject = async (req, res) => {
    const { id } = req.params;

    try 
    {
        await projectService.deleteProject(id);
        res.send('Project deleted successfully');
    } 
    catch (err) 
    {
        res.status(500).send('Error deleting project: ' + err.message);
    }

};


module.exports = {
    getProjectsByUser,
    updateProject,
    deleteProject,
    createProject
};
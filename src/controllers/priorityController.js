// This file manages the HTTP Requests and responds the client, using the services from priorityServices
const priorityServices = require('../services/priorityServices');
const console = require('console')
const getPriorities = async (req, res) => {
    try 
    {
        const priorities = await priorityServices.getPriorities();

        if (priorities) 
        {
            res.json(priorities);
        } 
        else 
        {
            res.status(404).send('Priorities not found');
        }
    } 
    catch (err)
    {
        res.status(500).send('Error getting priority data: ' + err.message);
    }
};

const getPriorityById = async (req, res) => {
    const { id } = req.params;

    try 
    {
        const priorities = await priorityServices.getPriorityById(id);

        if (priorities) 
        {
            res.json(priorities);
        } 
        else 
        {
            res.status(404).send('Priorities not found');
        }
    } 
    catch (err)
    {
        res.status(500).send('Error getting priority data: ' + err.message);
    }
};

const createPriority= async (req, res) => {
    const { priorityName } = req.body;
    try 
    {
        await priorityServices.createPriority({ priorityName });
        res.status(200).send('Priority created successfully');
    } 
    catch (err) 
    {
        res.status(500).send('Error creating priority: ' + err.message);
    }
};

const updatePriority = async (req, res) => {
    const { id } = req.params;
    const { priorityName } = req.body;
    
    try 
    {
        console.log("llego aqui? " + priorityName + id)
        await priorityServices.updatePriority(id, priorityName);
        res.send('Priority updated successfully');
    } 
    catch (err)
    {
        res.status(500).send('Error updating priority ' + err.message);
    }
};

const deletePriority = async (req, res) => {
    const { id } = req.params;

    try 
    {
        await priorityName.deletePriority(id);
        res.send('Priority deleted successfully');
    } 
    catch (err) 
    {
        res.status(500).send('Error deleting ppriority: ' + err.message);
    }

};


module.exports = {
    getPriorities,
    getPriorityById,
    createPriority,
    updatePriority,
    deletePriority
};
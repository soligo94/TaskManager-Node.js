// This file manages the HTTP Requests and responds the client, using the services from statusServices
const statusServices = require('../services/statusServices');


const getStatus = async (req, res) => {
    try 
    {
        const status = await statusServices.getStatus();

        if (status) 
        {
            res.json(status);
        } 
        else 
        {
            res.status(404).send('Status not found');
        }
    } 
    catch (err)
    {
        res.status(500).send('Error getting status data: ' + err.message);
    }
};

const getStatusById = async (req, res) => {
    const { id } = req.params;

    try 
    {
        const status = await statusServices.getStatusById(id);

        if (status) 
        {
            res.json(status);
        } 
        else 
        {
            res.status(404).send('Status not found');
        }
    } 
    catch (err)
    {
        res.status(500).send('Error getting status data: ' + err.message);
    }
};

const createStatus= async (req, res) => {
    const { statusName } = req.body;
    try 
    {
        await statusServices.createStatus({ statusName });
        res.status(200).send('Status created successfully');
    } 
    catch (err) 
    {
        res.status(500).send('Error creating status: ' + err.message);
    }
};

const updateStatus = async (req, res) => {
    const { id } = req.params;
    const { statusName } = req.body;
    
    try 
    {
        await statusServices.updatestatus(id, statusName);
        res.send('status updated successfully');
    } 
    catch (err)
    {
        res.status(500).send('Error updating status ' + err.message);
    }
};

const deleteStatus = async (req, res) => {
    const { id } = req.params;

    try 
    {
        await statusServices.deleteStatus(id);
        res.send('Status deleted successfully');
    } 
    catch (err) 
    {
        res.status(500).send('Error deleting Status: ' + err.message);
    }

};


module.exports = {
    getStatus,
    getStatusById,
    createStatus,
    updateStatus,
    deleteStatus
};
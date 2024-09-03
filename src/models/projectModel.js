// this file contains the related operations with the database using the User model data.
const { sql, connectDB } = require('../config/db');
const console = require('console');

async function getProjectsByUser(id) {
    let db;

    try
    {
        //connect to database
        db = await connectDB();

        //create the query
        let result = await db.request()
            .input('UserId', sql.Int, id)
            .query('SELECT * FROM [dbo].[Projects] where UserId = @UserId');

        //check if it has some result (result contains recordset and recordset is an array with the results of the select
        // thats why we check if its length is > 0)
        if (result && result.recordset && result.recordset.length > 0) 
        {
            return result.recordset;
        } 
        else
        {
            console.log('No users find.');
            return [];
        }
    }
    catch(err)
    {
        console.log('Error during user search');
        throw err;
    }
    finally
    {
        //even the query causes an error or not, we disconnect the connection to DB
        if(db){
            db.close();
        }
    }
};

async function createProject(projectName, userId) {
    let db;

    try
    {
        //connect to database
        db = await connectDB();

        //create the query (shall know previously which type is each column or may cause errors)
        await db.request()
            .input('ProjectName', sql.VarChar, projectName)
            .input('UserId', sql.Int, userId)
            .query('INSERT INTO [dbo].[Projects] (ProjectName, UserId) VALUES (@ProjectName, @UserId)');
        
        console.log('Project created successfully!');
    }
    catch(err)
    {
        console.log('Error during user creation');
        throw err;
    }
    finally
    {
        //even the query causes an error or not, we disconnect the connection to DB
        if(db){
            db.close();
        }
    }
};

async function updateProject(id, projectName) {
    let db;
    console.log('update: ' + id + ' ' + projectName)
    try
    {
        //connect to database
        db = await connectDB();

        //create the query (shall know previously which type is each column or may cause errors)
        await db.request()
            .input('ProjectName', sql.VarChar, projectName)
            .input('Id', sql.Int, id)
            .query('UPDATE [dbo].[Projects] SET ProjectName = @ProjectName WHERE Id = @Id');
        
        console.log('Project updated successfully!');
    }
    catch(err)
    {
        console.log('Error during project update');
        throw err;
    }
    finally
    {
        //even the query causes an error or not, we disconnect the connection to DB
        if(db){
            db.close();
        }
    }
};

async function deleteProject(id) {
    let db;

    try
    {
        //connect to database
        db = await connectDB();

        //create the query (shall know previously which type is each column or may cause errors)
        await db.request()
            .input('Id', sql.Int, id)
            .query('DELETE FROM [dbo].[Projects] WHERE Id = @Id');
        
        console.log('Project deleted successfully!');
    }
    catch(err)
    {
        console.log('Error during project deletion');
        throw err;
    }
    finally
    {
        //even the query causes an error or not, we disconnect the connection to DB
        if(db){
            db.close();
        }
    }
};

module.exports = {
    getProjectsByUser,
    createProject,
    updateProject,
    deleteProject
};
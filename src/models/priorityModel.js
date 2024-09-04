// this file contains the related operations with the database using the priority model data.
const { sql, connectDB } = require('../config/db');

async function getPriorities() {
    let db;

    try
    {
        //connect to database
        db = await connectDB();

        //create the query
        let result = await db.request()
            .query('SELECT * FROM [dbo].[Priority]');

        //check if it has some result (result contains recordset and recordset is an array with the results of the select
        // thats why we check if its length is > 0)
        if (result && result.recordset && result.recordset.length > 0) 
        {
            return result.recordset;
        } 
        else
        {
            console.log('No priorities find.');
            return [];
        }
    }
    catch(err)
    {
        console.log('Error during priorities search');
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

async function getPriorityById(id) {
    let db;

    try
    {
        //connect to database
        db = await connectDB();

        //create the query
        let result = await db.request()
            .input('Id', sql.Int, id)
            .query('SELECT * FROM [dbo].[Priority] where Id = @Id');

        //check if it has some result (result contains recordset and recordset is an array with the results of the select
        // thats why we check if its length is > 0)
        if (result && result.recordset && result.recordset.length > 0) 
        {
            return result.recordset;
        } 
        else
        {
            console.log('No priority find.');
            return [];
        }
    }
    catch(err)
    {
        console.log('Error during priority search');
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

async function createPriority(priorityName) {
    let db;

    try
    {
        //connect to database
        db = await connectDB();

        //create the query (shall know previously which type is each column or may cause errors)
        await db.request()
            .input('PriorityLevel', sql.VarChar, priorityName)
            .query('INSERT INTO [dbo].[Priority] (PriorityLevel) VALUES (@PriorityLevel)');
        
        console.log('Priority created successfully!');
    }
    catch(err)
    {
        console.log('Error during priority creation');
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

async function updatePriority(id, priorityName) {
    let db;

    try
    {
        //connect to database
        db = await connectDB();

        //create the query (shall know previously which type is each column or may cause errors)
        await db.request()
            .input('PriorityLevel', sql.VarChar, priorityName)
            .input('Id', sql.Int, id)
            .query('UPDATE [dbo].[Priority] SET PriorityLevel = @PriorityLevel WHERE Id = @Id');
        
        console.log('Priority updated successfully!');
    }
    catch(err)
    {
        console.log('Error during priority update');
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

async function deletePriority(id) {
    let db;

    try
    {
        //connect to database
        db = await connectDB();

        //create the query (shall know previously which type is each column or may cause errors)
        await db.request()
            .input('Id', sql.Int, id)
            .query('DELETE FROM [dbo].[Priority] WHERE Id = @Id');
        
        console.log('Priority deleted successfully!');
    }
    catch(err)
    {
        console.log('Error during priority deletion');
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
    getPriorities,
    getPriorityById,
    updatePriority,
    deletePriority,
    createPriority
};
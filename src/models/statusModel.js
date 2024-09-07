// this file contains the related operations with the database using the Status model data.
const { sql, connectDB } = require('../config/db');

async function getStatus() {
    let db;

    try
    {
        //connect to database
        db = await connectDB();

        //create the query
        let result = await db.request()
            .query('SELECT * FROM [dbo].[Status]');

        //check if it has some result (result contains recordset and recordset is an array with the results of the select
        // thats why we check if its length is > 0)
        if (result && result.recordset && result.recordset.length > 0) 
        {
            return result.recordset;
        } 
        else
        {
            console.log('No status find.');
            return [];
        }
    }
    catch(err)
    {
        console.log('Error during status search');
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

async function getStatusById(id) {
    let db;

    try
    {
        //connect to database
        db = await connectDB();

        //create the query
        let result = await db.request()
            .input('Id', sql.Int, id)
            .query('SELECT * FROM [dbo].[Status] where Id = @Id');

        //check if it has some result (result contains recordset and recordset is an array with the results of the select
        // thats why we check if its length is > 0)
        if (result && result.recordset && result.recordset.length > 0) 
        {
            return result.recordset;
        } 
        else
        {
            console.log('No Status find.');
            return [];
        }
    }
    catch(err)
    {
        console.log('Error during Status search');
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

async function createStatus(statusName) {
    let db;

    try
    {
        //connect to database
        db = await connectDB();

        //create the query (shall know previously which type is each column or may cause errors)
        await db.request()
            .input('StatusName', sql.VarChar, statusName)
            .query('INSERT INTO [dbo].[Status] (StatusName) VALUES (@StatusName)');
        
        console.log('Status created successfully!');
    }
    catch(err)
    {
        console.log('Error during Status creation');
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

async function updateStatus(id, statusName) {
    let db;

    try
    {
        //connect to database
        db = await connectDB();

        //create the query (shall know previously which type is each column or may cause errors)
        await db.request()
            .input('StatusName', sql.VarChar, statusName)
            .input('Id', sql.Int, id)
            .query('UPDATE [dbo].[Status] SET StatusName = @StatusName WHERE Id = @Id');
        
        console.log('Status updated successfully!');
    }
    catch(err)
    {
        console.log('Error during Status update');
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

async function deleteStatus(id) {
    let db;

    try
    {
        //connect to database
        db = await connectDB();

        //create the query (shall know previously which type is each column or may cause errors)
        await db.request()
            .input('Id', sql.Int, id)
            .query('DELETE FROM [dbo].[Status] WHERE Id = @Id');
        
        console.log('Status deleted successfully!');
    }
    catch(err)
    {
        console.log('Error during Status deletion');
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
    getStatus,
    getStatusById,
    updateStatus,
    deleteStatus,
    createStatus
};
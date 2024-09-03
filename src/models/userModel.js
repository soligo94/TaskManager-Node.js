// this file contains the related operations with the database using the User model data.
const { sql, connectDB } = require('../config/db');

async function getAllUsers() {
    let db;

    try
    {
        //connect to database
        db = await connectDB();

        //create the query
        let result = await db.request()
            .query('SELECT * FROM [dbo].[Users]');

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

async function getUserById(id) {
    let db;

    try
    {
        //connect to database
        db = await connectDB();

        //create the query
        let result = await db.request()
            .input('Id', sql.Int, id)
            .query('SELECT * FROM [dbo].[Users] where Id = @Id');

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

async function getUserByUsername(username) {
    let db;

    try
    {
        //connect to database
        db = await connectDB();

        //create the query
        let result = await db.request()
            .input('Username', sql.VarChar, username)
            .query('SELECT * FROM [dbo].[Users] where Username = @Username');

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

async function getUserByEmail(email) {
    let db;

    try
    {
        //connect to database
        db = await connectDB();

        //create the query
        let result = await db.request()
            .input('Email', sql.VarChar, email)
            .query('SELECT * FROM [dbo].[Users] where Email = @Email');

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

async function createUser(username, email, password) {
    let db;

    try
    {
        //connect to database
        db = await connectDB();

        //create the query (shall know previously which type is each column or may cause errors)
        await db.request()
            .input('Username', sql.VarChar, username)
            .input('Email', sql.VarChar, email)
            .input('Password', sql.NVarChar, password)
            .query('INSERT INTO [dbo].[Users] (Username, Email, Password) VALUES (@Username, @Email, @Password)');
        
        console.log('User created successfully!');
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

async function updateUser(id, username, email, password) {
    let db;

    try
    {
        //connect to database
        db = await connectDB();

        //create the query (shall know previously which type is each column or may cause errors)
        await db.request()
            .input('Username', sql.VarChar, username)
            .input('Email', sql.VarChar, email)
            .input('Password', sql.NVarChar, password)
            .input('Id', sql.Int, id)
            .query('UPDATE [dbo].[Users] SET Username = @Username, Email = @Email, Password = @Password WHERE Id = @Id');
        
        console.log('User updated successfully!');
    }
    catch(err)
    {
        console.log('Error during user update');
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

async function deleteUser(id) {
    let db;

    try
    {
        //connect to database
        db = await connectDB();

        //create the query (shall know previously which type is each column or may cause errors)
        await db.request()
            .input('Id', sql.Int, id)
            .query('DELETE FROM [dbo].[Users] WHERE Id = @Id');
        
        console.log('User deleted successfully!');
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

module.exports = {
    getAllUsers,
    getUserById,
    getUserByUsername,
    getUserByEmail,
    createUser,
    updateUser,
    deleteUser
};
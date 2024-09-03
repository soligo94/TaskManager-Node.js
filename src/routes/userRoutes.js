// This file defines the API routes and links them to their controllers.
const express = require('express');
const {
    createUser,
    getAllUsers,
    getUserById,
    getUserByUsername,
    getUserByEmail,
    updateUser,
    loginUser,
    deleteUser
} = require('../controllers/userController');

const router = express.Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       required:
 *         - id
 *         - username
 *         - email
 *         - password
 *       properties:
 *         id:
 *           type: integer
 *           description: User Id
 *         username:
 *           type: string
 *           description: Username
 *         email:
 *           type: string
 *           description: User email
 *         password:
 *           type: string
 *           description: Password
 *       example:
 *         id: 1
 *         username: John Doe
 *         email: JohnDoe@john.net
 *         password: JhonDoePwd_
 *
 */

/**
 * @swagger
 * /users:
 *   get:
 *     summary: Gets a list of users
 *     tags: [Users]
 *     responses:
 *       200:
 *         description: User's list
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/User'
 */
router.get('/users', getAllUsers);


/**
 * @swagger
 * /users/{id}:
 *   get:
 *     summary: Gets an user by ID
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: User ID
 *     responses:
 *       200:
 *         description: User found
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       404:
 *         description: User not found
 */
router.get('/users/:id', getUserById);

/**
 * @swagger
 * /users/{username}:
 *   get:
 *     summary: Gets an user by username
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: username
 *         schema:
 *           type: string
 *         required: true
 *         description: Username
 *     responses:
 *       200:
 *         description: User found
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       404:
 *         description: User not found
 */
router.get('/users/:username', getUserByUsername);

/**
 * @swagger
 * /users/{email}:
 *   get:
 *     summary: Gets an user by Email
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: email
 *         schema:
 *           type: string
 *         required: true
 *         description: User email
 *     responses:
 *       200:
 *         description: User found
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       404:
 *         description: User not found
 */
router.get('/users/:email', getUserByEmail);

/**
 * @swagger
 * /users:
 *   post:
 *     summary: Creates a new user
 *     description: Adds a new user to Database
 *     tags: [Users]
 *     requestBody:
 *       description: User object to be added in Db
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *                 example: username94
 *               email:
 *                 type: string
 *                 example: username@example.com
 *               password:
 *                 type: string
 *                 example: PasWoRd1234
 *     responses:
 *       '201':
 *         description: User created successfully
 *         content:
 *           application/json:
 *             example:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: User created
 *                 data:
 *                   type: object
 *                   properties:
 *                     username:
 *                       type: string
 *                       example: username94
 *                     email:
 *                       type: string
 *                       example: username@example.com
 *                     password:
 *                       type: string
 *                       example: PasWoRd1234
 *       '400':
 *         description: Bad request
 */

router.post('/users', createUser);

/**
 * @swagger
 * /users/{id}:
 *   put:
 *     summary: Updates an user
 *     description: Updates an user in Database.
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: user ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *                 example: username94
 *               email:
 *                 type: string
 *                 example: username@example.com
 *               password:
 *                 type: string
 *                 example: PasWoRd1234
 *     responses:
 *       '201':
 *         description: User updated successfully
 *         content:
 *           application/json:
 *             example:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Usuario creado
 *                 data:
 *                   type: object
 *                   properties:
 *                     username:
 *                       type: string
 *                       example: username94
 *                     email:
 *                       type: string
 *                       example: username@example.com
 *                     password:
 *                       type: string
 *                       example: PasWoRd1234
 *       '400':
 *         description: Bad request
 */

router.put('/users/:id', updateUser);

/**
 * @swagger
 * /users/{id}:
 *   delete:
 *     summary: Deletes an user
 *     description: Deletes an user in Database.
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: user id
 *     responses:
 *       '201':
 *         description: User delete successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: User deleted
 *                 data:
 *                   type: object
 *                   properties:
 *                     username:
 *                       type: string
 *                       example: username94
 *                     email:
 *                       type: string
 *                       example: username@example.com
 *                     password:
 *                       type: string
 *                       example: PasWoRd1234
 *       '400':
 *         description: Bad request
 */
router.delete('/users/:id', deleteUser);

/**
 * @swagger
 * /users/login:
 *   post:
 *     summary: Log in with an user
 *     description: Logs with an user
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *              username:
 *                 type: string
 *                 example: username94
 *              password:
 *                 type: string
 *                 example: PasWoRd1234
 *     responses:
 *       '201':
 *         description: Login successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: User loged
 *                 data:
 *                   type: object
 *                   properties:
 *                     username:
 *                       type: string
 *                       example: username94
 *                     password:
 *                       type: string
 *                       example: PasWoRd1234
 *       '400':
 *         description: User or password incorrect
 */
router.post('/users/login', loginUser); 

module.exports = router;
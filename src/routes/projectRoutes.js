// This file defines the API routes and links them to their controllers.
const express = require('express');
const {
    getProjectsByUser,
    updateProject,
    deleteProject,
    createProject
} = require('../controllers/projectController');

const router = express.Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     Project:
 *       type: object
 *       required:
 *         - id
 *         - projectName
 *         - userId
 *       properties:
 *         id:
 *           type: integer
 *           description: Id
 *         projectName:
 *           type: string
 *           description: name of the project
 *         userId:
 *           type: integer
 *           description: User Id owner of the project
 *       example:
 *         id: 1
 *         projectName: Task manager developer
 *         userId: 1
 */

/**
 * @swagger
 * /projects/{id}:
 *   get:
 *     summary: Gets a project by user ID
 *     tags: [Projects]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: User ID
 *     responses:
 *       200:
 *         description: Project found
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Project'
 *       404:
 *         description: Project not found
 */
router.get('/projects/:id', getProjectsByUser);

/**
 * @swagger
 * /projects:
 *   post:
 *     summary: Creates a new Project
 *     description: Adds a new Project to Database
 *     tags: [Projects]
 *     requestBody:
 *       description: Project object to be added in Db
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               projectName:
 *                 type: string
 *                 example: Task Manager project
 *               userId:
 *                 type: integer
 *                 example: 1
 *     responses:
 *       '201':
 *         description: Project created successfully
 *         content:
 *           application/json:
 *             example:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Project created
 *                 data:
 *                   type: object
 *                   properties:
 *                     projectName:
 *                       type: string
 *                       example: Task Manager project
 *                     userId:
 *                       type: integer
 *                       example: 1
 *       '400':
 *         description: Bad request
 */

router.post('/projects', createProject);

/**
 * @swagger
 * /projects/{id}:
 *   put:
 *     summary: Updates a project
 *     description: Updates a project in Database.
 *     tags: [Projects]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Project ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               projectName:
 *                 type: string
 *                 example: Task Manager Project
 *     responses:
 *       '201':
 *         description: Project updated successfully
 *         content:
 *           application/json:
 *             example:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Project updated
 *                 data:
 *                   type: object
 *                   properties:
 *                     projectName:
 *                       type: string
 *                       example: Task Manager Project
 *       '400':
 *         description: Bad request
 */

router.put('/projects/:id', updateProject);

/**
 * @swagger
 * /projects/{id}:
 *   delete:
 *     summary: Deletes a project
 *     description: Deletes a project in Database.
 *     tags: [Projects]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Project id
 *     responses:
 *       '201':
 *         description: Project deleted successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Project deleted
 *                 data:
 *                   type: object
 *                   properties:
 *                     projectName:
 *                       type: string
 *                       example: Project Task Manager
 *                     userId:
 *                       type: integer
 *                       example: 1
 *       '400':
 *         description: Bad request
 */
router.delete('/projects/:id', deleteProject);

module.exports = router;
// This file defines the API routes and links them to their controllers.
const express = require('express');
const {
    getPriorities,
    getPriorityById,
    updatePriority,
    createPriority,
    deletePriority
} = require('../controllers/priorityController');

const router = express.Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     Priority:
 *       type: object
 *       required:
 *         - id
 *         - priorityName
 *       properties:
 *         id:
 *           type: integer
 *           description: Id
 *         priorityName:
 *           type: string
 *           description: priority name
 *       example:
 *         id: 1
 *         projectName: High
 */

/**
 * @swagger
 * /priorities:
 *   get:
 *     summary: Gets a list of priorities
 *     tags: [Priorities]
 *     responses:
 *       200:
 *         description: Priorities list
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Priority'
 */
router.get('/priorities', getPriorities);

/**
 * @swagger
 * /priorities/{id}:
 *   get:
 *     summary: Gets a priority by ID
 *     tags: [Priorities]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: priority ID
 *     responses:
 *       200:
 *         description: Priority found
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Priority'
 *       404:
 *         description: Priority not found
 */
router.get('/priorities/:id', getPriorityById);

/**
 * @swagger
 * /priorities:
 *   post:
 *     summary: Creates a new priority
 *     description: Adds a new priority to Database
 *     tags: [Priorities]
 *     requestBody:
 *       description: Priority object to be added in Db
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               priorityName:
 *                 type: string
 *                 example: Low
 *     responses:
 *       '201':
 *         description: Priority created successfully
 *         content:
 *           application/json:
 *             example:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Priority created
 *                 data:
 *                   type: object
 *                   properties:
 *                     priorityName:
 *                       type: string
 *                       example: Low
 *       '400':
 *         description: Bad request
 */

router.post('/priorities', createPriority);

/**
 * @swagger
 * /priorities/{id}:
 *   put:
 *     summary: Updates a priority
 *     description: Updates a priority in Database.
 *     tags: [Priorities]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Priority ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               priorityName:
 *                 type: string
 *                 example: Low
 *     responses:
 *       '201':
 *         description: Priority updated successfully
 *         content:
 *           application/json:
 *             example:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Priority updated
 *                 data:
 *                   type: object
 *                   properties:
 *                     priorityName:
 *                       type: string
 *                       example: Low
 *       '400':
 *         description: Bad request
 */

router.put('/priorities/:id', updatePriority);

/**
 * @swagger
 * /priorities/{id}:
 *   delete:
 *     summary: Deletes a priority
 *     description: Deletes a priority in Database.
 *     tags: [Priorities]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Priority id
 *     responses:
 *       '201':
 *         description: Priority deleted successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Priority deleted
 *                 data:
 *                   type: object
 *                   properties:
 *                     priorityName:
 *                       type: string
 *                       example: Low
 *       '400':
 *         description: Bad request
 */
router.delete('/priorities/:id', deletePriority);

module.exports = router;
// This file defines the API routes and links them to their controllers.
const express = require('express');
const {
    getStatus,
    getStatusById,
    updateStatus,
    createStatus,
    deleteStatus
} = require('../controllers/statusController');

const router = express.Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     Status:
 *       type: object
 *       required:
 *         - id
 *         - statusName
 *       properties:
 *         id:
 *           type: integer
 *           description: Id
 *         statusName:
 *           type: string
 *           description: Status name
 *       example:
 *         id: 1
 *         projectName: High
 */

/**
 * @swagger
 * /status:
 *   get:
 *     summary: Gets a list of status
 *     tags: [Status]
 *     responses:
 *       200:
 *         description: status list
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Status'
 */
router.get('/status', getStatus);

/**
 * @swagger
 * /status/{id}:
 *   get:
 *     summary: Gets a Status by ID
 *     tags: [Status]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Status ID
 *     responses:
 *       200:
 *         description: Status found
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Status'
 *       404:
 *         description: Status not found
 */
router.get('/status/:id', getStatusById);

/**
 * @swagger
 * /status:
 *   post:
 *     summary: Creates a new Status
 *     description: Adds a new Status to Database
 *     tags: [Status]
 *     requestBody:
 *       description: Status object to be added in Db
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               statusName:
 *                 type: string
 *                 example: Done
 *     responses:
 *       '201':
 *         description: Status created successfully
 *         content:
 *           application/json:
 *             example:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Status created
 *                 data:
 *                   type: object
 *                   properties:
 *                     statusName:
 *                       type: string
 *                       example: Done
 *       '400':
 *         description: Bad request
 */

router.post('/status', createStatus);

/**
 * @swagger
 * /status/{id}:
 *   put:
 *     summary: Updates a Status
 *     description: Updates a Status in Database.
 *     tags: [Status]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Status ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               statusName:
 *                 type: string
 *                 example: Done
 *     responses:
 *       '201':
 *         description: Status updated successfully
 *         content:
 *           application/json:
 *             example:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Status updated
 *                 data:
 *                   type: object
 *                   properties:
 *                     statusName:
 *                       type: string
 *                       example: Done
 *       '400':
 *         description: Bad request
 */

router.put('/status/:id', updateStatus);

/**
 * @swagger
 * /status/{id}:
 *   delete:
 *     summary: Deletes a Status
 *     description: Deletes a Status in Database.
 *     tags: [Status]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Status id
 *     responses:
 *       '201':
 *         description: Status deleted successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Status deleted
 *                 data:
 *                   type: object
 *                   properties:
 *                     statusName:
 *                       type: string
 *                       example: Done
 *       '400':
 *         description: Bad request
 */
router.delete('/status/:id', deleteStatus);

module.exports = router;
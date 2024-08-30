// routes/users.js
const express = require('express');
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
 *           description: ID del usuario
 *         username:
 *           type: string
 *           description: Nombre del usuario
 *       example:
 *         id: 1
 *         username: John Doe
 */

/**
 * @swagger
 * /users:
 *   get:
 *     summary: Obtiene una lista de usuarios
 *     tags: [Users]
 *     responses:
 *       200:
 *         description: Lista de usuarios
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/User'
 */
router.get('/', (req, res) => {
  res.json([
    { id: 1, username: 'John Doe',  email: 'johndoe@test.org', password: '######'},
    { id: 2, username: 'Daniel Soligo',  email: 'soligo@test.org', password: '######'}
  ]);
});

/**
 * @swagger
 * /users/{id}:
 *   get:
 *     summary: Obtiene un usuario por ID
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID del usuario
 *     responses:
 *       200:
 *         description: Usuario encontrado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       404:
 *         description: Usuario no encontrado
 */
router.get('/:id', (req, res) => {
  const user = { id: req.params.id, username: 'John Doe' };
  res.json(user);
});

module.exports = router;
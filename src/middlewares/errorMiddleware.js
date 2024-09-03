// This file contains the middleware for the error handling, that is used to centralize the error management.
function errorHandler(err, req, res, next) {
    console.error(err.stack);
    res.status(500).json({ message: 'Internal server error: ', error: err.message });
}

module.exports = errorHandler;
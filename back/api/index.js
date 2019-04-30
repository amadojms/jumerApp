let router = require('express').Router();

// Ruta default - mensaje
router.get('/', function (req, res) {
    res.json({
        status: 'API Trabajando',
        message: 'Bienvenido, api ChurchApp hecho con Amor!',
    });
});

// Import contact controller
var contactController = require('./contactController');

// Feed route
router.route('/contacts')
    .get(contactController.index);

// Contact routes
router.route('/groups')
    .get(contactController.index)
    .post(contactController.new);

router.route('/groups/:contact_id')
    .get(contactController.view)
    .patch(contactController.update)
    .put(contactController.update)
    .delete(contactController.delete);

// Export API routes
module.exports = router;
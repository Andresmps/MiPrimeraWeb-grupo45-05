import express from 'express';
const router = express.Router();

// Importar modelos
const customers_bd = require('../models/customer');
const employees_bd = require('../models/employee');
const services_bd = require('../models/service');

// Customers

router.post('/new_customer', async (req, res) => {

    try {
        const new_customer = await customers_bd.create(req.body);
        res.status(200).json(new_customer);
    } catch (error) {
        return res.status(500).json({
            mensaje: 'Ocurrio algo inesperado al añadir un nuevo cliente. Error: ' +
                error
        })
    }
});

router.get('/get_customer/:id', async (req, res) => {
    const _id = req.params.id;

    try {
        const customer_ = await customers_bd.findOne({ _id });

        if (!customer_) {
            return res.status(400).json({
                mensaje: 'No se encontro el cliente: ' + _id + '.'
            })
        }

        res.json(customer_);
    } catch (error) {
        return res.status(500).json({
            mensaje: 'No se encontro el cliente: ' + _id + '.'
        })
    }
});


router.get('/get_all_customers', async (req, res) => {

    try {
        const customers_ = await customers_bd.find();
        res.json(customers_);

    } catch (error) {
        return res.status(400).json({
            mensaje: 'Ocurrio algo inesperado en la busqueda de ' +
            'los clientes. Error: '+ error
        })

    }


});

router.delete('/delete_customer/:id', async (req, res) => {

    const _id = req.params.id;

    try {
        const customer_ = await customers_bd.findByIdAndDelete({ _id });


        if (!customer_) {
            return res.status(400).json({
                mensaje: 'No se encontro el cliente: ' + _id + '.'
            })
        }
        res.json(customer_);

    } catch (error) {
        return res.status(500).json({
            mensaje: 'Ocurrio algo inesperado al eliminar el cliente: ' +
                _id + '. Error: ' + error
        })
    }
});

router.put('/update_customer/:id', async (req, res) => {
    const _id = req.params.id;

    try {

        const customer_ = await customers_bd.findByIdAndUpdate(
            _id, req.body, { new: true }
        );

        if (!customer_) {
            return res.status(400).json({
                mensaje: 'No se encontro el cliente: ' + _id + '.'
            })
        }

        res.json(customer_);

    } catch (error) {
        return res.status(500).json({
            mensaje: 'Ocurrio algo inesperado al actualizar el cliente: ' +
                _id + '. Error: ' + error
        })
    }
})



// Employees

router.post('/new_employee', async (req, res) => {

    let body = req.body;
    let services_array = [];
    const new_employee = new employees_bd(body);

    try {

        for (let service of body.services) {
            const temp_service = await services_bd.findById(service);
            services_array.push(temp_service);
        };

        new_employee.services = services_array;
        new_employee.save();

        res.status(200).json(new_employee);
    } catch (error) {
        return res.status(500).json({
            mensaje: 'Ocurrio algo inesperado al añadir un nuevo contratista',
            error
        })
    }
});


router.get('/get_employee/:id', async (req, res) => {
    const _id = req.params.id;

    try {
        const employee_ = await employees_bd.findOne({ _id });

        if (!employee_) {
            return res.status(400).json({
                mensaje: 'No se encontro el servicio: ' + _id + '.'
            })
        }

        res.json(employee_);
    } catch (error) {
        return res.status(500).json({
            mensaje: 'No se encontro el servicio: ' + _id + '.'
        })
    }
});


router.get('/get_all_employees', async (req, res) => {

    try {
        const employee_ = await employees_bd.find();
        res.json(employee_);

    } catch (error) {
        return res.status(400).json({
            mensaje: 'Ocurrio algo inesperado en la busqueda de ' +
            'los servicios. Error: '+ error
        })

    }


});

router.delete('/delete_employee/:id', async (req, res) => {

    const _id = req.params.id;

    try {
        const employee_ = await employees_bd.findByIdAndDelete({ _id });


        if (!employee_) {
            return res.status(400).json({
                mensaje: 'No se encontro el servicio: ' + _id + '.'
            })
        }
        res.json(employee_);

    } catch (error) {
        return res.status(500).json({
            mensaje: 'Ocurrio algo inesperado al eliminar el servicio: ' +
                _id + '. Error: ' + error
        })
    }
});

router.put('/update_employee/:id', async (req, res) => {
    const _id = req.params.id;

    try {

        const employee_ = await employees_bd.findByIdAndUpdate(
            _id, req.body, { new: true }
        );

        if (!employee_) {
            return res.status(400).json({
                mensaje: 'No se encontro el servicio: ' + _id + '.'
            })
        }

        res.json(employee_);

    } catch (error) {
        return res.status(500).json({
            mensaje: 'Ocurrio algo inesperado al actualizar el servicio: ' +
                _id + '. Error: ' + error
        })
    }
})


// Services



router.post('/new_service', async (req, res) => {

    try {
        const new_service = await services_bd.create(req.body);
        res.status(200).json(new_service);
    } catch (error) {
        return res.status(500).json({
            mensaje: 'Ocurrio algo inesperado al añadir un nuevo servicio',
            error
        })
    }
});

router.get('/get_service/:id', async (req, res) => {
    const _id = req.params.id;

    try {
        const service_ = await services_bd.findOne({ _id });

        if (!service_) {
            return res.status(400).json({
                mensaje: 'No se encontro el servicio: ' + _id + '.'
            })
        }

        res.json(service_);
    } catch (error) {
        return res.status(500).json({
            mensaje: 'No se encontro el servicio: ' + _id + '.'
        })
    }
});


router.get('/get_all_services', async (req, res) => {

    try {
        const service_ = await services_bd.find();
        res.json(service_);

    } catch (error) {
        return res.status(400).json({
            mensaje: 'Ocurrio algo inesperado en la busqueda de ' +
            'los servicios. Error: '+ error
        })

    }


});

router.delete('/delete_service/:id', async (req, res) => {

    const _id = req.params.id;

    try {
        const service_ = await services_bd.findByIdAndDelete({ _id });


        if (!service_) {
            return res.status(400).json({
                mensaje: 'No se encontro el servicio: ' + _id + '.'
            })
        }
        res.json(service_);

    } catch (error) {
        return res.status(500).json({
            mensaje: 'Ocurrio algo inesperado al eliminar el servicio: ' +
                _id + '. Error: ' + error
        })
    }
});

router.put('/update_service/:id', async (req, res) => {
    const _id = req.params.id;

    try {

        const service_ = await services_bd.findByIdAndUpdate(
            _id, req.body, { new: true }
        );

        if (!service_) {
            return res.status(400).json({
                mensaje: 'No se encontro el servicio: ' + _id + '.'
            })
        }

        res.json(service_);

    } catch (error) {
        return res.status(500).json({
            mensaje: 'Ocurrio algo inesperado al actualizar el servicio: ' +
                _id + '. Error: ' + error
        })
    }
})


// Exportar la configuración de express
module.exports = router;

import express from 'express';
import controller from '../controllers/Actuator';
const router = express.Router();

router.post('/create', controller.createActuator);
router.get('/get/:id', controller.getActuator);
router.get('/get', controller.getAllActuators);
router.put('/update/:id', controller.updateActuator);
router.delete('/delete/:id', controller.deleteActuator);

export default router;

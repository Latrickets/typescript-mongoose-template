import express from 'express';
import controller from '../controllers/User';
const router = express.Router();

router.post('/create', controller.createUser);
router.get('/get/:id', controller.getUser);
router.get('/get', controller.getAllUsers);
router.put('/update/:id', controller.updateUser);
router.delete('/delete/:id', controller.deleteUser);

export default router;

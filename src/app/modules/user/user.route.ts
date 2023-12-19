import  express  from 'express';
import { UserController } from './user.controller';


const router = express.Router();

router.post('/',UserController.createUser);

router.get('/',UserController.getALLUser)

router.get('/:id',UserController.getSingleUser)

router.put('/:id', UserController.updateUser)

router.put('/:id/orders',UserController.updateUserOrder)

router.delete('/:id',UserController.deleteUser)

export const UserRoutes = router;
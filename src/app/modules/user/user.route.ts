import  express  from 'express';
import { UserController } from './user.controller';


const router = express.Router();

router.post('/create-user',UserController.createUser);

router.get('/',UserController.getALLUser)

router.get('/:id',UserController.getSingleUser)

router.delete('/:id',UserController.deleteUser)

router.put('/:id', UserController.updateUser)

export const UserRoutes = router;
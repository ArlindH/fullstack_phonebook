import { Router } from 'express';
import * as PeopleBusiness from '../business/PeopleBusiness';

const router = new Router();

router.route('/people').post(PeopleBusiness.addPerson);
router.route('/people').get(PeopleBusiness.getPeople);

export default router;
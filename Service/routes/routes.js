import {Router} from 'express';
import Control from '../controllers/controladorPasaporte.js';

const router = Router();

router.post('/', Control.create);
router.get('/', Control.getAll);
router.get('/:id', Control.getById);
router.put('/:id', Control.update);
router.delete('/:id', Control.remove);

export default router;
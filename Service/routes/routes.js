import { Router } from "express";
import { createSession } from '../controllers/controller-payments.js';

const router = Router();

router.post('/create-session', createSession)

router.get('/success', (req, res)=> res.redirect('/success.html'))
router.get('/cancel', (req, res)=> res.redirect('/index.html'))

export default router;
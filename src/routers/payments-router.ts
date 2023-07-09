import { Router } from 'express';
import { getPayment, postPayment } from '@/controllers';
import { authenticateToken, validateBody } from '@/middlewares';
import { createTicketSchema, paymentSchema } from '@/schemas';


const paymentsRouter  = Router();

paymentsRouter 
  .all('/*', authenticateToken)
  .get('/health', (_req, res) => res.send('OK!'))
  .get('/', getPayment)
  .post('/process',validateBody(paymentSchema), postPayment);

export { paymentsRouter };
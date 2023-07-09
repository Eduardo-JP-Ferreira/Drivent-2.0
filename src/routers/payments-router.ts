import { Router } from 'express';
import { getPayment, postPayment } from '@/controllers';
import { authenticateToken, validateBody } from '@/middlewares';
import { paymentSchema } from '@/schemas';


const paymentsRouter  = Router();

paymentsRouter 
  .all('/*', authenticateToken)
  .get('/', getPayment)
  .post('/process',validateBody(paymentSchema), postPayment);

export { paymentsRouter };
import { Router } from 'express';
import { getTicket, getTicketType, postTicket } from '@/controllers';
import { authenticateToken, validateBody } from '@/middlewares';
import { createTicketSchema } from '@/schemas';


const ticketsRouter = Router();

ticketsRouter
  .all('/*', authenticateToken)
  .get('/types', getTicketType)
  .get('/', getTicket)
  .post('/', validateBody(createTicketSchema), postTicket);

export { ticketsRouter };
import { Router } from 'express';
import { authenticateToken, validateBody } from '@/middlewares';
import { createTicketSchema } from '@/schemas/tickets-schemas';
import { getTicketType } from '@/controllers/tickets-controller';

const ticketsRouter = Router();

ticketsRouter
  .all('/*', authenticateToken)
  .get('/types', getTicketType)
  .get('/health', (_req, res) => res.send('OK!'))
  .get('/', )
  .post('/', validateBody(createTicketSchema), );

export { ticketsRouter };
import Joi from 'joi';
import { CreateUserParams } from '@/services/users-service';
import { CreateTicket } from '@/protocols';

export const createTicketSchema = Joi.object<CreateTicket>({
  ticketTypeId: Joi.number().required()
});

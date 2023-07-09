import Joi from 'joi';
import { PaymentBody } from '@/protocols';

export const paymentSchema = Joi.object<PaymentBody>({
  ticketId: Joi.number().required(),
  cardData: {
    issuer: Joi.string().required(),
    number: Joi.number().required(),
    name: Joi.string().required(),
    expirationDate: Joi.date().required(),
    cvv: Joi.number().required(),
  }
  
});

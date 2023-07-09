import { Address, Enrollment, TicketType } from '@prisma/client';
import { request } from '@/utils/request';
import { invalidDataError, notFoundError, unauthorizedError } from '@/errors';
import { exclude } from '@/utils/prisma-utils';
import { CardData, ReturnPayment } from '@/protocols';
import paymentRepository from '@/repositories/payments-repository';
import ticketRepository from '@/repositories/tickets-repository';
import enrollmentRepository from '@/repositories/enrollment-repository';

// async function getTicketType(): Promise<TicketType | {}> {
//   const result = await ticketRepository.findTicketTypes();
//   return result;
// }

async function getPayment(ticketId: number, userId: number): Promise<ReturnPayment> {
  const getEnrollmentId = await enrollmentRepository.findWithAddressByUserId(userId)
  if (!getEnrollmentId) throw notFoundError();

  const ticketExist = await ticketRepository.findTicketById(ticketId)
  if (!ticketExist) throw notFoundError();

  if(getEnrollmentId.id !== ticketExist.enrollmentId) throw unauthorizedError();
  
  return await paymentRepository.findPayment(ticketId);
}

async function postPayment(ticketId: number, cardData: CardData, userId: number): Promise<ReturnPayment> {
  const getEnrollmentId = await enrollmentRepository.findWithAddressByUserId(userId)
  // if (!getEnrollmentId) throw notFoundError();

  const ticketExist = await ticketRepository.findTicketById(ticketId)
  if (!ticketExist) throw notFoundError();

  if(getEnrollmentId.id !== ticketExist.enrollmentId) throw unauthorizedError();
  
  return await paymentRepository.createPayment(ticketExist, cardData);
}

const paymentService = {
  getPayment,
  postPayment,

};

export default paymentService;
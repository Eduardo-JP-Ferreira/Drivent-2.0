import { Address, Enrollment, TicketType } from '@prisma/client';
import { request } from '@/utils/request';
import { invalidDataError, notFoundError } from '@/errors';
import { exclude } from '@/utils/prisma-utils';
import { AddressEnrollment, ReturnTicket } from '@/protocols';
import ticketRepository from '@/repositories/tickets-repository';

async function getTicketType(): Promise<TicketType | {}> {
  const result = await ticketRepository.findTicketTypes();
  return result;
}

async function getTicket(userId: number): Promise<ReturnTicket> {
  const result = await ticketRepository.findTicket(userId);

  if (result === null) throw notFoundError();
  return result;
}

const TicketService = {
  getTicketType,
  getTicket,
};

export default TicketService;
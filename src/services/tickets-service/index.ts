import { Address, Enrollment, TicketType } from '@prisma/client';
import { request } from '@/utils/request';
import { invalidDataError, notFoundError } from '@/errors';
import { exclude } from '@/utils/prisma-utils';
import { AddressEnrollment } from '@/protocols';
import ticketRepository from '@/repositories/tickets-repository';

async function getTicketType(): Promise<TicketType | {}> {
  const result = await ticketRepository.findTicketTypes();
  return result;
}

const TicketService = {
  getTicketType,
};

export default TicketService;
import { Enrollment } from '@prisma/client';
import { prisma } from '@/config';
import { ReturnTicket, Ticket } from '@/protocols';

async function findTicketTypes() {
  return prisma.ticketType.findMany();
}

async function findTicket(enrollmentId: number) {
  return await prisma.ticket.findFirst({
    where: {
      enrollmentId,
    },
    include: {
      TicketType: true,
    }
  })
}

async function createTicket(ticketTypeId: number, enrollmentId: number) {
  return prisma.ticket.create({
    data: {
      enrollmentId,
      ticketTypeId,
      status: "RESERVED",
    },
    include: {
      TicketType: true
    }
  });
}

const ticketRepository = {
findTicketTypes,
findTicket,
createTicket,
};

export default ticketRepository;

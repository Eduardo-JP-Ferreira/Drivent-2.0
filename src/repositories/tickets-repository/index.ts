import { Enrollment } from '@prisma/client';
import { prisma } from '@/config';
import { ReturnTicket, Ticket } from '@/protocols';

async function findTicketTypes() {
  return prisma.ticketType.findMany();
}

async function findTicket(userId: number) {
  const resultTicket = await prisma.ticket.findFirst({
    where: {
      id: userId
    }
  })
  const resultType = await prisma.ticketType.findFirst({
    where:{
      id:  resultTicket.ticketTypeId
    }
  })
  const status = String(resultTicket.status)
  const result: ReturnTicket = {
    id: resultTicket.id,
    status: status, 
    ticketTypeId: resultTicket.ticketTypeId,
    enrollmentId: resultTicket.enrollmentId,
    TicketType: {
      id: resultType.id,
      name: resultType.name,
      price: resultType.price,
      isRemote: resultType.isRemote,
      includesHotel: resultType.includesHotel,
      createdAt: resultType.createdAt,
      updatedAt: resultType.updatedAt,
    },
    createdAt: resultTicket.createdAt,
    updatedAt: resultTicket.updatedAt,
  }
  return result
}

const ticketRepository = {
findTicketTypes,
findTicket,
};

export default ticketRepository;

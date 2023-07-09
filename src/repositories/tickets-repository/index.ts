import { Enrollment } from '@prisma/client';
import { prisma } from '@/config';
import { ReturnTicket, Ticket } from '@/protocols';

async function findTicketTypes() {
  return prisma.ticketType.findMany();
}

async function findTicket(enrollmentId: number) {
  const resultTicket = await prisma.ticket.findFirst({
    where: {
      enrollmentId,
    }
  })
  if(!resultTicket) return null
  const resultType = await prisma.ticketType.findFirst({
    where:{
      id:  resultTicket.ticketTypeId
    }
  })
  if(!resultType) return null

  // const status: string = String(resultTicket.status)
  const result: ReturnTicket = {
    id: resultTicket.id,
    status: resultTicket.status, 
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

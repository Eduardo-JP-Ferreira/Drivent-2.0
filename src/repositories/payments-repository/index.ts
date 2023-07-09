import { Enrollment } from '@prisma/client';
import { prisma } from '@/config';
import { CardData, ReturnTicket, Ticket } from '@/protocols';

async function findPayment(ticketId: number) {
  return await prisma.payment.findFirst({
    where: {
      ticketId,
    }
  })
}

async function createPayment(ticket: ReturnTicket, cardData: CardData) {
  const last = String(cardData.number)
  return prisma.payment.create({
    data: {
      ticketId: ticket.id,
      value: ticket.TicketType.price,
      cardIssuer: cardData.issuer,
      cardLastDigits: last,      
    }
  });
}

const paymentRepository = {
  findPayment,
  createPayment,
};

export default paymentRepository;

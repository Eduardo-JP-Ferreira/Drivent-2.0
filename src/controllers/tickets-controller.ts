import { Response } from 'express';
import httpStatus from 'http-status';
import { AuthenticatedRequest } from '@/middlewares';
import TicketService from '@/services/tickets-service';
import { ReturnTicket } from '@/protocols';

export async function getTicketType(req: AuthenticatedRequest, res: Response) {
  // const { userId } = req;
  try {
    const type = await TicketService.getTicketType();

    return res.status(httpStatus.OK).send(type);
  } catch (error) {
    return res.sendStatus(httpStatus.NO_CONTENT);
  }
}

export async function getTicket(req: AuthenticatedRequest, res: Response) {
  const { userId } = req;
  try {
    const ticket: ReturnTicket= await TicketService.getTicket(userId);

    return res.status(httpStatus.OK).send(ticket);
  } catch (error) {
    return res.sendStatus(httpStatus.NOT_FOUND);
  }
}

export async function postTicket(req: AuthenticatedRequest, res: Response) {
  const { userId } = req;
  const { ticketTypeId } = req.body;

  try {
    const ticket: ReturnTicket= await TicketService.postTicket(ticketTypeId, userId);
    // return res.status(httpStatus.OK).send(ticket);
    // console.log(ticketTypeId)
    res.status(httpStatus.CREATED).send(ticket);
  } catch (error) {
    return res.sendStatus(httpStatus.NOT_FOUND);
  }
}

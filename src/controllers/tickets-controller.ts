import { Response } from 'express';
import httpStatus from 'http-status';
import { AuthenticatedRequest } from '@/middlewares';
import TicketService from '@/services/tickets-service';

export async function getTicketType(req: AuthenticatedRequest, res: Response) {
  // const { userId } = req;

  try {
    const type = await TicketService.getTicketType();

    return res.status(httpStatus.OK).send(type);
  } catch (error) {
    console.log(error.message)
    // return res.sendStatus(httpStatus.NO_CONTENT);
    return res.sendStatus(204)
  }
}


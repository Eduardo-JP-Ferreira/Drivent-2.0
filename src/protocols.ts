export type ApplicationError = {
  name: string;
  message: string;
};

export type ViaCEPAddress = {
  logradouro: string;
  complemento: string;
  bairro: string;
  localidade: string;
  uf: string;
};

export type ViaCEPAddressError = {
  error: boolean;
};

export type ViaCEPAddressResponse = {
  cep: string;
  logradouro: string;
  complemento: string;
  bairro: string;
  localidade: string;
  uf: string;
  ibge: string;
  gia: string;
  ddd: string;
  siafi: string;
};

export type AddressEnrollment = {
  logradouro: string;
  complemento: string;
  bairro: string;
  cidade: string;
  uf: string;
  error?: string;
};

export type RequestError = {
  status: number;
  data: object | null;
  statusText: string;
  name: string;
  message: string;
};

export type CreateTicket = {
  ticketTypeId: number;
};

export type ReturnTicket = {
  id: number,
  status: string,
  ticketTypeId: number,
  enrollmentId: number,
  TicketType: {
      id: number,
      name: string,
      price: number,
      isRemote: boolean,
      includesHotel: boolean,
      createdAt: Date,
      updatedAt: Date,
    },
  createdAt: Date,
  updatedAt: Date,
}

export type Ticket = {
  id: number;
  status: string;
  ticketTypeId: number;
  enrollmentId: number;
  createdAt: Date;
  updatedAt: Date;
}

export type  TicketType = {
  id: number,
  name: string,
  price: number,
  isRemote: boolean,
  includesHotel: boolean,
  createdAt: Date,
  updatedAt: Date,
};

export type PaymentBody = {
  ticketId: number,
	cardData: {
		issuer: string,
    number: number,
    name: string,
    expirationDate: Date,
    cvv: number,
	}
}
export type CardData = {
    issuer: string,
    number: number,
    name: string,
    expirationDate: Date,
    cvv: number,
}
export type ReturnPayment = {
    id: number,
    ticketId: number,
    value: number,
    cardIssuer: string,
    cardLastDigits: string,
    createdAt: Date,
    updatedAt: Date,
}
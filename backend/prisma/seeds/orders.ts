import { StatusOrder } from '@prisma/client';

export const orders = [
  {
    status: StatusOrder.UNCONFIRMED,
    email: 'eugenio.gutierrez@testmail.es',
    createdAt: '2022-04-19T13:02:04.124Z',
    addressId: 1,
    userId: 1,
  },
  {
    status: StatusOrder.UNPAID,
    email: 'luis.martinez89@thisemaildoesnotexist.com',
    createdAt: '2022-05-13T07:29:44.253Z',
    addressId: 2,
    userId: 2,
  },
  {
    status: StatusOrder.PAID,
    email: 'guerrero334@trabajotodaladia.es',
    createdAt: '2022-05-17T22:43:49.382Z',
    addressId: 4,
    userId: 4,
  },
  {
    status: StatusOrder.PAID,
    email: 'dorotea.dominguez@correoelectronicotest.es',
    createdAt: '2022-05-17T23:19:32.616Z',
    addressId: 9,
  },
  {
    status: StatusOrder.UNCONFIRMED,
    email: 'guerrero334@trabajotodaladia.es',
    createdAt: '2022-05-19T09:39:45.745Z',
    addressId: 4,
    userId: 4,
  },
  {
    status: StatusOrder.UNPAID,
    email: 'zanahoria@meencantaelteatro.es',
    createdAt: '2022-05-22T16:47:54.249Z',
    addressId: 8,
  },
  {
    status: StatusOrder.PAID,
    email: 'fabmen@testmail.es',
    createdAt: '2022-05-23T19:17:41.466Z',
    addressId: 5,
    userId: 5,
  },
  {
    status: StatusOrder.UNPAID,
    email: 'chicagallega@santiagomail.eu',
    createdAt: '2022-05-25T22:22:34.298Z',
    addressId: 7,
    userId: 7,
  },
  {
    status: StatusOrder.PAID,
    email: 'fabmen@testmail.es',
    createdAt: '2022-05-30T11:34:54.537Z',
    addressId: 5,
    userId: 5,
  },
];

import { User } from './user';

export default class IsoRequest {
  id: string;
  title: string;
  description: string;
  payment: number;
  postedDate: Date;
  fullfillmentDate: Date;
  to: string;
  from: string;
  userPosted: User;
  fullfilled: Boolean;
  userFulfilling?: User;
}

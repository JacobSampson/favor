import { User } from './user';

export default class IsoRequest {
  constructor(
    public id: string,
    public title: string,
    public description: string,
    public paymentAmount: number,
    public postedDate: Date,
    public fulfillmentDate: Date,
    public toLocation: string,
    public fromLocation: string,
    public userPosted: User,
    public fullfilled: boolean,
    public userFulfilling?: User
  ) {}
}

import { User } from './user';
import IsoRequest from './iso-request';

export default class Opportunity {
  constructor(
    public id: string,
    public title: string,
    public description: string,
    public postedDate: Date,
    public startDate: Date,
    public endDate: Date,
    public toLocation: string,
    public fromLocation: string,
    public userPosted: User,
    public requests: IsoRequest[]
  ) {}
}
import { User } from './user';

export default class OpportunityFavorRequest {
  constructor(
    public description: string,
    public paymentAmount: number,
    public user: User
  ) {}
}

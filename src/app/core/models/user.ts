import School from './school';

export interface User {
  uid: string;
  name: string;
  photoUrl: string;
  school: School;
  email: string;
}

export interface IUser {
  data: Data;
  ad: Ad;
}

interface Ad {
  company: string;
  url: string;
  text: string;
}

interface Data {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}

export interface IUser {
  name: string;
  account: number;
  calls: number;
  minutes: number;
  callRecords: CallRecord[];
}

interface CallRecord {
  name: string;
  callId: number;
  duration: number;
  switchCode: string;
  direction: string;
  number: string;
}

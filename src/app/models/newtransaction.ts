export interface NewTransaction {
    transactionId: number;
    date: Date; 
    amount: number;
    receiverAcc: number;
    transtype: string;
  }
type Payment = {
  id: string;
  clientId: string;
  contractId: string;
  fileUrl: string;
  amount: number;
  createdAt: Date;
};
export default Payment;

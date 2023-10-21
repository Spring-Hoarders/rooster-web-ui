export default interface Payment {
  paymentId: string;
  contractId: string;
  previousPayment: Date;
  nextDuePayment: Date;
}

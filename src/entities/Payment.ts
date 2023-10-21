export default interface Payment {
  payment_id: string;
  contract_id: string;
  previous_payment: Date;
  next_due_payment: Date;
}

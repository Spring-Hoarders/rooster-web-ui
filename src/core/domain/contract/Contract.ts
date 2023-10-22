type Contract = {
  id: string;
  apartmentId: string;
  clientId: string;
  contractStatus: ContractStatus;
  accomodationDate: Date;
  evictionDate: Date;
  startDate: Date;
  endDate: Date;
  guaranteeType: GuaranteeType;
};

export const enum ContractStatus {
  Pending,
  Refused,
  Accepted,
  Expired,
  Canceled,
  Terminated,
}
export const enum GuaranteeType {
  PublicFunds,
  PrivetFunds,
}
export default Contract;

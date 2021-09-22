export interface Domain {
  parserType: string;
  domainName: string;
  whoisServer: string;
  nameServer:string[];
  creationDate: string;
  expirationDate:string;
  updatedDate: string;
  states:string[];
  owner:string;
  registrar: string;
  dnssec: string;
  country: string;
  state: string;
  city: string;
  address: string;
}

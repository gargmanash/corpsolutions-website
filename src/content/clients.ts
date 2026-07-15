export interface Client {
  name: string
  sector: 'insurance' | 'banking' | 'telecom' | 'other'
}

export const clients: Client[] = [
  { name: 'Reliance Nippon Life Insurance', sector: 'insurance' },
  { name: 'Pitney Bowes', sector: 'other' },
  { name: 'IndiaFirst Life Insurance', sector: 'insurance' },
  { name: 'Birla Sun Life Insurance', sector: 'insurance' },
  { name: 'Aegon Life', sector: 'insurance' },
  { name: 'Kedaara Capital Advisors', sector: 'other' },
  { name: 'Tata AIG Insurance', sector: 'insurance' },
  { name: 'HDFC Bank', sector: 'banking' },
  { name: 'Aditya Birla Health Insurance', sector: 'insurance' },
  { name: 'Reliance Capital', sector: 'other' },
  { name: 'Airtel', sector: 'telecom' },
  { name: 'Vodafone', sector: 'telecom' },
  { name: 'First Advantage', sector: 'other' },
  { name: 'PNB MetLife', sector: 'insurance' },
  { name: 'Aircel', sector: 'telecom' },
]

export const clientsDisclaimer =
  "This is only representative and not an exhaustive list of CorpSolutions clients. These Logos are Trademarks of the respective organizations. CorpSolutions claims to have no other relationships with these organizations other than 'client-service provider' until specifically stated otherwise. The above clients have availed one or more Services rendered by CorpSolutions."

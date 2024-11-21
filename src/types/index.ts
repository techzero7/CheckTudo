export type Role = 'SUPER_ADMIN' | 'COMPANY_ADMIN' | 'USER';

export interface User {
  id: string;
  name: string;
  email: string;
  role: Role;
  companyId?: string;
}

export interface Company {
  id: string;
  name: string;
  domain: string;
  createdAt: Date;
}

export interface Form {
  id: string;
  title: string;
  description: string;
  companyId: string;
  createdBy: string;
  createdAt: Date;
  surveyJson: object;
}
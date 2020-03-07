export interface IStatuses {
  id: string;
  value: string;
}
export interface ITags {
  id: string;
  value: string;
}

export interface IVacancy {
  id: string;
  title: string;
  money: string;
  company: string;
  inn: string;
  numVacancy: number;
  date: string;
  statuses: IStatuses[];
  name: string;
  tags: ITags[];
}

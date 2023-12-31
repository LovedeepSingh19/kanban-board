import { DateValueType } from "react-tailwindcss-datepicker/dist/types";

export type KanbanTask = {
  title: string;
  completed: boolean;
};

export type KanbanPeople = {
  color: string;
  title: string;
};

export type KanbanCard = {
  id: string;
  title: string;
  desc?: string;
  imageUrl?: string;
  completed: boolean;
  Peoples: KanbanPeople[];
  tasks: KanbanTask[];
  date: DateValueType;
};

export type KanbanList = {
  id: string;
  title: string;
  cards: KanbanCard[];
};

export type KanbanBoardState = KanbanList[];

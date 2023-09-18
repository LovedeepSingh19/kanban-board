import { createContext } from "react";
import { s4 } from "../utility/uuidGenerator";
import { KanbanContext, ModalContextState } from "./KanbanContextTypes";
import { KanbanBoardState } from "@/components/board/KanbanTypes";
import { PeopleColors } from "@/components/modal/AddPeopleModal";
export const defaultKanbanBoardState: KanbanBoardState = [
  {
    id: s4(),
    title: `To-Do List`,
    cards: [
      {
        id: s4(),
        title: "Demo Task",
        desc: "This the the Demo task",
        imageUrl: `static/kanbanDemoImage.jpg`,
        completed: false,
        Peoples: [
          { title: "Demo", color: PeopleColors[3] },
          { title: "Demo", color: PeopleColors[3] },
          { title: "Demo", color: PeopleColors[3] },
        ],
        tasks: [
          { title: "Demo task 1", completed: false },
          { title: "Demo task 2", completed: true },
        ],
        date: null,
      },
    ],
  },
  {
    id: s4(),
    title: `In Progress`,
    cards: [],
  },
  { id: s4(), title: "Done", cards: [] },
  { id: s4(), title: "Revised", cards: [] },
];

export const defaultModalContextState: ModalContextState = {
  type: null,
  isOpen: false,
  modalProps: null,
};

const initialContextState: KanbanContext = {
  kanbanState: defaultKanbanBoardState,
  modalState: defaultModalContextState,
  handleCreateCard: () => {},
  handleDeleteCard: () => {},
  handleUpdateCard: () => {},
  handleDragEnd: () => {},
  handleOpenModal: () => {},
  handleCloseModal: () => {},
};

const KanbanContext = createContext<KanbanContext>(initialContextState);

export const KanbanContextConsumer = KanbanContext.Consumer;
export const KanbanContextProvider = KanbanContext.Provider;

export default KanbanContext;

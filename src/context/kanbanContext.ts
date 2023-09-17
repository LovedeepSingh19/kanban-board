import { createContext } from "react";
import { tagColors } from "../components/modal/CreateTagModal";
// import { GetBaseURL } from "../utility/baseUrl";
import { s4 } from "../utility/uuidGenerator";
import { KanbanContext, ModalContextState } from "./KanbanContextTypes";
import { KanbanBoardState } from "@/components/kanban/KanbanTypes";
export const defaultKanbanBoardState: KanbanBoardState = [
  {
    id: s4(),
    title: `To-Do List ${1}`,
    cards: [
      {
        id: s4(),
        title: "Demo Task",
        desc: "This the the Demo task",
        imageUrl: `${''}/static/kanbanDemoImage.jpg`,
        completed: false,
        tags: [
          { title: "Demo", color: tagColors[0] },
          { title: "Demo", color: tagColors[1] },
          { title: "Demo", color: tagColors[2] },
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
    title: `In Progress ${2}`,
    cards: [
      {
        id: s4(),
        title: "Demo card completed",
        desc: "",
        imageUrl: "/static/kanbanDemoImage.jpg",
        completed: true,
        tags: [],
        tasks: [],
        date: null,
      },
    ],
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

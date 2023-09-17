import { DropResult } from "react-beautiful-dnd";
import { CardModalProps } from "../components/modal/CardModal";
import { DeleteListModalProps } from "../components/modal/DeleteListModal";
import { RenameListModalProps } from "../components/modal/RenameListModal";
import { KanbanBoardState, KanbanCard } from "@/components/kanban/KanbanTypes";

export type ModalTypes = "UPDATE_CARD";

export type ModalContextState = {
  type: ModalTypes | null;
  isOpen: boolean;
  modalProps:
    | DeleteListModalProps
    | CardModalProps
    | RenameListModalProps
    | null;
};

export type hanbleOpenModalProps =
  | { type: "UPDATE_CARD"; modalProps: CardModalProps }

export type KanbanContext = {
  kanbanState: KanbanBoardState;
  modalState: ModalContextState;
  handleCreateCard: (listIndex: number, title: string) => void;
  handleDeleteCard: (listIndex: number, cardIndex: number) => void;
  handleUpdateCard: (
    listIndex: number,
    cardIndex: number,
    updatedCard: KanbanCard,
  ) => void;
  handleDragEnd: (dropResult: DropResult) => void;
  handleOpenModal: (props: hanbleOpenModalProps) => void;
  handleCloseModal: () => void;
};

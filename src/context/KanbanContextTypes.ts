import { DropResult } from "react-beautiful-dnd";
import { CardModalProps } from "../components/modal/CardModal";
import { KanbanBoardState, KanbanCard } from "@/components/board/KanbanTypes";

export type ModalTypes = "UPDATE_CARD";

export type ModalContextState = {
  type: ModalTypes | null;
  isOpen: boolean;
  modalProps:
     CardModalProps
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

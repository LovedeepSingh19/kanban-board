import { PropsWithChildren, useState } from "react";
import { DropResult } from "react-beautiful-dnd";
import useLocalStorage from "../hooks/useLocalStorage";
import { s4 } from "../utility/uuidGenerator";
import {
  defaultKanbanBoardState,
  defaultModalContextState,
  KanbanContextProvider,
} from "./kanbanContext";
import { hanbleOpenModalProps, ModalContextState } from "./KanbanContextTypes";
import { KanbanBoardState, KanbanCard } from "@/components/board/KanbanTypes";
import CardModal from "@/components/modal/CardModal";

type KanbanContextComponentProps = {
  children: any
};


const KanbanContextComponent:React.FC<KanbanContextComponentProps> = (props) => {
  

  const { children } = props;
  const [kanbanState, setKanbanState] = useLocalStorage<KanbanBoardState>(
    "kanban-state",
    defaultKanbanBoardState,
  );

  const [modalState, setModalState] = useState<ModalContextState>(
    defaultModalContextState,
  );

  const handleCreateCard = (listIndex: number, title: string) => {
    const tempList = [...kanbanState];
    tempList[listIndex].cards.push({
      id: s4(),
      title,
      completed: false,
      tasks: [],
      Peoples: [],
      date: null,
    });
    setKanbanState(tempList);
  };

  const handleDeleteCard = (listIndex: number, cardIndex: number) => {
    const tempList = [...kanbanState];
    tempList[listIndex].cards.splice(cardIndex, 1);
    setKanbanState(tempList);
  };

  const handleUpdateCard = (
    listIndex: number,
    cardIndex: number,
    updatedCard: KanbanCard,
  ) => {
    const tempList = [...kanbanState];
    tempList[listIndex].cards[cardIndex] = updatedCard;
    setKanbanState(tempList);
  };

  const handleDragEnd = (dropResult: DropResult) => {
    const { source, destination, type } = dropResult;

    if (!destination) return;

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    )
      return;

    if (type === "all-lists") {
      const tempBoard = [...kanbanState];
      const draggedBoard = tempBoard[source.index];
      tempBoard.splice(source.index, 1);
      tempBoard.splice(destination.index, 0, draggedBoard);
      setKanbanState(tempBoard);
    }

    const s_b_index = kanbanState.findIndex(
      (_board) => _board.id === source.droppableId,
    );
    if (s_b_index < 0) return;

    const t_b_index = kanbanState.findIndex(
      (_board) => _board.id === destination.droppableId,
    );
    if (t_b_index < 0) return;

    const tempBoards = [...kanbanState];
    const draggedCard = tempBoards[s_b_index].cards[source.index];
    tempBoards[s_b_index].cards.splice(source.index, 1);
    tempBoards[t_b_index].cards.splice(destination.index, 0, draggedCard);
    setKanbanState(tempBoards);
  };

  const handleCloseModal = () => {
    setModalState({ type: null, isOpen: false, modalProps: null });
  };

  const handleOpenModal = (props: hanbleOpenModalProps) => {
    switch (props.type) {
      case "UPDATE_CARD": {
        setModalState({
          type: "UPDATE_CARD",
          isOpen: true,
          modalProps: props.modalProps,
        });
        break;
      }
      default: {
        return;
      }
    }
  };

  const renderModal = (state: ModalContextState) => {
    if (state.modalProps !== null) {
      switch (state.type) {
        case "UPDATE_CARD": {
          return <CardModal {...(state.modalProps)} />;
        }
        default: {
          return null;
        }
      }
    }
  };

  return (
    <KanbanContextProvider
      value={{
        kanbanState,
        modalState,
        handleCreateCard,
        handleDeleteCard,
        handleUpdateCard,
        handleDragEnd,
        handleOpenModal,
        handleCloseModal,
      }}
    >
      {renderModal(modalState)}
      {children}
    </KanbanContextProvider>
  );
}

export default KanbanContextComponent;

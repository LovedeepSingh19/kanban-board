import { useContext } from "react";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import KanbanContext from "../../context/kanbanContext";
import KanbanListComponent from "./KanbanListComponent";

export interface IKanbanBoardProps {}

export function KanbanBoard(props: IKanbanBoardProps) {
  const { kanbanState, handleDragEnd } =
    useContext(KanbanContext);
  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <Droppable
        droppableId="all-lists"
        direction="horizontal"
        type="all-lists"
      >
        {(provided) => (
          <div
            className="flex h-full flex-1 flex-row items-start p-1 pb-10"
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {kanbanState.map((_list, index) => (
              <KanbanListComponent
                key={_list.id}
                listIndex={index}
                list={_list}
              />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
}

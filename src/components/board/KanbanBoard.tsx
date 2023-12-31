import { useContext } from "react";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import KanbanContext from "../../context/kanbanContext";
import KanbanListComponent from "./KanbanListComponent";


type KanbanBoardProps = {
  isOpen: boolean
};

const KanbanBoard:React.FC<KanbanBoardProps> = (props) => {
  
  
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
                  isOpen={props.isOpen}
                />
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    );
}

export default KanbanBoard;

import { FormEvent, useContext, useEffect, useRef, useState } from "react";
import { Draggable, Droppable } from "react-beautiful-dnd";
import { AddForm } from "./AddForm";
import KanbanContext from "../../context/kanbanContext";
import { classNames } from "../../utility/css";
// import { ListMenu } from "./ListMenu";
import KanbanCardComponent from "./KanbanCardComponent";
import { KanbanList } from "./KanbanTypes";
import { RiAddCircleFill, RiAddFill } from "react-icons/ri";
import { CheckIcon, XMarkIcon } from "@heroicons/react/24/outline";

export interface IKanbanListComponentProps {
  listIndex: number;
  list: KanbanList;
}

function KanbanListComponent(props: IKanbanListComponentProps) {
  const { handleCreateCard } = useContext(KanbanContext);

  const formRef = useRef<HTMLFormElement>(null);
  const [name, setName] = useState<string>("");
  const [showForm, setShowForm] = useState<boolean>(false);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setShowForm(false);
        setName("");
      }
    };
    formRef.current?.addEventListener("keydown", handleKeyDown);
    return () => {
      formRef.current?.removeEventListener("keydown", handleKeyDown);
    };
  });

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (name) {
      setName("");
      handleCreateCard(props.listIndex, name)
    } else return;
    setShowForm(false);
  };

  return (
    <Draggable draggableId={props.list.id} index={props.listIndex}>
      {(provided) => (
        <div
          className={classNames(
            props.listIndex > 0 ? "ml-4" : "",
            "rounded-lg border border-slate-300 bg-black light:border-slate-900 light:bg-slate-600",
          )}
          {...provided.draggableProps}
          ref={provided.innerRef}
        >
          <div className="flex cursor-grab touch-manipulation flex-col">
            <div
              {...provided.dragHandleProps}
              className="flex flex-row items-center justify-between rounded-t-lg p-4 focus:border-none focus:outline-none focus:ring text-[#dfdede]"
            >
              <div className="font-semibold">{props.list.title}</div>
             <button
          onClick={() => setShowForm((prev) => !prev)}
          className="text-[#ffffff] flex items-center justify-center bg-selected font-bold text-lg h-6 w-6 rounded-lg">
                <RiAddFill />
        </button>
              {/* <ListMenu listIndex={props.listIndex} title={props.list.title} /> */}
            </div>
            {showForm ? (
        <form
          ref={formRef}
          autoComplete="off"
          onSubmit={(e) => handleSubmit(e)}
          // onSubmit={(title) =>
          //   handleCreateCard(props.listIndex, name)}
          onBlur={() => {
            if (name) return;
            setShowForm(false);
          }}
        >
          <div className="w-64 appearance-none rounded-lg border border-slate-300 bg-[#ffff] p-3   dark:border-slate-700 dark:bg-slate-900">
            <input
              className="w-full rounded-lg dark:bg-slate-700 text-[#656464] dark:placeholder:text-slate-400"
              placeholder={"Enter details"}
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              autoFocus
            />
            <div className="mt-4 flex items-center justify-between">
              <button className="flex items-center gap-1 rounded-md bg-emerald-600 px-3 py-1 text-sm text-white transition-colors duration-150 ease-in-out hover:bg-emerald-500">
                <CheckIcon className="h-5 w-5" />
                Add
              </button>
              <button
                onClick={() => {
                  setName("");
                  setShowForm(false);
                }}
                className="rounded-md p-2 text-red-600"
              >
                <XMarkIcon className="h-6 w-6" />
              </button>
            </div>
          </div>
        </form>
      ) : (
        <div></div>
      )}
            <Droppable droppableId={props.list.id}>
              {(provided) => (
                <div
                  className="flex min-h-[50px] flex-col"
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                >
                  <div className="p-3">
                    {props.list.cards.map((_card, index) => (
                      <KanbanCardComponent
                        key={_card.id}
                        listIndex={props.listIndex}
                        cardIndex={index}
                        card={_card}
                      />
                    ))}
                    {provided.placeholder}
                    {/* <AddForm
                      text="Add card"
                      placeholder="New card name..."
                      onSubmit={(title) =>
                        handleCreateCard(props.listIndex, title)
                      }
                    /> */}
                  </div>
                </div>
              )}
            </Droppable>
          </div>
        </div>
      )}
    </Draggable>
  );
}

export default KanbanListComponent;

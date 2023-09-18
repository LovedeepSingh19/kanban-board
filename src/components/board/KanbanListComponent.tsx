import { FormEvent, useContext, useEffect, useRef, useState } from "react";
import { Draggable, Droppable } from "react-beautiful-dnd";
import KanbanContext from "../../context/kanbanContext";
import { classNames } from "../../utility/css";
import { RiAddFill } from "react-icons/ri";
import { CheckIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { KanbanList } from "./KanbanTypes";
import KanbanCardComponent from "./KanbanCardComponent";

type KanbanListComponentProps = {
  listIndex: number;
  list: KanbanList;
  isOpen: boolean;
};

const KanbanListComponent: React.FC<KanbanListComponentProps> = (props) => {
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
      handleCreateCard(props.listIndex, name);
    } else return;
    setShowForm(false);
  };

  return (
    <Draggable draggableId={props.list.id} index={props.listIndex}>
      {(provided) => (
        <div
          className="rounded-lg bg-black light:border-slate-900 light:bg-slate-600 ml-4"
          {...provided.draggableProps}
          ref={provided.innerRef}
        >
          <div className="flex min-h-[800px] cursor-grab touch-manipulation flex-col">
            <div
              {...provided.dragHandleProps}
              className="flex flex-row items-center justify-between rounded-t-lg p-4 focus:border-none focus:outline-none focus:ring text-[#dfdede]"
            >
              <div className="font-semibold">{props.list.title}</div>
              <button
                onClick={() => setShowForm((prev) => !prev)}
                className="text-[#ffffff] flex items-center justify-center bg-selected font-bold text-lg h-6 w-6 rounded-lg"
              >
                <RiAddFill />
              </button>
            </div>
            {showForm ? (
              <form
                ref={formRef}
                autoComplete="off"
                onSubmit={(e) => handleSubmit(e)}
                onBlur={() => {
                  if (name) return;
                  setShowForm(false);
                }}
              >
                <div className="w-64 appearance-none rounded-lg bg-components ml-3 p-5">
                  <input
                    className="w-full bg-items rounded-lg pl-4 text-[#000000] placeholder:text-[#00000067]"
                    placeholder={"Enter details"}
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    autoFocus
                  />
                  <div className="mt-4 flex items-center justify-between">
                    <button className="flex items-center gap-1 rounded-md px-3 py-1 text-sm font-bold text-[#19481f] bg-[#66d673]">
                      <CheckIcon className="h-5 w-5" />
                      Add
                    </button>

                    <button
                      onClick={() => {
                        setName("");
                        setShowForm(false);
                      }}
                      className="flex items-center rounded-md px-3 py-1 text-sm font-bold text-[#481919] bg-[#d66666]"
                    >
                      <XMarkIcon className="h-5 w-5" />
                      Cancel
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
                        isOpen={props.isOpen}
                      />
                    ))}
                    {props.list.cards.length == 0 && (
                      <div
                        className={`mb-3 ${
                          props.isOpen ? "w-[320px]" : "w-[300px]"
                        } z-10 rounded-lg bg-components shadow-sm transition-shadow duration-200 ease-in-out focus:outline-none focus:ring hover:shadow-lg hover:ring-0 text-[#aba8a8] hover:shadow-slate-800/60`}
                      >
                        <div className="p-4">
                          <div className="flex items-center justify-between gap-5">
                              <div className="border-dashed border-2 h-12 w-full p-2 flex items-center justify-center text-items border-items rounded-lg bg-theme">
                                <text>Move card here</text>
                              </div>

                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </Droppable>
          </div>
        </div>
      )}
    </Draggable>
  );
};

export default KanbanListComponent;

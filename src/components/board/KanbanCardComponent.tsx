import {
  CheckCircleIcon,
  EllipsisHorizontalIcon,
  EllipsisVerticalIcon,
} from "@heroicons/react/24/outline";
import { memo, useContext } from "react";
import { Draggable } from "react-beautiful-dnd";
import KanbanContext from "../../context/kanbanContext";
import { classNames } from "../../utility/css";
import { KanbanCard } from "./KanbanTypes";

type KanbanCardComponentProps = {
  listIndex: number;
  cardIndex: number;
  card: KanbanCard;
  isOpen: boolean
};

const KanbanCardComponent: React.FC<KanbanCardComponentProps> = (props) => {
  const { handleOpenModal } = useContext(KanbanContext);

  const calculateTaskPercentage = () => {
    const totalTasks = props.card.tasks.length;
    let completedTask = 0;
    for (let i = 0; i < props.card.tasks.length; i++) {
      if (props.card.tasks[i].completed) {
        completedTask++;
      }
    }
    return Math.floor((completedTask * 100) / totalTasks);
  };

  return (
    <Draggable draggableId={props.card.id} index={props.cardIndex}>
      {(provided) => (
        <div
          className={`mb-3 ${props.isOpen? "w-[320px]": "w-[250px]"} z-10 rounded-lg bg-components shadow-sm transition-shadow duration-200 ease-in-out focus:outline-none focus:ring hover:shadow-lg hover:ring-0 text-[#aba8a8] hover:shadow-slate-800/60`}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          {props.card.imageUrl && (
            <div
              className={classNames(
                props.card.completed ? "opacity-50" : "opacity-100",
                "h-40 overflow-hidden rounded-t-md"
              )}
            >
              <img
                src={props.card.imageUrl}
                alt="task banner"
                className="bg-cover"
                onError={({ currentTarget }) => {
                  currentTarget.onerror = null;
                  currentTarget.src = `/static/kanbanDefaultBanner.jpg`;
                }}
              />
            </div>
          )}
          <div className="p-4">
            <div className="flex items-center justify-between gap-5">
              <div className="flex justify-evenly items-center">
                <div className="w-1.5 h-1.5 bg-pink rounded-full"></div>
                <span
                  className={`text-pink flex-wrap ${
                    props.card.completed ? "w-[100px]" : "w-full"
                  } truncate text-sm font-medium pl-3`}
                >
                  {props.card.title}
                </span>
              </div>

              {/* {!props.card.completed && props.card.tasks.length > 0 && (
                  <div>{`${calculateTaskCompleted()}/${
                    props.card.tasks.length
                  }`}</div>
                )} */}
              <div className="flex justify-around">
                {props.card.completed && (
                  <CheckCircleIcon className="h-5 w-5 mr-3" />
                )}
                <button
                  onClick={() =>
                    handleOpenModal({
                      type: "UPDATE_CARD",
                      modalProps: {
                        listIndex: props.listIndex,
                        cardIndex: props.cardIndex,
                        card: props.card,
                      },
                    })
                  }
                >
                  <EllipsisHorizontalIcon className="h-5 w-5" />
                </button>
              </div>
            </div>
            {props.card.completed === false && (
              <>
                {/* <div></div> */}
                {props.card.tasks.length > 0 && (
                  <div className="my-2 h-2 w-full bg-theme overflow-hidden rounded-md">
                    {props.card.tasks.length > 0 && (
                      <div
                        style={{
                          width: `${calculateTaskPercentage()}%`,
                        }}
                        className="flex h-6 items-center justify-center bg-[#0d8842] transition-transform duration-100 ease-in"
                      ></div>
                    )}
                  </div>
                )}
                {props.card.desc && (
                  <div className="mt-2 mb-1">
                    <p className="truncate text-sm text-slate-500">
                      {props.card.desc}
                    </p>
                  </div>
                )}
                <div className="flex flex-wrap gap-1">
                  {props.card.Peoples.map((_tag, index) => (
                    <span
                      className={classNames(
                        props.card.Peoples.length > 0 ? "mt-1" : "",
                        `rounded-md px-3 py-1 text-sm font-semibold ${_tag.color}`
                      )}
                      key={index}
                    >
                      {_tag.title}
                    </span>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </Draggable>
  );
};
export default KanbanCardComponent;

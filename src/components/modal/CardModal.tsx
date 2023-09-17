import { Fragment, useContext, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import {
  CheckIcon,
  DocumentCheckIcon,
  PlusIcon,
  TrashIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import KanbanContext from "../../context/kanbanContext";
import useAutosizeTextArea from "../../hooks/useAutosizeTextarea";
import { KanbanCard } from "../board/KanbanTypes";
import Datepicker from "react-tailwindcss-datepicker";
import { DateValueType } from "react-tailwindcss-datepicker/dist/types";
import { classNames } from "../../utility/css";
// import AddForm from "../kanban/AddForm";
import AddForm from "../board/AddForm";
import CreatePeopleModal, { PeopleColors } from "./AddPeopleModal";

export interface CardModalProps {
  listIndex: number;
  cardIndex: number;
  card: KanbanCard;
};

const CardModal:React.FC<CardModalProps> = (props) => {
  
  
    const imageTextAreaRef = useRef<HTMLTextAreaElement>(null);
    const descTextAreaRef = useRef<HTMLTextAreaElement>(null);
  
    const [title, setTitle] = useState<string>(props.card.title);
    const [desc, setDesc] = useState(props.card.desc);
    const [date, setDate] = useState<DateValueType>(props.card.date);
    const [completed, setCompleted] = useState(props.card.completed);
    const [imageUrl, setImageUrl] = useState(props.card.imageUrl);
    const [Peoples, setPeoples] = useState(props.card.Peoples);
    const [tasks, setTasks] = useState(props.card.tasks);
    const [openPeopleModal, setOpenPeopleModal] = useState<boolean>(false);
  
    const { handleDeleteCard, handleUpdateCard, handleCloseModal, modalState } =
      useContext(KanbanContext);
  
    useAutosizeTextArea(imageTextAreaRef, imageUrl);
    useAutosizeTextArea(descTextAreaRef, desc);
  
    const handleSave = () => {
      if (title === "") {
        return;
      }
      handleUpdateCard(props.listIndex, props.cardIndex, {
        ...props.card,
        title,
        desc,
        completed,
        imageUrl,
        Peoples,
        tasks,
        date,
      });
      handleCloseModal();
    };
  
    const deleteCard = () => {
      handleDeleteCard(props.listIndex, props.cardIndex);
      handleCloseModal();
    };
  
    const handleDeleteTask = (taskIndex: number) => {
      const tempTask = [...tasks];
      tempTask.splice(taskIndex, 1);
      setTasks(tempTask);
    };
  
    const handleCreateTask = (taskTitle: string) => {
      const tempTask = [...tasks];
      tempTask.push({ title: taskTitle, completed: false });
      setTasks(tempTask);
    };
  
    const handleCreatePeople = (PeopleName: string, colorIndex: number) => {
      const newPeoples = [...Peoples];
      newPeoples.push({ color: PeopleColors[colorIndex], title: PeopleName });
      setPeoples(newPeoples);
    };
  
    const handleDeletePeople = (PeopleIndex: number) => {
      const newPeoples = [...Peoples];
      newPeoples.splice(PeopleIndex, 1);
      setPeoples(newPeoples);
    };
  
    const handleToggleTaskCompleted = (index: number) => {
      const tempTask = [...tasks];
      tempTask[index].completed = !tempTask[index].completed;
      setTasks(tempTask);
    };
  
    const calculateTaskPercenPeoplee = () => {
      const totalTasks = tasks.length;
      let completedTask = 0;
      for (let i = 0; i < tasks.length; i++) {
        if (tasks[i].completed) {
          completedTask++;
        }
      }
      return Math.floor((completedTask * 100) / totalTasks);
    };
  
    return (
      <Transition appear show={modalState.isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-[20]" onClose={handleCloseModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-in-out duration-250"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in-out duration-250"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-slate-500 bg-opacity-0 transition-opacity" />
          </Transition.Child>
  
          <div className=" fixed inset-0">
            <div className="absolute inset-0">
              <div className="pointer-events-none  fixed inset-y-0 right-0 flex max-w-full">
                <Transition.Child
                  as={Fragment}
                  enter="transform transition ease-in-out duration-250 sm:duration-700"
                  enterFrom="translate-x-full "
                  enterTo="translate-x-0 bg-theme"
                  leave="transform transition ease-in-out duration-250 sm:duration-700"
                  leaveFrom="translate-x-0 bg-theme"
                  leaveTo="translate-x-full "
                >
                  <Dialog.Panel className="pointer-events-auto w-screen max-w-2xl">
                    <div className="flex h-full flex-col overflow-y-scroll shadow-xl text-[#ffff] ">
                      <div className="flex-1 overflow-y-auto py-6 px-4 sm:px-6">
                        <div className="flex flex-col gap-4 sm:flex-row sm:gap-6">
                          <input
                            className="flex-1 rounded-lg border-transparent bg-components pl-5 text-xl font-bold transition-all duration-150 ease-in focus:border focus:pl-3 hover:border-l-blue hover:pl-3 hover:focus:border-l-blue :hover:border"
                            type="text"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                          />
                          <div className="flex h-7 items-center">
                            <button
                              className="bg-components text-[#ffff]  inline-block rounded-lg py-1 px-3 text-sm font-semibold"
                              onClick={() => setCompleted((prev) => !prev)}
                            >
                              {completed ? (
                                <span className="flex items-center gap-1">
                                  <CheckIcon className="h-4 w-4" /> Completed
                                </span>
                              ) : (
                                <span className="">Mark complete</span>
                              )}
                            </button>
                          </div>
                        </div>
                        <div className="mt-4 flex flex-col gap-2 sm:flex-row sm:gap-3">
                          <span className="w-28 text-sm text-[#ffff]">
                            Date
                          </span>
                          <Datepicker
                            value={date}
                            onChange={setDate}
                            inputClassName="pl-2 pr-2 border-slate-500 rounded text-inherit bg-components font-semibold"
                          />
                        </div>
                        <div className="text-inherit"></div>
                        <div className="mt-4 flex flex-col gap-2 sm:flex-row sm:gap-3">
                          <span className="w-28 text-sm :text-slate-500">
                            Description
                          </span>
                          <textarea
                            ref={descTextAreaRef}
                            className="max-h-28 w-full rounded-lg pl-2 pr-2 placeholder:font-light bg-components text-[#ffff] placeholder:text-slate-400 hover:border"
                            placeholder="Description...."
                            value={desc}
                            onChange={(e) => setDesc(e.target.value)}
                          ></textarea>
                        </div>
                        <div className="mt-4 flex flex-col gap-2 sm:flex-row sm:gap-3">
                          <span className="w-28 text-sm :text-[#ffff]">
                            Image url
                          </span>
                          <textarea
                            ref={imageTextAreaRef}
                            className="max-h-16 w-full rounded-lg pl-2 pr-2 placeholder:font-light bg-components text-[#ffff] placeholder:text-slate-400"
                            placeholder="Image url...."
                            value={imageUrl}
                            onChange={(e) => setImageUrl(e.target.value)}
                          ></textarea>
                        </div>
                        <div className="mt-4 flex flex-col gap-2 sm:flex-row sm:gap-3">
                          <span className="w-28 text-sm :text-[#ffff]">
                            People
                          </span>
                          <div className="flex w-full flex-wrap gap-2">
                            {Peoples.map((People, index) => (
                              <button
                                className={`flex items-center gap-1 rounded-lg py-1 pl-2 pr-1 text-sm font-semibold hover:bg-opacity-80 ${People.color}`}
                                role="button"
                                aria-label="remove People"
                                key={index}
                                onClick={() => handleDeletePeople(index)}
                              >
                                <div className="h-7 flex items-center justify-center w-7 bg-[#9d9999] rounded-full text-theme">{People.title.charAt(0)}</div>
                                <XMarkIcon className="h-5 w-5" />
                              </button>
                            ))}
                            <button
                              role="button"
                              aria-label="create People"
                              onClick={() => setOpenPeopleModal(true)}
                            >
                              <PlusIcon className="h-7 w-7 rounded-full border border-dashed border-slate-500 p-1 :border-white :stroke-slate-300" />
                            </button>
                            <CreatePeopleModal
                              show={openPeopleModal}
                              handleClose={setOpenPeopleModal}
                              handleSubmit={handleCreatePeople}
                            />
                          </div>
                        </div>
                        <div className="my-4 border-t-[1px] border-slate-200 :border-slate-700"></div>
                        <div className="mt-4 flex flex-col gap-2 sm:flex-row sm:gap-3">
                          <span className="w-28 text-sm :text-[#ffff]">
                            Tasks
                          </span>
  
                          <div className="w-full rounded-2xl p-2 bg-components">
                            {tasks.length > 0 && (
                              <div className="my-2 h-6 w-full overflow-hidden rounded-md">
                                {tasks.length > 0 && (
                                  <div
                                    style={{
                                      width: `${calculateTaskPercenPeoplee()}%`,
                                    }}
                                    className="flex h-6 items-center justify-center bg-[#0d8842] transition-transform duration-100 ease-in"
                                  >
                                    {calculateTaskPercenPeoplee() > 0 &&
                                      `${calculateTaskPercenPeoplee()}%`}
                                  </div>
                                )}
                              </div>
                            )}
  
                            {tasks.map((_t, index) => (
                              <div
                                key={index}
                                className="mb-2 flex items-center justify-between rounded-lg bg-[#ffffff4b] py-3 px-4 bg-slate-800 text-[#ffff]"
                              >
                                <div>
                                  <input
                                    type="checkbox"
                                    className="h-5 w-5 rounded-md"
                                    value={_t.completed ? "on" : "off"}
                                    checked={_t.completed}
                                    onChange={() =>
                                      handleToggleTaskCompleted(index)
                                    }
                                  ></input>
                                  <span className="ml-2">{_t.title}</span>
                                </div>
                                <button
                                  role="button"
                                  aria-label="delete task"
                                  onClick={() => handleDeleteTask(index)}
                                >
                                  <span className="sr-only">Delete task</span>
                                  <TrashIcon className="h-5 w-5 text-[#ffff]" />
                                </button>
                              </div>
                            ))}
                            <AddForm
                              placeholder="Task name..."
                              onSubmit={handleCreateTask}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="flex justify-between border-t-[1px] border-slate-700 py-6 px-4 backdrop-blur-sm">
                        <div className="">
                          <button
                            onClick={deleteCard}
                            type="button"
                            className="inline-flex items-center justify-center gap-1 rounded-md border border-transparent bg-red-700 px-3 py-1 text-base font-medium text-[#ffff] transition-colors duration-150 hover:bg-red-600"
                          >
                            <TrashIcon className="h-5 w-5" />
                            Delete card
                          </button>
                        </div>
                        <div className="flex justify-end gap-2 sm:gap-3">
                          <button
                            onClick={handleSave}
                            type="button"
                            className="inline-flex items-center justify-center gap-1 rounded-md border border-transparent bg-emerald-700 px-3 py-1 text-base font-medium text-[#ffff] transition-colors duration-150"
                          >
                            <DocumentCheckIcon className="h-5 w-5" />
                            Save
                          </button>
                          <button
                            onClick={handleCloseModal}
                            type="button"
                            className="inline-flex justify-center rounded-md border bg-transparent px-3 py-1 text-base font-medium transition-colors duration-150 focus:outline-none focus:ring-1 hover:ring-1 :text-[#ffff]"
                          >
                            Cancel
                          </button>
                        </div>
                      </div>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </div>
        </Dialog>
      </Transition>
    );
}
export default CardModal;



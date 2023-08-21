import { useBoardStore } from "@/store/BoardStore";
import { RadioGroup } from "@headlessui/react";
import { CheckCircleIcon } from "@heroicons/react/20/solid";
import React from "react";

const types = [
  {
    id: "todo",
    name: "Todo",
    description: "Start the new Work to complete",
    color: "bg-red-500",
  },
  {
    id: "inprogress",
    name: "In Progress",
    description: "The Task you are currently working on",
    color: "bg-yellow-500",
  },
  {
    id: "done",
    name: "Done",
    description: "The Task that has been completed",
    color: "bg-green-500",
  },
];

function TaskRadioGroup() {
  const [newTaskType, setNewTaskType] = useBoardStore((state) => [
    state.newTaskType,
    state.setNewTaskType,
  ]);

  return (
    <div className="w-full py-3 pt-6">
      <div className="mx-auto w-full max-w-full">
        <RadioGroup
          value={newTaskType}
          onChange={(e) => {
            setNewTaskType(e);
          }}
        >
          <div className="space-y-2">
            {types.map((type) => (
              <RadioGroup.Option
                key={type.id}
                value={type.id}
                className={({ active, checked }) =>
                  `${
                    active
                      ? "ring-2 ring-white ring-opacity-60 ring-0ffset-2 ring-offset-sky-300"
                      : ""
                  }
                     ${
                       checked
                         ? `${type.color} bg-opacity-70 text-white`
                         : "bg-white"
                     }
                     relative flex cursor-pointer rounded-lg px-4 py-4 shadow-md focus:outline-none
                    `
                }
              >
                {({ active, checked }) => (
                  <div className="flex w-full items-center justify-between">
                    <div className="flex items-center">
                      <div className="text-sm">
                        <RadioGroup.Label
                          as="p"
                          className={`font-medium ${
                            checked ? "text-white" : "text-gray-800"
                          }`}
                        >
                          {type.name}
                        </RadioGroup.Label>
                        <RadioGroup.Description
                          as="span"
                          className={`inline ${
                            checked ? "text-white" : "text-gray-500"
                          }`}
                        >
                          <span>{type.description}</span>
                        </RadioGroup.Description>
                      </div>
                    </div>
                    {checked && (
                      <div className="shrink-2 text-white">
                        <CheckCircleIcon className="h-7 w-7" />
                      </div>
                    )}
                  </div>
                )}
              </RadioGroup.Option>
            ))}
          </div>
        </RadioGroup>
      </div>
    </div>
  );
};

export default TaskRadioGroup;

// {types.map((type) => (
//     <RadioGroup.Option
//       key={type.id}
//       value={type.id}
//       className={({ active, checked }) =>
//         `${
//           active
//             ? "ring-2 ring-white ring-opacity-60 ring-offset-2 ring-offset-sky-200"
//             : ""
//         }
//          ${
//            checked
//              ? `${type.color} bg-opacity-75 bg-white`
//              : "bg-white"
//          } relative flex cursor-pointer rounded-lg px-3 py-3 shadow-md focus:outline-none`
//       }
//     >
//       {({ active, checked }) => (
//           <div className="flex w-full items-center justify-between">
//             <div className="flex items-center">
//               <div className="text-sm">
//                 <RadioGroup.Label
//                   as="p"
//                   className={`font-medium ${
//                     checked ? "text-white" : "text-gray-800"
//                   }`}
//                 >
//                   {type.name}
//                 </RadioGroup.Label>
//                 <RadioGroup.Description
//                   as="span"
//                   className={`inline ${
//                     checked ? "text-white" : "text-gray-500"
//                   }`}
//                 >
//                   <span>{type.description}</span>
//                 </RadioGroup.Description>
//               </div>
//             </div>
//             {checked && (
//               <div className="shrink-2 text-white">
//                 <CheckCircleIcon className="h-7 w-7" />
//               </div>
//             )}
//           </div>
//       )}
//     </RadioGroup.Option>
//   ))}

"use client";

import getUrl from "@/lib/getUrl";
import { useBoardStore } from "@/store/BoardStore";
import { XCircleIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import {
  DraggableProvidedDragHandleProps,
  DraggableProvidedDraggableProps,
} from "react-beautiful-dnd";

type Props = {
  todo: Todo;
  index: number;
  id: TypedColumn;
  innerRef: (element: HTMLElement | null) => void;
  draggableProps: DraggableProvidedDraggableProps;
  dargHandleProps: DraggableProvidedDragHandleProps | null | undefined;
};

const TodoCard = ({
  todo,
  index,
  id,
  innerRef,
  draggableProps,
  dargHandleProps,
}: Props) => {
  const deleteTask = useBoardStore((state) => state.deleteTask);
  const [ImageUrl, setImageUrl] = useState<string | null>(null);

  useEffect(() => {
    if (todo.image) {
      const fetchImage = async () => {
        const url = await getUrl(todo.image!);

        if (url) {
          setImageUrl(url.toString());
        }
      };
      fetchImage()
    }
  }, [todo]);

  return (
    <div
      {...draggableProps}
      {...dargHandleProps}
      ref={innerRef}
      className="bg-white rounded-md space-y-2 drop-shadow-md"
    >
      <div className="flex justify-between p-4 items-center">
        <p>{todo.title}</p>
        <button className="text-red-500 hover:text-red-600">
          <XCircleIcon
            onClick={() => deleteTask(index, todo, id)}
            className="w-10 h-10 ml-5"
          />
        </button>
      </div>
      {ImageUrl && (
        <div className="h-full w-full rounded-b-md">
          <Image
            width={400}
            height={200}
            alt="Task Image"
            src={ImageUrl}
            className="w-full object-contain rounded-b-md"
          />
        </div>
      )}
    </div>
  );
};

export default TodoCard;

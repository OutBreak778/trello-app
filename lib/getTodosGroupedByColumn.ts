import { databases } from "@/appwrite";

export const getTodosGroupedByColumn = async () => {
  const data = await databases.listDocuments(
    process.env.NEXT_PUBLIC_DATABASE_ID!,
    process.env.NEXT_PUBLIC_TODOS_COLLECTION_ID!
  );

  //   console.log(data)

  const todos = data.documents;

  //   console.log(todos);

  const columns = todos.reduce((acc: any, todo: any) => {
    if (!acc.get(todo.status)) {
      acc.set(todo.status, {
        id: todo.status,
        todos: [],
      });
    }

    acc.get(todo.status)!.todos.push({
      $id: todo.$id,
      $createdAt: todo.$createdAt,
      title: todo.title,
      status: todo.status,
      ...(todo.image && { image: JSON.parse(todo.image) }),
    });

    return acc;
  }, new Map<TypedColumn, Column>());

  // console.log(columns)

  const columnTypes: TypedColumn[] = ["todo", "inprogress", "done"];

  for (const columnType of columnTypes) {
    if (!columns.get(columnType)) {
      columns.set(columnType, {
        id: columnType,
        todos: [],
      });
    }
  }

  const SortedColumns = new Map<TypedColumn, Column>(
    // eslint-disable-next-line no-use-before-define
    Array.from(columns.entries()).sort(
      (next, prev) =>
        columnTypes.indexOf(next[0]) - columnTypes.indexOf(prev[0])
    )
  );

  const board: Board = {
    columns: SortedColumns,
  };

  return board;
};

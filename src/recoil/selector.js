import { selector } from "recoil";
import { todoListFilterState, todoListState } from "./atom";

const filteredTodoListState = selector({
  key: "filteredTodoListState",
  get: ({ get }) => {
    const filter = get(todoListFilterState);
    const list = get(todoListState);

    switch (filter) {
      case "Done":
        return list.filter((item) => item.completed);
      case "Incomplete":
        return list.filter((item) => !item.completed);
      default:
        return list;
    }
  },
});

export { filteredTodoListState };

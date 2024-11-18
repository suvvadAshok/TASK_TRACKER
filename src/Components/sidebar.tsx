import React from "react";
import { boards } from "../assets/data";
import { BOARD } from "../assets/typeSchema";

export const Sidebar = () => {
  const [forKey, setForKey] = React.useState<number>(1)
  const [addNewBoard, setaddNewBoard] = React.useState<boolean>(false);
  const [addBoard, setAddBoard] = React.useState<BOARD>({
    id: "",
    boardName: "",
    columns: [],
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setForKey(forKey+1)
    const firstInputElement = e.currentTarget[0] as HTMLInputElement;
    setAddBoard({
      id: firstInputElement.value + String(forKey),
      boardName: firstInputElement.value,
      columns: [],
    });
  };
  [...boards, addBoard]
  boards.map(i=> console.log(i))
  return (
    <div>
      {boards.map((board) => (
        <button type="button" key={board.id}>
          {board.boardName}
        </button>
      ))}
      {addNewBoard && (
        <form onSubmit={handleSubmit}>
          <input type="text" name="addBoard" id="" />
          <button type="submit">Added</button>
        </form>
      )}
      <button type="button" onClick={() => setaddNewBoard(!addNewBoard)}>
        + Add New Board
      </button>
    </div>
  );
};

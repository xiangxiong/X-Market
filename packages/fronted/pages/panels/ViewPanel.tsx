import { useContext } from "react";
import { useDrop } from "react-dnd";
import { ItemTypes } from "./ItemTypes";
import { WorkspaceContext } from "./Workspace";
import { IWorkspaceContext } from "./../shared/types";
import { useEffect } from "react";

interface IBoxTargetProps {
  children: React.ReactNode;
}

export const ViewPanel: React.FC<IBoxTargetProps> = (props) => {
  const { markAsDone } = useContext<IWorkspaceContext>(WorkspaceContext);
  const [{ isOver }, drop] = useDrop(
    () => ({
      accept: ItemTypes.BOX,
      drop: (item: { id: string }, monitor) => {
        markAsDone(item.id);
      },
      collect: (monitor) => ({
        isOver: monitor.isOver(),
      }),
    }),
    [markAsDone]
  );

  return (
    <div
      ref={drop}
      style={{ height: "200px", width: "500px", background: "red" }}
    >
      {props.children}
    </div>
  );
};

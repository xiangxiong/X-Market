import { useContext } from "react";
import { useDrop } from "react-dnd";
import { ItemTypes } from "./ItemTypes";
import { WorkspaceContext } from "./Workspace";
import { IWorkspaceContext } from "../shared/types";

interface IBoxTargetProps {
  children: React.ReactNode;
}

export const ViewportPanel: React.FC<IBoxTargetProps> = (props) => {
  const { markAsDone } = useContext<IWorkspaceContext>(WorkspaceContext);
  const [{ isOver }, drop] = useDrop(
    () => ({
      accept: ItemTypes.BOX,
      drop: (item: { id: number }, monitor) => {
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
      style={{ height: "100%", width: "100%" }}>
      {props.children}
    </div>
  );
};

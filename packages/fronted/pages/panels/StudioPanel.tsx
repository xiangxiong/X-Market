import { useDrag } from "react-dnd";
import styles from "./Workspace.module.css";
import { ItemTypes } from "./ItemTypes";
import { IComponentElementsProps } from "../shared/types";

interface IStudioPanelProps {
  item: IComponentElementsProps;
}

export const StudioPanel: React.FC<IStudioPanelProps> = ({ item }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: ItemTypes.BOX,
    item: item,
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
      handlerId: monitor.getHandlerId(),
    }),
  }));

  return (
    <div ref={drag} className={styles.content_elements}>
      {item.text}
    </div>
  );
};

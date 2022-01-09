import styles from "./Workspace.module.css";
import { IComponentElementsProps } from "../shared/types";
import React from "react";
import { useState } from "react";
import { useCallback } from "react";
import classNames from "classnames";
import * as VisualDesignComponents from "./../component";
import {
  HolderOutlined,
  DeleteOutlined,
  CaretUpOutlined,
  CopyOutlined,
} from "@ant-design/icons";
import { useContext } from "react";
import { WorkspaceContext } from "./Workspace";
import { IWorkspaceContext } from "../shared/types";

interface IViewPanelProps {
  item: IComponentElementsProps;
  list: any;
}

export const ViewPanel: React.FC<IViewPanelProps> = (props) => {

  const  {item,list} = props;
  console.log('props',props);
  console.log('item',item);

  const [active, setActive] = useState<boolean>();
  const { onChangeDragSelectedStatus } =
    useContext<IWorkspaceContext>(WorkspaceContext);

  const onViewPanelHandleClick = useCallback(() => {
    onChangeDragSelectedStatus(item.id,list);
  }, []);

  const viewPanelCls = classNames(styles.view_panel, {
    [styles.view_panel_active]: item.selected,
  });

  const Comp = VisualDesignComponents[item.type];

  const IconStyle: React.CSSProperties = {
    color: "#FFFFFF",
    cursor: "pointer",
    marginLeft: "10px",
  };

  return (
    <div className={viewPanelCls} onClick={onViewPanelHandleClick}>
      <div>
        <HolderOutlined />
        <span>{item.text}</span>
      </div>
      {item.selected && (
        <div className={styles.view_panel_edit_bar}>
          <CaretUpOutlined style={IconStyle} />
          <CopyOutlined style={IconStyle} />
          <DeleteOutlined style={IconStyle} />
        </div>
      )}
      <Comp />
    </div>
  );
};

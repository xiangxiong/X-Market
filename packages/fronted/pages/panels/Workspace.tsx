import React from "react";
import styles from "./Workspace.module.css";
import { StudioPanel } from "./StudioPanel";
import { ViewPanel } from "./ViewPanel";
import { createContext } from "react";
import { IComponentElementsProps } from "../shared/types";


interface IWorkspaceContext{
  markAsDone: (id:string) => void
}

export const WorkspaceContext = createContext<Partial<IWorkspaceContext>>({});

export function Workspace() {
  const componentElements: IComponentElementsProps[] = [
    {
      id: 1,
      status: "init",
      type: "Text",
      icon: "Text",
      text: "文本",
    },
    {
      id: 2,
      status: "init",
      type: "Rich Text",
      icon: "Rich Text",
      text: "富文本",
    },
    {
      id: 3,
      status: "init",
      type: "Number",
      icon: "Number",
      text: "数字",
    },
    {
      id: 4,
      status: "init",
      type: "Multiple choice",
      icon: "Multiple choice",
      text: "多选",
    },
    {
      id: 5,
      status: "init",
      type: "Date choice",
      icon: "Multiple choice",
      text: "日期",
    },
    {
      id: 6,
      status: "init",
      type: "Date choice",
      icon: "Multiple choice",
      text: "图片",
    },
    {
      id: 7,
      status: "init",
      type: "Date choice",
      icon: "Multiple choice",
      text: "链接",
    },
  ];

  const markAsDone = (id: string) => {
    console.log("markAsCount", id);
  };

  return (
    <WorkspaceContext.Provider value={{markAsDone}}>
      <div className={styles.workspace}>
        <div className={styles.navigation}>Nav Bar</div>
        <div className={styles.wrapper}>
          <div className={styles.toolbar}>e3</div>
          <div className={styles.designer}>
            <div className={styles.sidebar}>
              {componentElements.map((item, key) => {
                return <StudioPanel item={item} key={item.id} />;
              })}
            </div>
            <div className={styles.content_model}>
              <div className={styles.content_type}>
                <div className={styles.content_type_title}>类型名称:</div>
                <div className={styles.content_type_input}>
                  <input className={styles.content_input} />
                </div>
              </div>
              <div className={styles.content_create_content}>
                <ViewPanel></ViewPanel>
              </div>
            </div>
          </div>
        </div>
      </div>
    </WorkspaceContext.Provider>
  );
}

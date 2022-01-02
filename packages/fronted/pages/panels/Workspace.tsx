import React from "react";
import styles from "./Workspace.module.css";
import { StudioPanel } from "./StudioPanel";
import { ViewPanel } from "./ViewPanel";
import { createContext } from "react";
import { IComponentElementsProps, IWorkspaceContext } from "../shared/types";
import { useState } from "react";


export const WorkspaceContext = createContext<Partial<IWorkspaceContext>>({});

export function Workspace() {

  const [componentList,setComponentList] = useState<IComponentElementsProps[]>([
    {
      key: (Math.random() * 100).toFixed(0),
      id: 1,
      status: "init",
      type: "Text",
      icon: "Text",
      text: "文本",
    },
    {
      key: (Math.random() * 100).toFixed(0),
      id: 2,
      status: "init",
      type: "Rich Text",
      icon: "Rich Text",
      text: "富文本",
    },
    {
      key: (Math.random() * 100).toFixed(0),
      id: 3,
      status: "init",
      type: "Number",
      icon: "Number",
      text: "数字",
    },
    {
      key: (Math.random() * 100).toFixed(0),
      id: 4,
      status: "init",
      type: "Multiple choice",
      icon: "Multiple choice",
      text: "多选",
    },
    {
      key: (Math.random() * 100).toFixed(0),
      id: 5,
      status: "init",
      type: "Date choice",
      icon: "Multiple choice",
      text: "日期",
    },
    {
      key: (Math.random() * 100).toFixed(0),
      id: 6,
      status: "init",
      type: "Date choice",
      icon: "Multiple choice",
      text: "图片",
    },
    {
      key: (Math.random() * 100).toFixed(0),
      id: 7,
      status: "init",
      type: "Date choice",
      icon: "Multiple choice",
      text: "链接",
    },
  ]);

  const markAsDone = (id: number) => {
    const components = componentList.filter((item,i)=>item.id === id);
    components[0].status = 'done';
    setComponentList(componentList.filter((item,i)=> item.id !== id).concat(components[0]))
  };

  return (
    <WorkspaceContext.Provider value={{markAsDone}}>
      <div className={styles.workspace}>
        <div className={styles.navigation}>Nav Bar</div>
        <div className={styles.wrapper}>
          <div className={styles.toolbar}>e3</div>
          <div className={styles.designer}>
            <div className={styles.sidebar}>
              {componentList.map((item, key) => {
                return <StudioPanel item={item} key={item.key} />;
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
                <ViewPanel>
                    {
                      componentList
                        .filter((item,i)=>item.status === 'done')
                        .map((item,i)=>(
                          <StudioPanel item={item} key={item.key} />
                        ))
                    }
                </ViewPanel>
              </div>
            </div>
          </div>
        </div>
      </div>
    </WorkspaceContext.Provider>
  );
}

import React from "react";
import styles from "./Workspace.module.css";
import { StudioPanel } from "./StudioPanel";
import { ViewportPanel } from "./ViewportPanel";
import { createContext } from "react";
import { IComponentElementsProps, IWorkspaceContext } from "../shared/types";
import { useState } from "react";
import { ViewPanel } from "./ViewPanel";
import { useCallback } from "react";
import { v4 } from 'uuid';

export const WorkspaceContext = createContext<Partial<IWorkspaceContext>>({});

export function Workspace() {
  const [componentList, setComponentList] = useState<IComponentElementsProps[]>(
    [
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
        type: "RichText",
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
        type: "MultipleChoice",
        icon: "Multiple choice",
        text: "多选",
      },
      {
        key: (Math.random() * 100).toFixed(0),
        id: 5,
        status: "init",
        type: "DateChoice",
        icon: "Multiple choice",
        text: "日期",
      },
      {
        key: (Math.random() * 100).toFixed(0),
        id: 6,
        status: "init",
        type: "Image",
        icon: "Multiple choice",
        text: "图片",
      },
      {
        key: (Math.random() * 100).toFixed(0),
        id: 7,
        status: "init",
        type: "Link",
        icon: "Multiple choice",
        text: "链接",
      },
    ]
  );

  const [dragList, setDragList] = useState<IComponentElementsProps[]>();

  const markAsDone = (id: number) => {

    const components = componentList.filter((item, i) => item.id === id);
    components[0].status = "done";
    components[0].componentId = v4();

    initializationSelectedItems(components);
    console.log('result',components);

    setDragList((state) => {
      console.log('state',state);
      if (state) {
        return components.concat(state);
      }
      return components;
    });

    const list = componentList
      .filter((item, i) => item.id !== id)
      .concat(components[0])
      .sort((a, b) => a.id - b.id);

    setComponentList(list.sort());
  };

  const initializationSelectedItems = (
    componentList: IComponentElementsProps[]
  ) => {
    const result = componentList.filter((v, i) => {
      if (!Object.keys(v).includes("selected")) {
        Object.defineProperty(v, "selected", {
          value: false,
          writable: true,
          enumerable: true,
        });
      }
    });
    return result;
  };

  console.log("dragList", dragList);
  const onChangeDragSelectedStatus = (index: number) => {
    console.log("index", index);
    console.log("dragList", dragList);
    // const result:IComponentElementsProps[] = dragList?.map((item,key)=>{
    //   item.id === index? item.selected = true:item.selected = false
    //   return item;
    // });
    // console.log('result',result);
    // setDragList(result);
  }

  const onHandleSaveChanges = useCallback(() => {
    console.log("dragList", dragList);
  }, [dragList]);

  console.log("void List", dragList);

  return (
    <WorkspaceContext.Provider
      value={{ markAsDone, onChangeDragSelectedStatus }}>
      <div className={styles.workspace}>
        <div className={styles.navigation}>Nav Bar</div>
        <div className={styles.wrapper}>
          <div className={styles.toolbar}>
            <button onClick={onHandleSaveChanges}>Save Changes</button>
          </div>
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
                <ViewportPanel>
                  {dragList &&
                    dragList.map((item, i) => (
                      <ViewPanel item={item} key={item.componentId} list={dragList}/>
                    ))}
                </ViewportPanel>
              </div>
            </div>
          </div>
        </div>
      </div>
    </WorkspaceContext.Provider>
  );
}

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
  const [tools, setTools] = useState<IComponentElementsProps[]>(
    [
      {
        status: "init",
        type: "Text",
        icon: "Text",
        text: "文本",
      },
      {
        status: "init",
        type: "RichText",
        icon: "Rich Text",
        text: "富文本",
      },
      {
        status: "init",
        type: "Number",
        icon: "Number",
        text: "数字",
      },
      {
        status: "init",
        type: "MultipleChoice",
        icon: "Multiple choice",
        text: "多选",
      },
      {
        status: "init",
        type: "DateChoice",
        icon: "Multiple choice",
        text: "日期",
      },
      {
        status: "init",
        type: "Image",
        icon: "Multiple choice",
        text: "图片",
      },
      {
        status: "init",
        type: "Link",
        icon: "Multiple choice",
        text: "链接",
      },
    ]
  );
  const [dragList, setDragList] = useState<IComponentElementsProps[]>();

  const markAsDone = (item: IComponentElementsProps) => {
    console.log('id',item);
    // create a new one each time.
    const componentList:IComponentElementsProps[] = [];

    const createComponentEle:IComponentElementsProps = {
      componentId:v4(),
      status: "init",
      type: item.type,
      icon: "Text",
      text: "文本",
      selected: false
    }

    componentList.push(createComponentEle);
    // {
    //   key: (Math.random() * 100).toFixed(0),
    //   id: 1,
    //   status: "init",
    //   type: "Text",
    //   icon: "Text",
    //   text: "文本",
    // }

    // const components = componentList.filter((item, i) => item.id === id);
    // components[0].status = "done";
    // components[0].componentId = v4() + '-' + Math.random();
    // initializationSelectedItems(components);

    setDragList((state) => {
      if (state) {
        return componentList.concat(state);
      }
      return componentList;
    });

    // const list = componentList
    //   .filter((item, i) => item.id !== id)
    //   .concat(componentList[0])
    //   .sort((a, b) => a.id - b.id);
    setTools(componentList);
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


  // TODO：数据渲染的方法应该不对.
  const onSelectedItem = useCallback((componentId?: string,list?:any)=>{
    console.log('componentId',componentId);
    console.log('list',list);
  },[]);
  
  // (componentId?: string,list?:any) => {
  //   console.log('componentId',componentId);
  //   console.log('dragList',dragList);
  //   console.log('list',list);
  //   // const result:IComponentElementsProps[] | undefined = dragList?.map((item,key)=>{
  //   //   item.componentId === componentId? item.selected = true:item.selected = false
  //   //   return item;
  //   // });
  //   // console.log('result',result);
  //   // setDragList(result);
  // }

  const onHandleSaveChanges = useCallback(() => {
  }, [dragList]);

  console.log('dragList',dragList);

  return (
    <WorkspaceContext.Provider
      value={{ markAsDone }}>
      <div className={styles.workspace}>
        <div className={styles.navigation}>Nav Bar</div>
        <div className={styles.wrapper}>
          <div className={styles.toolbar}>
            <button onClick={onHandleSaveChanges}>Save Changes</button>
          </div>
          <div className={styles.designer}>
            <div className={styles.sidebar}>
              {tools.map((item, key) => {
                return <StudioPanel item={item} key={item.type} />;
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
                      <ViewPanel onSelectedItem={onSelectedItem} item={item} key={item.componentId} list={dragList}/>
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

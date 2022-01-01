import React from "react";
import styles from './Content.module.css';

interface IComponentElementsProps{
  type:string;
  icon:string;
  text:string;
}

export function Content() {

  const componentElements:IComponentElementsProps[] = [{
    type:'Text',
    icon:'Text',
    text:'文本'
  },{
    type:'Rich Text',
    icon:'Rich Text',
    text:'富文本'
  },{
    type:'Number',
    icon:'Number',
    text:'数字'
  },{
    type:'Multiple choice',
    icon:'Multiple choice',
    text:'多选'
  },{
    type:'Date choice',
    icon:'Multiple choice',
    text:'日期'
  },{
    type:'Date choice',
    icon:'Multiple choice',
    text:'图片'
  },{
    type:'Date choice',
    icon:'Multiple choice',
    text:'链接'
  }];

  return (
    <>
      <div className={styles.workspace}>
        <div className={styles.navigation}>Nav Bar</div>
        <div className={styles.wrapper}>
          <div className={styles.toolbar}>e3</div>
          <div className={styles.designer}>
            <div className={styles.sidebar}>
              {/* <div>内容元素</div> */}
              {
                componentElements.map((item,key)=> {
                  return <div className={styles.content_elements} key={key}>{item.text}</div>
                })
              }
            </div>
            <div className={styles.content_model}>
              <div className={styles.content_type}>
                  <div className={styles.content_type_title}>类型名称:</div>
                  <div className={styles.content_type_input}>
                    <input className={styles.content_input}/>
                  </div>
              </div>
              <div className={styles.content_create_content}>
                eeee
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
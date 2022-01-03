import styles from './Workspace.module.css';
import { IComponentElementsProps } from "../shared/types";
import React from 'react';
import { useState } from 'react';
import { useCallback } from 'react';
import classNames from 'classnames';
import * as VisualDesignComponents from './../component'

interface IViewPanelProps{
    item:IComponentElementsProps
}

export const ViewPanel:React.FC<IViewPanelProps> = ({item}) => {

    const [active,setActive] = useState<boolean>();

    const onViewPanelHandleClick = useCallback(()=>{
        setActive(true);
    },[]);

    const viewPanelCls = classNames(styles.view_panel,{
        [styles.view_panel_active] : active
    })
    const Comp = VisualDesignComponents[item.type]

    return <div className={viewPanelCls} onClick={onViewPanelHandleClick}>
        {item.text}
        {
            active && <div className={styles.view_panel_edit_bar}></div>
        } 
        <Comp/>
    </div>
}
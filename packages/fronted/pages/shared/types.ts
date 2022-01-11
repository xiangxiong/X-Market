export interface IComponentElementsProps {
  status: 'init' | 'done';
  type: string;
  icon: string;
  text: string;
  selected?: boolean
  componentId?: string;
}
export interface IWorkspaceContext{
  markAsDone: (item:IComponentElementsProps) => void,
  onChangeDragSelectedStatus: (componentId?: string,list?:any) =>void
}
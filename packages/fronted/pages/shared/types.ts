export interface IComponentElementsProps {
  key: string;
  id: number;
  status: 'init' | 'done';
  type: string;
  icon: string;
  text: string;
}
export interface IWorkspaceContext{
  markAsDone: (id:number) => void
}
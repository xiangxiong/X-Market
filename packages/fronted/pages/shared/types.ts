export interface IComponentElementsProps {
  id: string;
  status: 'init' | 'done';
  type: string;
  icon: string;
  text: string;
}

export interface IWorkspaceContext{
  markAsDone: (id:string) => void
}
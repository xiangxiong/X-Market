import type { NextPage } from 'next'
import { Workspace } from './panels/Workspace';
import { DndProvider } from 'react-dnd';
import {HTML5Backend} from 'react-dnd-html5-backend';

const Home: NextPage = () => {
  return (
    <DndProvider backend={HTML5Backend}>
        <Workspace/>
    </DndProvider>
  );
}

export default Home
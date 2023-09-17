
import React from 'react';
import KanbanBoard from '../kanban/KanbanBoard';
import KanbanContextComponent from '@/context/KanbanContextComponent';

type MainPageProps = {
    isOpen: boolean,
};

const MainPage:React.FC<MainPageProps> = ({isOpen}) => {
    
    return <div className={`${!isOpen? "ml-10":""}`}>
        <KanbanContextComponent>
            <KanbanBoard />
        </KanbanContextComponent>
    </div>
}
export default MainPage;
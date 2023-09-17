"use client"
import KanbanContextComponent from '@/context/KanbanContextComponent';
import React from 'react';
import KanbanBoard from './kanban/KanbanBoard';

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
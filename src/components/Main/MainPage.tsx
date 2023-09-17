import React from 'react';

type MainPageProps = {
    isOpen: boolean,
};

const MainPage:React.FC<MainPageProps> = ({isOpen}) => {
    
    return <div className={`${!isOpen? "ml-10":""}`}>Have a good coding</div>
}
export default MainPage;
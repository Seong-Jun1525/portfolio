import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PortfolioIndex from './components/PortfolioIndex';
import MainContent from './components/3DMenu/MainContent';
import MyGoals from './components/3DMenu/MyGoals';
import Nav from './components/layout/Nav';
import Footer from './components/layout/Footer';
import { Provider } from 'react-redux';
import store from './redux/store/store';
import MyFirstProject from './components/3DMenu/MyFirstProject';

const App = () => {
    return (
        <>
            <Provider store={store}>
                <BrowserRouter>
                    {/* 항상 표시될 Nav 컴포넌트 */}
                    <Nav />
                    <Routes>
                        {/* 기본 경로 */}
                        <Route path="/" element={<PortfolioIndex />} />
                        {/* MainContent 관련 라우팅 */}
                        <Route path="/main-content" element={<MainContent />}>
                            <Route path=":id" element={<MyFirstProject />} />
                            <Route path=":id" element={<MyGoals />} />
                        </Route>
                    </Routes>
                </BrowserRouter>
            </Provider>
        </>
    );
};

export default App;

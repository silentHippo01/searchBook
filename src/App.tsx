import { Route, Routes } from 'react-router-dom';
import { BookPage } from './Pages/BookPage';
import { MainPage } from './Pages/MainPage';

const App = () => {
    return (
        <div className='app'>
            <Routes >
                <Route path="book/:id" element={<BookPage />} />
                <Route path="/" element={<MainPage />} />
            </Routes>
        </div>
    );
};

export default App;
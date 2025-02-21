import { Route, Routes } from 'react-router';
import { ExperiencePage, MainPage, SkillsPage } from './pages';
import { TeachingPage } from './pages/TeachingPage';

export const Router = () => {
  return (
    <Routes>
      <Route path='/' element={<MainPage />} />
      <Route path='skills' element={<SkillsPage />} />
      <Route path='experience' element={<ExperiencePage />} />
      <Route path='teaching' element={<TeachingPage />} />
    </Routes>
  );
};

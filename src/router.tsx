import { Route, Routes } from 'react-router';
import { MainPage, SkillsPage, ExperiencePage } from './pages';

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="skills" element={<SkillsPage />} />
      <Route path="experience" element={<ExperiencePage />} />
    </Routes>
  );
};

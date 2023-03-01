import { Route, Routes } from 'react-router-dom';

import DisplaySecret from './displaySecret/DisplaySecret';

export const Routing = () => {
  return (
    <Routes>
      <Route path="/:format/:key/:password" element={<DisplaySecret />} />
      <Route path="/:format/:key" element={<DisplaySecret />} />
    </Routes>
  );
};

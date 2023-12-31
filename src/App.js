import { Route, Routes } from 'react-router-dom';

import VideoPlayerContext from './components/context/VideoPlayerContext';

import Header from './components/Header';
import Home from './components/Home';
import Settings from './components/Setting';
import Player from './components/Player';
import NotFound from './components/NotFound';
import { useContext } from 'react';

function App() {
  const context = useContext(VideoPlayerContext);

  return (
    <div>
      <Header />
      <Routes>
        <Route path={`${context.root}`} element={<Home />} />
        <Route path={`${context.root}/settings`} element={<Settings />} />
        <Route path={`${context.root}/video/:id`} element={<Player />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;

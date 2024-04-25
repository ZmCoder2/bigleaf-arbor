import { HashRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home'
import Layout from './components/Layout'
import './App.scss';

function App() {
  return (
    <HashRouter basename='/'>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />

        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;

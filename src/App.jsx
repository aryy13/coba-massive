import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Beranda from './pages/Beranda';
import Bimbingan from './pages/Bimbingan';
import Kalender from './pages/Kalender';
import Profil from './pages/Profil';
import Repository from './pages/Repository';
import Chat from './pages/Chat';
import Signin from './pages/Signin';
import CreateBimbingan from './pages/CreateBimbingan';
import MhsBeranda from './pages/MhsBeranda';
import Bimdosen from './pages/Bimdosen';
import Jurnaldosen from './pages/Jurnaldosen';
import Editbim from './pages/Editbim';
import KalenderDosen from './pages/KalenderDosen';
import DosenBeranda from './pages/DosenBeranda';
import Chatdosen from './pages/Chatdosen';
import JadwalBimbingan from './pages/JadwalBimbingan';
import Profile from './pages/Profile';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Beranda />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/Bimbingan" element={<Bimbingan />} />
          <Route path="/Kalender" element={<Kalender />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/profil" element={<Profil />} />
          <Route path="/repository" element={<Repository />} />
          <Route path="/createBimbinganMhs" element={<CreateBimbingan />} />
          <Route path="/BerandaMhs" element={<MhsBeranda />} />
          <Route path="/KalenderDosen" element={<KalenderDosen />} />
          <Route path="/Bimdosen" element={<Bimdosen />} />
          <Route path="/Jurnaldosen" element={<Jurnaldosen />} />
          <Route path="/Editbim" element={<Editbim />} />
          <Route path="/KalenderDosen" element={<KalenderDosen />} />
          <Route path="/DosenBeranda" element={<DosenBeranda />} />
          <Route path="/Chatdosen" element={<Chatdosen />} />
          <Route path="/JadwalBimbingan" element={<JadwalBimbingan />} />
          <Route path="/Profile" element={<Profile />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

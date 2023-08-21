import { useState } from 'react';
import { Modal } from './components/modal';
import { AppModal } from './components/TesteModalApps/AppModal';

function App() {
  const [openModal, setOpenModal] = useState(false)

  return (
    <>
      <div className='p-32'>
        <button onClick={() => setOpenModal(true)} className='p-5 text-xl bg-blue-400 rounded-lg w-fit font-bold'>Clique para abrir o modal!!!!</button>
      </div>
      <AppModal open={openModal} onClose={() => setOpenModal(false)} callback={() => setOpenModal(false)} />
    </>
  );
}

export default App;

import { useState } from 'react';

// packages
import ReactModal from 'react-modal';

// components
import MyBeers from '@/components/MyBeers';
import AllBeers from '@/components/AllBeers';
import AddBeerForm from '@/components/AddBeerForm';
import ButtonPrimary from '@/components/Buttons/Primary';

ReactModal.setAppElement('#root');

function App() {
  const [showModal, setShowModal] = useState(false);
  const [selectedTab, setSelectedTab] = useState<'all' | 'my'>('my');

  return (
    <main className='container px-2 mx-auto'>
      <nav className='flex flex-row items-center justify-start py-4 text-lg'>
        <ul className='flex flex-row items-center justify-start gap-0 xs:gap-5'>
          <li
            className={`cursor-pointer p-1 ${
              selectedTab === 'all' ? 'font-bold' : ''
            }`}
            onClick={() => setSelectedTab('all')}
          >
            All Beers
          </li>
          <li
            className={`cursor-pointer p-1 ${
              selectedTab === 'my' ? 'font-bold' : ''
            }`}
            onClick={() => setSelectedTab('my')}
          >
            My Beers
          </li>
        </ul>

        {selectedTab === 'my' && (
          <ButtonPrimary
            classNames='ml-auto text-sm font-semibold xs:px-5'
            onClick={() => setShowModal(true)}
          >
            Add a new beer
          </ButtonPrimary>
        )}
      </nav>

      <hr />

      <AllBeers display={selectedTab === 'all'} />
      <MyBeers display={selectedTab === 'my'} />

      <ReactModal
        isOpen={showModal}
        contentLabel='Add custom beer'
        overlayClassName='fixed inset-0 grid w-screen h-screen bg-sonic-silver/75 place-items-center'
        className='p-5 bg-white border rounded drop-shadow-md'
      >
        <AddBeerForm closeModal={() => setShowModal(false)} />
      </ReactModal>
    </main>
  );
}

export default App;

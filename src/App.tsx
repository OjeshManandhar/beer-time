import { useState } from 'react';

// components
import MyBeers from '@/components/MyBeers';
import AllBeers from '@/components/AllBeers';
import ReactModal from 'react-modal';

function App() {
  const [showModal, setShowModal] = useState(false);
  const [selectedTab, setSelectedTab] = useState<'all' | 'my'>('all');

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
          <button
            className='p-2 ml-auto text-sm font-semibold text-white rounded bg-cerulean-blue xs:px-5'
            onClick={() => setShowModal(true)}
          >
            Add a new beer
          </button>
        )}
      </nav>

      <hr />

      <AllBeers display={selectedTab === 'all'} />
      <MyBeers display={selectedTab === 'my'} />

      <ReactModal isOpen={showModal} contentLabel='Minimal Modal Example'>
        <button onClick={() => setShowModal(false)}>Close Modal</button>
      </ReactModal>
    </main>
  );
}

export default App;

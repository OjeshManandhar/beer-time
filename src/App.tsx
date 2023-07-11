import { useState } from 'react';

function App() {
  const [selectedTab, setSelectedTab] = useState<'all' | 'my'>('all');

  return (
    <main className='container mx-auto'>
      <nav className='flex flex-row items-center justify-start px-1 py-4 text-lg'>
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
          <button className='px-1 py-1 ml-auto text-white bg-blue-500 rounded xs:px-5'>
            Add a new beer
          </button>
        )}
      </nav>

      <hr />
    </main>
  );
}

export default App;

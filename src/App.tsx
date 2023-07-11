// components
import Test from '@/components/Test';
import Dummy from '@/components/Dummy';

// env
import { TEST_KEY } from './env_config';

function App() {
  return (
    <>
      <h1 className='text-3xl font-bold underline'>{TEST_KEY}</h1>

      <Test />
      <Dummy />
    </>
  );
}

export default App;

import { useEffect } from 'react';
import getAllCharacers from '../../services/DisneyApi';
import { queryAllCharacers } from '../../query';

function App() {
  useEffect(() => {
    getAllCharacers(queryAllCharacers(1, 50)).then(({ data }) => console.log(data));
  }, []);

  return <div>Hello</div>;
}

export default App;

import React from 'react';
import useGet from './useGet'

const url = 'https://mymoney-rodrigomartins.firebaseio.com/movimentacoes.json'

function App() {
  const data = useGet(url)

  return (
    <div>
      {
        JSON.stringify(data.data)
      }
      {
        data.loading &&
        <div>Loading</div>
      }
    </div>
  );
}

export default App;

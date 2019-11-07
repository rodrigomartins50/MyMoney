import React from 'react';
import useGet from './useGet'
import usePost from './usePost'
import useDelete from './useDelete'

const url = 'https://mymoney-rodrigomartins.firebaseio.com/movimentacoes.json'

function App() {
  const data = useGet(url)
  const [postData, post] = usePost(url)
  const [deleteData, remove] = useDelete()

  const saveNew = () => {
    post({valor: 10, descricao:'Olá'})
  }

  const doRemove = () => {
    remove ('https://mymoney-rodrigomartins.firebaseio.com/movimentacoes/-Lt2CYtrF6o06OOFZDum.json')
  }

  return (
    <div>
      {
        JSON.stringify(data.data)
      }
      {
        data.loading &&
        <div>Loading</div>
      }

      <button onClick={saveNew}>Salvar</button>
      <pre>{JSON.stringify(postData)}</pre>
      <button onClick={doRemove}>Delete</button>
      <pre>{JSON.stringify(deleteData)}</pre>
    </div>
  );
}

export default App;

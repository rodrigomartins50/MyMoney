import React from 'react';
import Rest from './rest'

const baseUrl = 'https://mymoney-rodrigomartins.firebaseio.com/'

const {useGet, usePost, useDelete} = Rest(baseUrl)
 
function App() {
  const data = useGet('movimentacoes/2019-11')
  const [postData, post] = usePost('movimentacoes/2019-11')
  const [deleteData, remove] = useDelete()

  const saveNew = () => {
    post({valor: 10, descricao:'Olá'})
  }

  const doRemove = () => {
    remove ('movimentacoes/2019-11/-Lt2eHYd8gd31rKRQaLH')
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

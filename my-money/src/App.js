import React from 'react';
import Rest from './rest'

import Header from './elements/Header'
import Meses from './Meses'
import AdicionarMes from './AdicionarMes';


const baseUrl = 'https://mymoney-rodrigomartins.firebaseio.com/'

const {useGet, usePost, useDelete} = Rest(baseUrl)
 
function App() {
  //const data = useGet('movimentacoes/2019-11')
  const data = useGet('meses')
  // const [postData, post] = usePost('movimentacoes/2019-11')
  // const [deleteData, remove] = useDelete()

  const saveNew = () => {
    //post({valor: 10, descricao:'Olá'})
  }

  const doRemove = () => {
    //remove ('movimentacoes/2019-11/-Lt2eHYd8gd31rKRQaLH')
  }

  return (
    <div>
      <Header />

      <div className='container'>        
        <AdicionarMes />
        <Meses />
      </div>
      {JSON.stringify(data)}
    </div>
  );
}

export default App;

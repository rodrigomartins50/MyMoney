import React from 'react'
import Rest from '../utils/rest'

const baseUrl = 'https://mymoney-rodrigomartins.firebaseio.com/'

const {useGet} = Rest(baseUrl)

const Movimentacoes = ({ match }) => {

  const data = useGet(`movimentacoes/${match.params.data}`)

  return (
    <div className='container'>
      <h1>Movimentações</h1>

      <table className='table'>
        <thead>
          <tr>
            <th>Descrição</th>
            <th>Valor</th>
          </tr>
        </thead>
        <tbody>
          {
            data.data &&
            Object
              .keys(data.data)
              .map(movimentacao => {
                return (
                  <tr>
                    <td>{data.data[movimentacao].descricao}</td>
                    <td>{data.data[movimentacao].valor}</td>
                  </tr>
                )
              })
            }
            
            <tr>
              <td><input type='text' /></td>
              <td><input type='text' /></td>
            </tr>
          
        </tbody>
      </table>
    </div>
  )
}

export default Movimentacoes

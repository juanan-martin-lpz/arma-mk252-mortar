import React from 'react'
import './Table.css'

const Table = ({ data }) => {


    return (
      <table className='table'>
      <thead>
        <tr>
          <th>Altura Propia</th>
          <th>Denominacion</th>
          <th>Municion</th>
          <th>Distancia</th>
          <th>Altura</th>
          <th>Rumbo</th>
          <th>Elevacion</th>
          <th>Azimuth</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
        <tr key={index}>
          <td>{item.alturaPropia}</td>
          <td>{item.denominacion}</td>
          <td>{item.municion}</td>
          <td>{item.distancia}</td>
          <td>{item.altura}</td>
          <td>{item.rumbo}</td>
          <td>{item.resultado}</td>
          <td>{item.azimuth}</td>
        </tr>
        ))}
      </tbody>
      </table>
    )
  }

  export default Table;
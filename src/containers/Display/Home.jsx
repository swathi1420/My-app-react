import { TableData } from './tableData';

function Home() {
  const DisplayData=TableData.map(
    (info)=>{
        return(
            <tr>
                <td>{info.id}</td>
                <td>{info.name}</td>
                <td>{info.place}</td>
            </tr>
        )
    }
)

return(
  <div className='table-data'>
      <table>
          <thead>
              <tr>
              <th>Sr.NO</th>
              <th>Name</th>
              <th>Place</th>
              </tr>
          </thead>
          <tbody>
            
            {DisplayData}
              
          </tbody>
      </table>
       
  </div>
)
}

export default Home;
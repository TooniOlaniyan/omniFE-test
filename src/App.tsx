import './index.css'
import FilterForm from "./components/FilterForm";
import DataTable from './components/DataTable';
import { useState } from 'react';

function App() {
  const [data, setData] = useState([])
  return (
    <div className="w-full p-10 h-full bg-grey flex flex-col gap-10">
      <header>
        <h1 className='font-bold text-3xl'>Student Data Table</h1>
      </header>
        <div>
          <FilterForm />
        </div>
        <div>
          <DataTable filteredData={data}/>
        </div>
    </div>
  );
}

export default App;

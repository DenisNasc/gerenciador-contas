import React, {useState} from 'react';
import './App.css';
import axios from 'axios'

import Register from './components/register'



const App = () => {
    const [valueProduto,changeValueProduto] = useState('')
    const [valuePreco,changeValuePreco] = useState('')
    const [valueSupermercado,changeValueSupermercado] = useState('')
    const [valueData,changeValueData] = useState('')

    const getData = async () => {
        const data = await axios.get('http://localhost:7000/database/LIVRARIA')
        console.log(data.data)
    }
    
    return (
        <div className="app">
            <span children='Registrar compra no supermercado'/>
            <div className='form-container'>          
                <Register tipo='Produto' handleChange={changeValueProduto} value={valueProduto}/>
                <Register tipo='Preço' handleChange={changeValuePreco} value={valuePreco}/>            
                <Register tipo='Supermercado' handleChange={changeValueSupermercado} value={valueSupermercado}/>
                <Register tipo='Data' handleChange={changeValueData} value={valueData}/>
            </div>
            <button children='Send' onClick={getData}/>
        </div>
    )
}

export default App;

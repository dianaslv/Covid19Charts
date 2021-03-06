import React from 'react';
import {Cards, Chart} from './components';
import styles from './App.module.css'
import {fetchData} from "./api";

class App extends React.Component{
    state ={
        //constructor automatically get in the backend
        data:{}
    }


    async componentDidMount() {
        const fetchedData = await fetchData()
        console.log(fetchedData);
        this.setState({data:fetchedData})
    }

    render() {
        const {data} = this.state;
    return(
        <div className={styles.container}>
          <Cards data ={data}/>
          <Chart/>
        </div>
    )
  }
}

export default App;

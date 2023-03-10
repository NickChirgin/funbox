import styles from './App.module.scss'
import data from './assets/data.json'
import ProductList from './Components/ProductList/ProductList.jsx';

function App() {

  return(
		<div className={styles.app}>
			<h1 className={styles.app__title}>Ты сегодня покормил кота?</h1>
			<ProductList data={data.items}/>
		</div>
	);
}

export default App

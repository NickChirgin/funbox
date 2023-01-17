import styles from './App.module.scss'
import Card from './Components/Card/'
import data from './assets/data.json'

function App() {

  return(
		<div className={styles.app}>
			<h1 className={styles.app__title}>Ты сегодня покормил кота?</h1>
      <Card data={data.items[1]} />
		</div>
	);
}

export default App

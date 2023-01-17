import styles from './App.module.scss'
import Card from './Components/Card/'

function App() {

  return(
		<div className={styles.app}>
			<h1 className={styles.app__title}>Ты сегодня покормил кота?</h1>
      <Card />
		</div>
	);
}

export default App

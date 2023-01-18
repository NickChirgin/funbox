import { useMemo } from 'react';
import Card from '../Card';
import styles from './ProductList.module.scss';


const ProductList = ({ data }) => {
	
	const products = useMemo(()=> {
		return data.map(item => 
			<Card key={item.id} data={item}/>	
		)
	}, [data]);
	
	return(
		<div className={styles.productList}>
			{products}
		</div>
	)
}

export default ProductList;
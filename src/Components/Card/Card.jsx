
import styles from './Card.module.scss';
import cn from 'classnames';
import { useEffect, useMemo, useState } from 'react';


const Card = ({ data }) => {


  const additions = useMemo(() => {
		return data.addition.map(({value, descr}) => {
			return <p key={data.id} className={styles.addition__item}>
				{value && <span>{value}</span>}
				{descr}
			</p>
		})
	}, [data.addition])

	return (
		<div className={styles.card}>
			<p className={styles.card__subtitle}>
						'Котэ не одобряет?' 
			</p>

			<p className={styles.card__title}>Нямушка</p>
			<p className={styles.card__taste}>{data.taste}</p>
			<div className={cn(styles.addition, styles.card__addition)}>
        {additions}
			</div>		
			
			<div className={cn(styles.weight, styles.card__weight)}>
				<span className={styles.weight__count}>{data.weight}
				</span>
				<span className={styles.weight__des}> кг</span>
			</div>
		</div>
	);
};

export default Card;
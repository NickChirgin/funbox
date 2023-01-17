
import styles from './Card.module.scss';
import { useEffect, useMemo, useState } from 'react';

const Card = (props) => {

	return (
		<div className={styles.card}>
			<p className={styles.card__subtitle}>
						'Котэ не одобряет?' 
			</p>

			<p className={styles.card__title}>Нямушка</p>
			<p className={styles.card__taste}>taste</p>
			<div className={[styles.addition, styles.card__addition]}>
			</div>		
			
			<div className={[styles.weight, styles.card__weight]}>
				<span className={styles.weight__count}>
				</span>
				<span className={styles.weight__des}>кг</span>
			</div>
		</div>
	);
};

export default Card;
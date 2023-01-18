
import styles from './Card.module.scss';
import cn from 'classnames';
import { useEffect, useMemo, useState } from 'react';


const Card = ({ data }) => {
	const [isSelected, setIsSelected] = useState(false)
	const [isIn, setIsIn] = useState(true)
	const [isOut, setIsOut] = useState(false)

	useEffect(() => {
		isSelected && setIsIn(false)
	} , [isSelected])

	const clickHandler = () => {
		setIsSelected(prev => !prev)
	}

  const additions = useMemo(() => {
		return data.addition.map(({value, descr}) => {
			return <p className={styles.addition__item}>
				{value && <span>{value}</span>}
				{descr}
			</p>
		})
	}, [data.addition])

	const cardClasses = cn(styles.card, {
		[ styles.card_default  ] : !isSelected && !data.isDisabled,
		[ styles.card_selected ] : isSelected && !data.isDisabled,
		[ styles.card_disabled ] : data.isDisabled
	})

	return (
		<div className={styles.product}>
			<div className={cardClasses}
			onClick={clickHandler} 
			onMouseEnter={() => { !data.isDisabled && isOut && setIsIn(true)} } 
			onMouseLeave={() => {setIsIn(false); setIsOut(true)}}>
			<p className={styles.card__subtitle}>
				{ isSelected && isIn && isOut
					?	
						'Котэ не одобряет?' 
					:
						'Сказочное заморское яство'
				} 
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
			<div>
			{data.isDisabled 
				?
					<p className={cn(styles.product__descr, styles.product__descr_disabled)}> 
						Печалька, {data?.taste} закончился. 
					</p>
				:  
					isSelected 
				? 
					<p className={styles.product__descr}>{data?.descr || null}</p>
				: 
					<p className={styles.product__descr}> 
						Чего сидишь? Порадуй котэ,
						<button className={styles.product__btn} onClick={clickHandler}>
							<span>купи</span>.
						</button>
					</p>
			}
			</div>
		</div>
		
	);
};

export default Card;
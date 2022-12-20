import React from 'react';
import Input from '../UI/Input';
import style from './MealItemForm.module.css';

const MealItemFrom = (props) => {

    return (
        <form className={style.form}>
            <Input label='Amount' input={{
                id: 'amount_' + props.id,
                type: 'number',
                min: '1',
                max: '8',
                step: '1',
                defaultValue: '1'
            }} />
            <button>+ add</button>
        </form>
    );
}

export default MealItemFrom;
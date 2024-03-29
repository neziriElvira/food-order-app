import style from './Checkout.module.css';


const Checkout = (props) => {

    const confirmHandler = event => {
        event.preventDefault();
    }

    return (
        <form onSubmit={confirmHandler}>
            <div className={style.control}>
                <label htmlFor='name'>Your name</label>
                <input type='text' id='name' />
            </div>
            <div className={style.control}>
                <label htmlFor='street'>Street</label>
                <input type='text' id='street' />
            </div>
            <div className={style.control}>
                <label htmlFor='postal'>Postal Code</label>
                <input type='text' id='postal' />
            </div>
            <div className={style.control}>
                <label htmlFor='city'>city</label>
                <input type='text' id='city' />
            </div>
            <button type='button' onClick={props.onCancel}>Cancel</button>
            <button>Confirm</button>
        </form>
    );
}

export default Checkout;
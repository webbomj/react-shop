import {BasketItem} from './BasketItem';


function BasketList(props) {
    const {
        order = [], 
        removeFromBasket= Function.prototype,
        handleBasketShow = Function.prototype,
        incQuantity = Function.prototype,
        decQuantity = Function.prototype,
    } = props;

    const totalPrice = order.reduce((sum, el) => {
        return sum + el.price * el.quantity
    }, 0)

    return (
        <ul className='collection basket-list'>
            <li className='collection-item active'>Корзина <i className='material-icons basket-close' onClick={handleBasketShow}>close</i></li>
            {
                order.length ? order.map(item => (
                    <BasketItem key={item.id} {...item} removeFromBasket={removeFromBasket} incQuantity={incQuantity} decQuantity={decQuantity} />
                )) : <li className='collection-item'>Корзина пуста</li>
            }
            <li className='collection-item active'>Общая стоимость: {totalPrice} руб.</li>
            <li className='collection-item'>
                <button className="btn btm-small right">
                    Оформить
                </button>
            </li>
        </ul>
    )
}

export {BasketList}
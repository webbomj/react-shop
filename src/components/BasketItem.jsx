function BasketItem(props) {
    const {
        id,
        name,
        price,
        quantity,
        removeFromBasket = Function.prototype,
        incQuantity = Function.prototype,
        decQuantity = Function.prototype,
    } = props;

    return <li className='collection-item' key={id}>
        {name} <button onClick={() => decQuantity(id)}>-</button> 
        x {quantity} 
        <button onClick={() => incQuantity(id)}>+</button> 
        = {price * quantity} руб
        <span href="#!" class="secondary-content" onClick={() => removeFromBasket(id)}>
            <i class="material-icons basket-delete">close</i>
        </span>
    </li>

    
}

export {BasketItem};
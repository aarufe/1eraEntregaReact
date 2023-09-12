import cart from './assets/CartWidget.png';

const CartWidget = () => {
    return (
        <div>
            <img src={cart} alt="CartWidget" style={{ width: '80px', height: '80px' }} />
            <span>0</span>
        </div>
    );
};

export default CartWidget;
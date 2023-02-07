import {useState} from "react";
const ListItem = ({data})=>{
    const [counter, setCounter] =useState(0)
    const incrementByOne = ()=>{
        setCounter(counter+1)
    }

    const decrementByOne = ()=>{
        if(counter===0){
            return;
        }
        setCounter(counter-1)
    }
    return (
        <div className={"item-card"}>
            <img className={"img-fluid"} src={`./assets/${data.thumbnail}`}alt="Product"/>
            <div className={"item-card__information"}>
                <div className={"pricing"}>
                    <span>${data.discountedPrice}</span>
                    <small>
                        <strike>${data.price}</strike>
                    </small>
                </div>
                <div className={"title"}>
                    <h3>{data.title}</h3>
                </div>
            </div>
            {
                counter<1 ?
                <button  className={"cart-add"} onClick={incrementByOne}>
                    <span>Add to cart</span>
                </button>
                :
                <div className={"cart-addon"}>
                    <button onClick={decrementByOne}><span>-</span></button>
                    <span>{counter}</span>
                    <button onClick={incrementByOne}><span>+</span></button>
                </div>
                
            }
            
        </div>

    )
}


export default ListItem;
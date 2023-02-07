import {useState} from "react";
import ListItem from "../ListItems/ListItem"


const Products = ()=>{
    
    const [item,setItem] = useState(
        [
            {
                id:1,
                title:"Title 1",
                price:450,
                discountedPrice:340,
                thumbnail:"logo192.png"
            },
            {
                id:2,
                title:"Title 2",
                price:250,
                discountedPrice:200,
                thumbnail:"logo192.png"
            },
            {
                id:3,
                title:"Title 3",
                price:250,
                discountedPrice:200,
                thumbnail:"logo192.png"
            },
            {
                id:4,
                title:"Title 4",
                price:250,
                discountedPrice:200,
                thumbnail:"logo192.png"
            }
        ]
    )
    return (
        <div className={"product-list"}>
            <div className={"product-list--wrapper"}>
                {item.map((item)=>
                    <ListItem key={item.id} data={item} />
                )}
                {/* <ListItem data={items[0]}></ListItem>
                <ListItem data={items[1]}></ListItem> */}
            </div>
        </div>
    )
}

export default Products
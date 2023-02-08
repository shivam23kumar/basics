import {useEffect,useState} from "react";
import ListItem from "../ListItems/ListItem";
import axios from "axios";
import Loader from "../UI/Loader";


const Products = ()=>{
    
    const [item,setItem] = useState([])
    const [loader,setLoader]=useState(true)
    useEffect(()=>{
        async function fetchedItems(){
            try{
                const response = await axios.get('https://react-basics-37ea7-default-rtdb.firebaseio.com/items.json')
                const data=response.data
                const transformedData=data.map((item,index)=>{
                    return{...item,
                    id:index
                    }
                })
                setItem(transformedData)
            }
            finally{
                setLoader(false)
            }
                }
            
            
        fetchedItems();
    },[])
    return (
        <>
        <div className={"product-list"}>
            <div className={"product-list--wrapper"}>
                {item.map((item)=>
                    <ListItem key={item.id} data={item} />
                )}
                {/* <ListItem data={items[0]}></ListItem>
                <ListItem data={items[1]}></ListItem> */}
            </div>
        </div>
        {loader && <Loader />}
        </>
    )
}

export default Products
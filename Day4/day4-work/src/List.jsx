const PRODUCTS=[
    { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
    { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
    { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
    { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
    { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
    { category: "Vegetables", price: "$1", stocked: true, name: "Peas" }
  ]

function ProductCategory(props){
    return (
        <tr>
            <th colSpan="2">
                {props.category}
            </th>
        </tr>
    )
}

function ProductRows(props){
    const name=props.product.stocked ? props.product.name :(
        <span style={{ color:"red"}}>
            {props.product.name}</span>
    )

    return (
        <tr>
            <td>{name}</td>
            <td>{props.price}</td>
        </tr>
    )   
}
function ProductTable(props){
    const rows=[]
    let lastCategory=null

    props.products.forEach((items)=>{
        if(items.category!==lastCategory){
            rows.push(
                <ProductCategory category={items.category} key={items.category}
                />)
        }
            rows.push(
                 <ProductRows product={items} key={items.name}/>
                )
                lastCategory=items.category
    })

    return (
        <table>
            <thead>
            <tr>
                <th>Name</th>
                <th>Price</th>
            </tr>
            </thead>
            <tbody>{rows}</tbody>

        </table>
    )
}

function SearchTable(){
    return(
        <form>
            <input placeholder="Search..."></input>
            
            <label><input type="checkbox"/> {' '}Only Show Product in Stock</label>
        </form>
    )


}

 function FilteredTable(props){
    return(
        <div>
            <SearchTable />
            <ProductTable products={props.products}/>
        </div>
    )
}

export default function ShowList(){
    return(
        <FilteredTable products={PRODUCTS}/>
    )
}





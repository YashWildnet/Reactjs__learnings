import { useState } from "react";

function SearchBar({search,ischecked,onsearch,onchecked}){
  return (
    <form>
      <input type="text" placeholder="Search... " value={search} onChange={(e)=> onsearch(e.target.value)}/>
      <label style={{display:"block"}}>
        <input type="checkbox" checked={ischecked} onChange={(e)=> onchecked(e.target.checked)}/>
        {' '}
        Only show products in stock
      </label>
    </form>
  );
}

function ProductCategoryRow({category}){
  return(
    <tr>
      <th colSpan="2" style={{padding:"5px",
      paddingLeft:"40px"}}>
        {category}
      </th>
    </tr>
  )
}

function ProductRow({product}){
  const name=product.stocked ? product.name :
  <span style={{color:"red"}}>{product.name}</span>
  return(
    <tr >
      <td style={{padding:"5px",
      paddingLeft:"40px"}}>{name}</td>
      <td style={{padding:"10px",
      paddingLeft:"40px"}}>{product.price}</td>
    </tr>
  )
}


function ProductTable({Listitems,search,ischecked}){
  const list=[]
  let lastCategory=null

  Listitems.forEach((item)=> {
    if (
      item.name.toLowerCase().indexOf(
        search.toLowerCase()
      ) === -1
    ) {
      return;
    }
    if (ischecked && !item.stocked) {
      return;
    }
    if(item.category !==lastCategory){
      list.push(
      <ProductCategoryRow category={item.category} key= {item.category} />
      )
    }
    list.push(
      <ProductRow product={item} key={item.name}/>
    )
    lastCategory=item.category
  });

  return(
    <table>
      <thead>
        <th >Name</th>
        <th>Price</th>
      </thead>
      <tbody >{list}</tbody>
    </table>
  )
}

function FilterableTable({products}){
  const [search,setSearch]=useState("")
  const [ischecked,setChecked]=useState(false)
  return(
    <div className="ShoppingList">
      <SearchBar search={search} 
    ischecked={ischecked} onsearch={setSearch} onchecked={setChecked}/>
      <ProductTable Listitems={products} search={search} 
    ischecked={ischecked}/>
    </div>
  )
}
const PRODUCTS = [
  {category: "Fruits", price: "$1", stocked: true, name: "Apple"},
  {category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit"},
  {category: "Fruits", price: "$2", stocked: false, name: "Passionfruit"},
  {category: "Vegetables", price: "$2", stocked: true, name: "Spinach"},
  {category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin"},
  {category: "Vegetables", price: "$1", stocked: true, name: "Peas"}
];

export default function App() {
  return <FilterableTable products={PRODUCTS} />;
}



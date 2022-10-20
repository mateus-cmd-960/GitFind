
import './style.css'

const ItemList =({title, descricao})=>{

    return(
        <div className='item-list'>
            <strong>{title}</strong>
            <p>{descricao}</p>
            <hr/>
        </div>
    )

}

export default ItemList
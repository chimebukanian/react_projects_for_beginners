import Btn from './Btn'

export default function Item({dim, name, price, formerPrice, ratings, btnText}) {
    
    let evHandler = () => {
        console.log("button clicked")
        
    }

    return (
        // complete CSS for this component
        <div>
            <div >{dim}</div>
            <div>
                <h3>{name}</h3>
                {price}
                {formerPrice && <del>{formerPrice}</del>}
                {ratings && <div>{Array(ratings).fill('⭐')}</div>}
                <Btn evHandler={evHandler} btnText={btnText} />
            </div>
        </div>

       
    )
}
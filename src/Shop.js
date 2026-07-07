import Item from './Item'

export default function Shop() {

    // move this to utils
    const products = [
        {
            dim: "450 x 300",
            name: "Fancy Product",
            price: "$40.00 - $80.00",
            btnText: "View options"
        },
        {
            dim: "450 x 300",
            name: "Special Product",
            price: "$18.00",
            ratings: 5,
            btnText: "Add to Cart",
            formerPrice: "$20.00"
        },
    ]


    return (
        <section styles={{display: 'flex'}}>
            {products.map(item => {
             return <Item 
                dim={item.dim} 
                ratings={item.ratings} 
                name={item.name} 
                price={item.price} 
                formerPrice={item.formerPrice} 
                btnText={item.btnText} />})}
        </section>
    )

}
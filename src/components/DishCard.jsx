export const DishCard = ({ imgUrl, name, price }) => {
    return (
        <div className="card">
            <div className="header">
                <img src={imgUrl} alt="Our Menu" className="img-cover" />
            </div>
            <div className="body">
                <div className="dish">
                    <span className="dish-name"> {name} </span>
                    <span className="dish-price"> {price} </span>
                </div>
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos laborum rem quasi amet animi
                    ex sed, illum libero perspiciatis excepturi. Deserunt officiis, delectus eius totam labore
                    error quis enim est!
                </p>

                <div className="meta-info">
                    Order a Delivery <span>🛵</span>
                </div>
            </div>
        </div>
    )
}

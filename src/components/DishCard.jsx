export const DishCard = () => {
    return (
        <div className="card">
            <div className="header">
                <img src="./public/images/brucheta.webp" alt="Our Menu" className="img-cover" />
            </div>
            <div className="body">
                <div className="dish">
                    <span className="dish-name"> Greek Salad </span>
                    <span className="dish-price"> $13.67 </span>
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

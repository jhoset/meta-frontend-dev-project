import { SectionLayout } from "../layout/SectionLayout"
import { DishCard } from "./DishCard"

export const DishList = () => {

  const specialDishList = [
    {
      imgUrl: "./public/images/greek-salad.jpg",
      name: 'Greek Salad',
      price: "$12.99"
    },
    {
      imgUrl: "./public/images/brucheta.webp",
      name: 'Bruchetta',
      price: "$5.99"
    },
    {
      imgUrl: "./public/images/lemon-dessert.jpg",
      name: 'Lemon Dessert',
      price: "$5.00"
    }
  ]

  return (
    <SectionLayout>
      <div className="dish-info mt-120">
        <div className="weeks-specials">
          <h3>This weeks specials!</h3>
          <button className="btn-primary"> Online Menu </button>
        </div>
        <div className="dish-list">
          {
            specialDishList.map((ed, index) => (<DishCard key={index} {...ed} />))
          }
        </div>
      </div>
    </SectionLayout>
  )
}

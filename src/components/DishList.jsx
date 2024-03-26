import { SectionLayout } from "../layout/SectionLayout"
import { DishCard } from "./DishCard"

export const DishList = () => {

  const specialDishList = ['Greek Salad', 'Bruchetta', 'Lemon Dessert']

  return (
    <SectionLayout>
      <div className="dish-info mt-120">
        <div className="weeks-specials">
          <h3>This weeks specials!</h3>
          <button className="btn-primary"> Online Menu </button>
        </div>
        <div className="dish-list">
          {
            specialDishList.map((ed, index) => (<DishCard key={index} />))
          }
        </div>
      </div>
    </SectionLayout>
  )
}

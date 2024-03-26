import { SectionLayout } from "../layout/SectionLayout"
import { ImageSlider } from "./ImageSlider"

export const Banner = () => {
    return (
        <SectionLayout backgroundColor="#495E57">
            <article className="banner" aria-label="banner">
                <div>
                    <h1 className="title"> Little Lemon </h1>
                    <h2 className="subtitle"> Chicago </h2>
                    <p className="description"> 
                        We are a family owned Mediterranean restaurant, focused on traditional recipes
                        served with a modern twist.
                    </p>

                    <button className="btn-primary"> Reserve a Table </button>
                </div>
                <div style={{ position: 'relative' }}>
                    <ImageSlider />
                </div>

            </article>
        </SectionLayout>

    )
}

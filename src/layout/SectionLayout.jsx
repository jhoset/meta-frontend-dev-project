import PropTypes from "prop-types";

export const SectionLayout = ({children, backgroundColor = '#EDEFEE'}) => {
  return (
    <section className="section" style={{background: backgroundColor}}>
      <div className="section-content">
        { children }
      </div>
    </section>
  )
}


SectionLayout.propTypes = {
    children: PropTypes.node.isRequired,
    backgroundColor: PropTypes.string,
}


const Testimonial = ({testimonialName,testimonialPosition,testimonialInfo}) => {
  return (
    <div className="testimonial">
        <div className="name_position">
            <h5 className="testimonial_name">{testimonialName}</h5>
            <h5 className="testimonial_position">{testimonialPosition}</h5>
        </div>
        <div className="testimonial_info">
            <p>{testimonialInfo}</p>
        </div>
    </div>
  )
}

export default Testimonial
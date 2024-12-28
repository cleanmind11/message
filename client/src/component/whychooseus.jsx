const WhyChooseUs = (props) => {
  return (
    <>
      <div className="whychooseus">
        <p className="fs-24 title-whychooseus">{props.info.title}</p>
        <p className="fs-18 text-whychooseus">{props.info.text}</p>
      </div>
    </>
  );
};

export default WhyChooseUs;

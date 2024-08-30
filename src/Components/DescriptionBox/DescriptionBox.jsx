import "./DescriptionBox.css";

const DescriptionBox = () => {
  return (
    <div className="descriptionbox">
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews (123)</div>
      </div>
      <div className="descriptionbox-description">
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut ad,
          incidunt libero velit voluptatem, repudiandae quaerat architecto quae
          magnam excepturi aliquid impedit dicta modi repellendus asperiores
          harum eum laudantium quisquam neque est corrupti officiis totam.
        </p>
      </div>
    </div>
  );
};

export default DescriptionBox;

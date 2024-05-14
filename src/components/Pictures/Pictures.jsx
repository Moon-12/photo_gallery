import { useParams } from "react-router-dom";
import "./Pictures.css";
import { useSelector } from "react-redux";
const Picture = () => {
  const { type } = useParams();
  const images = useSelector((state) => state.imageReducer.images);

  return (
    <div>
      <h4> {type} pictures</h4>
      <div className="img-container">
        {images.map((img) => {
          const { server, id, secret } = img;
          return (
            <img
              src={`https://farm66.staticflickr.com/${server}/${id}_${secret}_m.jpg`}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Picture;

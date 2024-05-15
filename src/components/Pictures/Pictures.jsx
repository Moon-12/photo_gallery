import { useParams } from "react-router-dom";
import "./Pictures.css";
import { useSelector } from "react-redux";
import { useCallback, useEffect, useRef } from "react";
const Picture = () => {
  const { type } = useParams();
  const { images, isLoading } = useSelector((state) => state.imageReducer);

  const observer = useRef();
  const lastImageRef = useCallback((node) => {
    if (isLoading) return;
    if (observer.current) observer.current.disconnect(); //if there is prev observer disconnect it
    observer.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        console.log("visible");
      }
    });
    if (node) observer.current.observe(node);
    console.log(observer);
  }, []);
  return (
    <div>
      <h4> {type} pictures</h4>
      <div className="img-container">
        {images.map((img, index) => {
          const { server, id, secret } = img;
          if (index + 1 === images.length) {
            return (
              <img
                ref={lastImageRef}
                key={id}
                src={`https://farm66.staticflickr.com/${server}/${id}_${secret}_m.jpg`}
              />
            );
          } else {
            return (
              <img
                key={id}
                src={`https://farm66.staticflickr.com/${server}/${id}_${secret}_m.jpg`}
              />
            );
          }
        })}
      </div>
      {isLoading && <p>Loading...</p>}
    </div>
  );
};

export default Picture;

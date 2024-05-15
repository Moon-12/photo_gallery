import { useParams } from "react-router-dom";
import "./Pictures.css";
import { useDispatch, useSelector } from "react-redux";
import { useCallback, useEffect, useRef } from "react";
import { changePage, fetchImagesByTag } from "../../redux/slice/imageSlice";

const Picture = () => {
  const { type } = useParams();
  const dispatch = useDispatch();
  const { images, isLoading, page } = useSelector(
    (state) => state.imageReducer
  );

  const observer = useRef();
  const lastImageRef = useCallback(
    (node) => {
      if (isLoading) return;
      if (observer.current) observer.current.disconnect(); //if there is prev observer disconnect it
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          dispatch(changePage());
        }
      });
      if (node) observer.current.observe(node);
      console.log(observer);
    },
    [isLoading]
  );
  useEffect(() => {
    dispatch(fetchImagesByTag({ tag: type, initialLoad: false }));
  }, [page]);
  return (
    <div>
      <h4> {type} pictures</h4>
      <div className="img-container">
        {images &&
          images.map((img, index) => {
            const { server, id, secret } = img;
            if (index + 1 === images.length) {
              return (
                <img
                  ref={lastImageRef}
                  key={index}
                  src={`https://farm66.staticflickr.com/${server}/${id}_${secret}_m.jpg`}
                />
              );
            } else {
              return (
                <img
                  key={index}
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

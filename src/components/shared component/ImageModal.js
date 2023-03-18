import { useState } from "react";
import { Modal, Button } from "react-bootstrap";

const ImageModal = ({ lgShow, setLgShow, hot }) => {
  const [selectedImg, setSelectedImg] = useState(hot[0]);

  return (
    <Modal
      size="lg"
      show={lgShow}
      onHide={() => setLgShow(false)}
      aria-labelledby="example-modal-sizes-title-lg"
    >
      <Modal.Header>
        <Modal.Title id="example-modal-sizes-title-lg">
          Image Gallery
        </Modal.Title>
        <button className="btn-close" onClick={() => setLgShow(false)}></button>
      </Modal.Header>
      <Modal.Body>
        <div className="MainImgModalcontainer">
          <img
            src={selectedImg}
            alt="img"
            className="selected w-100 img-fluid"
          />
          <div className="imglistModal">
            {hot.map((img, index) => {
              return (
                <img
                  src={img}
                  alt="img"
                  key={index}
                  onClick={() => setSelectedImg(img)}
                  className="img-fluid"
                />
              );
            })}
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default ImageModal;

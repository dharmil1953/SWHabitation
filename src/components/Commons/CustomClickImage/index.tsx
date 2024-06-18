import { useState } from "react";
import { CustomImageType } from "../../../../lib/sanity/types";
import Image from "../Image";

const CustomClickImage: React.FC<{
  value: any;
  isClickable?: boolean;
}> = ({ value, isClickable }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [clickedImage, setClickedImage] = useState<CustomImageType | null>(
    null
  );

  const openModal = (image: CustomImageType) => {
    setClickedImage(image);
    setModalVisible(true);
    document.body.classList.add("popupOpenImage");
  };

  const closeModal = () => {
    setClickedImage(null);
    setModalVisible(false);
    document.body.classList.remove("popupOpenImage");
  };

  return (
    <div className="mt-2 mb-6">
      {isClickable ? (
        <div>
          <div className="w-full" onClick={() => openModal(value)}>
            <Image
              src={value}
              className="mb-8 cursor-pointer object-cover w-full h-auto"
            />
          </div>
          {modalVisible && (
            <div
              className="overlayImage fade-in flex fixed top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.7)] backdrop-blur-sm justify-center items-center z-[1000]  pointer-events-auto"
              onClick={closeModal}
            >
              <div
                className="popupImage relative max-w-[80%] md:max-w-[70%] max-h-[80vh] rounded-lg [&>img]:w-full [&>img]:object-cover ![&>img]:my-0"
                onClick={(e) => e.stopPropagation()}
              >
                {clickedImage && (
                  <Image
                    src={clickedImage}
                    className="w-full max-h-[80vh] h-full rounded-xl"
                  />
                )}
              </div>
              <div
                className="close absolute top-5 right-[25px] text-white text-[50px] no-underline cursor-pointer font-normal"
                onClick={(e) => {
                  e.stopPropagation();
                  closeModal();
                }}
              >
                &times;
              </div>
            </div>
          )}
        </div>
      ) : (
        <Image
          className="s(767):h-[300px] h-[480px] object-contain my-8 w-full"
          src={value}
        />
      )}
    </div>
  );
};

export default CustomClickImage;

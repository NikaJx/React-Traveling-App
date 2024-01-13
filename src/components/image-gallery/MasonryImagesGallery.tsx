import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import galleryImages from "./galleryImages";

const MasonryImagesGallery = () => {
    return (
        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 768: 3, 992: 4 }}>
            <Masonry gutter="1rem">
                {galleryImages.map((item, i) => (
                    <img
                        src={item}
                        key={i}
                        alt=""
                        style={{
                            width: "100%",
                            display: "block",
                            borderRadius: "10px",
                        }}
                        className="masonry__img"
                    />
                ))}
            </Masonry>
        </ResponsiveMasonry>
    );
};

export default MasonryImagesGallery;

import React from 'react';
import styles from '../styles/Gallery.module.css';
// import galleryImage1 from '../assets/gallery1.jpg'; // Replace with actual image paths
// import galleryImage2 from '../assets/gallery2.jpg';
// import galleryImage3 from '../assets/gallery3.jpg';

const Gallery = () => {
    return (
        <div className={styles.gallery}>
            <h2>Gallery</h2>
            <div className={styles.imageGrid}>
                <img src={"galleryImage1"} alt="Gallery Image 1" />
                <img src={"galleryImage2"} alt="Gallery Image 2" />
                <img src={"galleryImage3"} alt="Gallery Image 3" />
                {/* Add more images as needed */}
            </div>
        </div>
    );
};

export default Gallery;

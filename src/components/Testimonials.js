import React from 'react';
import styles from '../styles/Testimonials.module.css';

const Testimonials = () => {
    return (
        <div className={styles.testimonials}>
            <h2>Testimonials</h2>
            <div className={styles.testimonialList}>
                <div className={styles.testimonial}>
                    <p>"My child has flourished at Kinderbots! The teachers are wonderful, and the activities are engaging."</p>
                    <p>- Parent A</p>
                </div>
                <div className={styles.testimonial}>
                    <p>"A fantastic place for children to learn and grow! We couldn't be happier with our choice."</p>
                    <p>- Parent B</p>
                </div>
                <div className={styles.testimonial}>
                    <p>"The staff is caring and professional. My child looks forward to going to school every day!"</p>
                    <p>- Parent C</p>
                </div>
            </div>
        </div>
    );
};

export default Testimonials;

import React from 'react';
import styles from '../styles/Faculty.module.css';

const Faculty = () => {
    return (
        <div className={styles.faculty}>
            <h2>Meet Our Faculty</h2>
            <div className={styles.facultyList}>
                <div className={styles.facultyMember}>
                    <h3>Jane Doe</h3>
                    <p>Lead Teacher, Kindergarten</p>
                </div>
                <div className={styles.facultyMember}>
                    <h3>John Smith</h3>
                    <p>Pre-K Teacher</p>
                </div>
            </div>
        </div>
    );
};

export default Faculty;

import React from 'react';
import styles from '../styles/Curriculum.module.css';

const Curriculum = () => {
    return (
        <div className={styles.curriculum}>
            <h2>Curriculum</h2>
            <h3>Age Groups</h3>
            <ul>
                <li><strong>Toddlers (1-2 years):</strong> Play-based learning, sensory activities.</li>
                <li><strong>Preschoolers (3-4 years):</strong> Introduction to numbers, letters, and social skills.</li>
                <li><strong>Pre-Kindergarten (4-5 years):</strong> Focus on literacy, math, and science concepts.</li>
            </ul>
            <h3>Weekly Themes</h3>
            <ul>
                <li>Nature Exploration</li>
                <li>Healthy Habits</li>
                <li>Community Helpers</li>
                <li>Arts & Crafts</li>
                <li>Music & Movement</li>
            </ul>
        </div>
    );
};

export default Curriculum;

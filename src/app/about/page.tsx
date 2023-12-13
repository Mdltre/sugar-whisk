/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from 'react';
import styles from './page.module.css'; 
import Image from 'next/image';

const Person = ({ img, name, role, description }) => (
  <div className={styles.person}>
    <Image src={img} alt="My Picture" width={300} height={200}/>
    <br />
    <h2>{name}</h2>
    <p className={styles.role}>{role}</p>
    <p className={styles.description}>{description}</p>
  </div>
);

const AboutPage = () => {
  return (
    <div className={styles.aboutPage}>
      <h1>About Us</h1>
      <div className={styles.peopleContainer}>
        <Person
          img = "/aboutmj.jpg"
          name="Maria Jose P. Dela Torre"
          role="Developer"
          description="MJ is a passionate professional procrastinator with a background in computer science. She co-founded our company with the vision of creating innovative solutions for our customers."
        />
        <Person
          img = "/aboutjk.jpg"
          name="Jaspreet Kaur"
          role="Developer"
          description="Jaspreet is an experienced software engineer specializing in web development. She leads our development team, ensuring the delivery of high-quality and scalable solutions."
        />
      </div>
    </div>
  );
};

export default AboutPage;

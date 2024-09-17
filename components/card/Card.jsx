import React from "react";
import styles from "./card.module.css";

const Card = (props) => {
  console.log(props);
  return (
    <div className={styles.card}>
      <img
        src={props.imageUrl}
        alt={`photo about ${props.title}`}
        className={styles.cardPhoto}
      />
      <div className={styles.cardContent}>
        <header className={styles.cardHeader}>
          <img
            src="./location.png"
            style={{ width: "7px", height: "9.55px" }}
          />
          <h2 className={styles.cardSubTitle}>{props.location}</h2>
          <a
            href={props.googleMapsUrl}
            style={{ color: "#918E9B", fontSize: "10.24px" }}
          >
            View on Google Maps
          </a>
        </header>
        <h1 className={styles.cardTitle}>{props.title}</h1>
        <p className={styles.cardDate}>
          {props.startDate} - {props.endDate}
        </p>
        <p className={styles.cardDesc}>{props.description}</p>
      </div>
    </div>
  );
};

export default Card;

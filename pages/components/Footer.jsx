import styles from "../../styles/Footer.module.css";
import Image from "next/image";
const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <Image src="/img/bg.png" layout="fill" alt="" objectFit="cover" />
      </div>
      <div className={styles.item}>
        <div className={styles.card}>
          <h2 className={styles.motto}>OH YES, OUR PIZZA IS THE BEST!</h2>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>FIND OUR RESTURANTS</h1>
          <p className={styles.text}>
            1654 R.Trippy Road #304.
            <br />
            Tel Aviv, 78902
            <br />
            972 (0526500553)
          </p>
          <p className={styles.text}>
            1654 R.Trippy Road #304.
            <br />
            Tel Aviv, 78902
            <br />
            972 (0526500553)
          </p>
          <p className={styles.text}>
            1654 R.Trippy Road #304.
            <br />
            Tel Aviv, 78902
            <br />
            972 (0526500553)
          </p>
          <p className={styles.text}>
            1654 R.Trippy Road #304.
            <br />
            Tel Aviv, 78902
            <br />
            972 (0526500553)
          </p>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>WORKING HOURS</h1>
          <p className={styles.text}>
            MONDAY UNTIL FRIDAY
            <br /> 9:00 – 22:00
          </p>
          <p className={styles.text}>
            SATURDAY - SUNDAY
            <br /> 12:00 – 24:00
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;

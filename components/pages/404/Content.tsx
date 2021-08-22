import styles from 'styles/pages/404/content.module.scss';

const Content = () => {
  return (
    <section className={styles.notfound}>
      <div className={`${styles.notfound_content} container`}>
        <h4 className={styles.notfound_content_oops}>OOPS! Page Not Found</h4>
        <h1 className={styles.notfound_content_404}>404</h1>
        <h4 className={styles.notfound_content_sorry}>
          THE PAGE YOU REQUESTED WAS NOT FOUND!
        </h4>
      </div>
    </section>
  );
};

export default Content;

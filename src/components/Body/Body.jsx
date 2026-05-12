import styles from "./Body.module.css";
export default function Body({ picture, loading, error }) {
  return (
    // 1. Make it so depending on the different states Body is in, it has a parent container.
    // 2. When picture is loaded, it will be a grid that has two columns, one 40% and the other 1fr. Should have the same border-radius
    // 3. Loading ,error , and picture state should have the same border-radius.
    <>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {picture && (
        <div className={styles.dataContainer}>
          <div className={styles.infoContainer}>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui praesentium nam tempora
              ad officia iste optio quod quas dolorem quae nihil quos ducimus asperiores, unde sint
              odio fugit in. Pariatur esse doloremque nesciunt aspernatur, et id voluptatibus
              voluptatum molestias saepe quis excepturi mollitia earum natus est voluptas optio unde
              quam placeat nihil, itaque voluptates similique ea rem? Itaque neque repudiandae fugit
              optio animi excepturi quia minus minima, aperiam tempora exercitationem tenetur enim
              quo, distinctio doloribus beatae. Autem repellat cupiditate sit soluta, recusandae
              quas accusamus eos. Minima iusto quasi voluptate, quo accusamus, laboriosam aut
              dignissimos perspiciatis sit, ut expedita maxime quas.
            </p>
          </div>

          <div className={styles.imgContainer}>
            <img src={picture.hdurl} alt="pic of the day" className={styles.img} />
          </div>
        </div>
      )}
    </>
  );
}

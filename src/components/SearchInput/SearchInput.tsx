import styles from "./SearchInput.module.scss";

export const SearchInput = ({ onSearch }: any) => {
  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    onSearch(event.target.value);
  }

  return (
    <>
      <div className={styles.SearchContainer}>
        <input
          type="text"
          className={styles.SearchInput}
          placeholder="Enter your Search term"
          onChange={handleChange}
        ></input>
      </div>
    </>
  );
};

export default SearchInput;

import { useDispatch, useSelector } from "react-redux";
import { setCurrentPage } from "../../Redux/Actions";
import styles from "./Pagination.module.css";

export default function Pagination() {
  const dispatch = useDispatch();
  const currentPage = useSelector((state) => state.currentPage);
  const countries = useSelector((state) => state.countries);
  const itemPerPage = 12;
  const PageNumber = Math.ceil(countries.length / itemPerPage);

  const handleClick = (page) => {
    dispatch(setCurrentPage(page));
  };
  const renderPageNumber = [];
  for (let i = 1; i <= PageNumber; i++) renderPageNumber.push(i);
  return (
    <div className={styles.divButtons}>
      <button
        disabled={currentPage === 1}
        onClick={() => handleClick(currentPage - 1)}
      >
        Anterior
      </button>
      {renderPageNumber.map((number) => (
        <button
          key={number}
          className={currentPage === number ? styles.button : ""}
          onClick={() => handleClick(number)}
        >
          {number}
        </button>
      ))}
      <button
        disabled={currentPage === PageNumber}
        onClick={() => handleClick(currentPage + 1)}
      >
        Siguiente
      </button>
    </div>
  );
}

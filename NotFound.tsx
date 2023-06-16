import "./NotFound.css";
// import { useRouteError } from "react-router-dom";
import { Link } from "react-router-dom";

export default function NotFound() {
  const errorImg: string = require("../../assets/images/errorImg.svg").default;
  // const error = useRouteError();
  // console.error(error);

  return (
    <div className="errorPage">
      <img src={errorImg} alt="Error" className="errorPage__img" />
      <h1 className="errorPage__h1">Упс, здесь еще ничего нет!</h1>
      <Link className="errorPage__link" to="/">
        Поиск Вакансий
      </Link>
    </div>
  );
}

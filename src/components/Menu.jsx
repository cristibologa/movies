import logo from "../assets/logo.svg";
export default function Menu() {
  return (
    <header>
      <a href="">
        <img src={logo} width={40} height={40} alt="logo" />
      </a>
      <nav>
        <ul>
          <li>
            <a>Movies</a>
          </li>
          <li>
            <a>TV Shows</a>
          </li>
          <li>
            <a>Suggest me</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

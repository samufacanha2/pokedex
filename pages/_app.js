import "tailwindcss/tailwind.css";
import "../styles/wraps/containers.css";
import "../styles/wraps/menu.css";
import "../styles/wraps/pokemon.css";
import Menu from "../components/Menu";

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp

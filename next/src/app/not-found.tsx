import { notFoundClass } from "./not-found.css";

export default function NotFound() {
  return (
    <div className={notFoundClass}>
      <h2>404</h2>
      <p>Voi ei, sivua ei löytynnä!</p>
    </div>
  );
}

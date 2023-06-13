import { FC } from "react";
import { baseClass } from "./Footer.css";
import Padder from "./Padder";

const Footer: FC = () => {
  return (
    <footer className={baseClass}>
      <Padder>
        Copyright &copy; {new Date().getFullYear()} Mikko &quot;Pekkis&quot;
        Forsström.
      </Padder>
    </footer>
  );
};

export default Footer;

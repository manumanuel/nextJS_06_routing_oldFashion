import Link from "next/link";
import classes from "./button.module.css";

function button(props) {
  return (
    <Link href={props.link}>
      <a className={classes.btn}></a>
      {props.children}
    </Link>
  );
}
export default button;

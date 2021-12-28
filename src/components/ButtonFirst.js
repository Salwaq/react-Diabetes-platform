import { Link } from "react-router-dom"

function ButtonFirst() {
  return (
    <>
      <Link to={"/loginPaitent"}>
        {" "}
        <button>paitent </button>
      </Link>
      <Link to={"/loginDr"}>
        {" "}
        <button>DR </button>
      </Link>
      <h1></h1>
    </>
  )
}

export default ButtonFirst

import { Button } from "@mui/material"
import { useState } from "react"
import LoginDrModal from "./LoginDrModal"
import LoginPaitentModal from "./LoginPaitentModel"

function ButtonFirst() {
  const [loginPShow, setLoginPShow] = useState(false)
  const [loginDrShow, setLoginDrShow] = useState(false)
  return (
    <>
      <div id="button-login">
        <Button id="ButtonFirst" variant="outlined" size="large" onClick={() => setLoginPShow(true)}>
          Paitent
        </Button>

        <Button id="ButtonFirst" variant="outlined" size="large" onClick={() => setLoginDrShow(true)}>
          DR
        </Button>
      </div>
      <div>
        <LoginPaitentModal show={loginPShow} setShow={setLoginPShow} />
        <LoginDrModal show={loginDrShow} setShow={setLoginDrShow} />
      </div>
    </>
  )
}

export default ButtonFirst

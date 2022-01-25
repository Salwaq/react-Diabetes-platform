import { useRef, useState } from "react"
import { Button, Image, Overlay, Tooltip } from "react-bootstrap"
import AddCdModal from "./AddCdModal"
import AddInfoModal from "./AddInfoModal "
import AddVisitModal from "./AddVisitModal"
import ViewPaitentModal from "./ViewPaitentModal"
import PageviewIcon from "@mui/icons-material/Pageview"
import AddchartIcon from "@mui/icons-material/Addchart"
import HealingIcon from "@mui/icons-material/Healing"
import EventIcon from "@mui/icons-material/Event"
import PermPhoneMsgIcon from "@mui/icons-material/PermPhoneMsg"

function RowPaitents(props) {
  const { paitent } = props
  const [show, setShow] = useState(false)
  const [showInfo, setInfoShow] = useState(false)
  const [showCd, setCdShow] = useState(false)
  const [showVisit, setVisitShow] = useState(false)

  const [showT, setTShow] = useState(false)
  const target = useRef(null)
  return (
    <>
      <thead>
        <tr>
          <th>#{paitent.MNR}</th>
          <th>
            {" "}
            <Image src={paitent.avatar} width={50} roundedCircle></Image>
          </th>
          <th>
            {paitent.firstName} {paitent.midName} {paitent.lastName}
          </th>

          <th>
            <Button variant="outline-dark" onClick={() => setShow(true)}>
              {" "}
              <PageviewIcon />{" "}
            </Button>{" "}
            <Button variant="outline-dark" onClick={() => setInfoShow(true)}>
              {" "}
              <AddchartIcon />{" "}
            </Button>{" "}
            <Button variant="outline-dark" onClick={() => setCdShow(true)}>
              {" "}
              <HealingIcon />{" "}
            </Button>
            {""}{" "}
            <Button variant="outline-dark" onClick={() => setVisitShow(true)}>
              {" "}
              <EventIcon />{" "}
            </Button>
          </th>
          <th>
            <Button variant="outline-dark" ref={target} onClick={() => setTShow(!show)}>
              <PermPhoneMsgIcon />
            </Button>{" "}
            <Overlay target={target.current} show={showT} placement="right">
              {props => (
                <Tooltip id="overlay-example" {...props}>
                  {paitent.phoneNumber}{" "}
                </Tooltip>
              )}
            </Overlay>
          </th>
        </tr>
      </thead>
      <ViewPaitentModal show={show} setShow={setShow} paitent={paitent} />
      <AddInfoModal show={showInfo} setShow={setInfoShow} paitentId={paitent._id} />
      <AddCdModal show={showCd} setShow={setCdShow} paitentId={paitent._id} />
      <AddVisitModal show={showVisit} setShow={setVisitShow} paitentId={paitent._id} />
    </>
  )
}

export default RowPaitents

import { Button } from "react-bootstrap"
import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer"
import AddAnswerModal from "./AddAnswerModal"
import { useState } from "react"

function QuestionRow(props) {
  const { question } = props

  const [show, setShow] = useState(false)
  return (
    <>
      <>
        <tr>
          <th>
            <h6 style={{ width: "40%" }}>{question.question}</h6>
          </th>
          <th style={{ width: "30%" }}>{question.answer}</th>
          <th style={{ width: "10%" }}>
            <Button variant="outline-dark" onClick={() => setShow(true)}>
              <QuestionAnswerIcon />
            </Button>{" "}
          </th>
        </tr>
        <AddAnswerModal show={show} setShow={setShow} question={question} questionId={question._id} />
      </>
    </>
  )
}

export default QuestionRow

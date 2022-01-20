import { Button, Image } from "react-bootstrap"

function RowPaitents(props) {
  const { paitent } = props
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
            {/* {paitent.questions.map(question => (
                              <h1>{question.question}</h1>
                            ))} */}
            <Button> view </Button> <Button> add info </Button> <Button> add CD </Button>
          </th>
          {/* <th>{paitent.smoking ? "yes" : "no"}</th> */}
        </tr>
      </thead>
    </>
  )
}

export default RowPaitents

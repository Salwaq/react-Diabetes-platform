import { Button } from "@mui/material"
import { useState } from "react"
import ArticalModal from "./ArticalModal"

function ArticalRow(props) {
  const [showArtical, setShowArtical] = useState(false)
  const { artical } = props
  return (
    <>
      <Button className="buttonArtical" onClick={() => setShowArtical(true)}>
        {artical.title}
      </Button>

      <ArticalModal setShowArtical={setShowArtical} showArtical={showArtical} artical={artical} />
    </>
  )
}

export default ArticalRow

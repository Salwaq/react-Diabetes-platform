import { Image, Modal } from "react-bootstrap"

function ArticalModal(props) {
  const { artical, setShowArtical, showArtical } = props

  return (
    <>
      <Modal
        show={showArtical}
        onHide={() => setShowArtical(false)}
        dialogClassName="modal-90w"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">{artical?.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Image src={artical.image} height={200} className="imgArtical"></Image>
          <p>{artical?.description}</p>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default ArticalModal

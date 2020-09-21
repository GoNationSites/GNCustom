import React from "react"

const ItemModal = ({ data, setModalActive }) => {
  return (
    <div className="modal is-active">
      <div className="modal-background"></div>
      <div className="modal-content">
        <p className="image is-4by3">
          <img src={data.imageUrl} alt={data.name} />
        </p>
      </div>
      {/* <button className="modal-close is-large" aria-label="close" onClick={() => setModalActive('')}></button> */}
    </div>
  )
}

export default ItemModal

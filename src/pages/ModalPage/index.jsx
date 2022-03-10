import './style.css'

const ModalPage = ({ location }) => {
  return (
    location?.state && (
      <div className='modalPage'>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt
        maxime vitae placeat voluptatum maiores sit assumenda dicta aut
        similique obcaecati dolorum repellendus ullam officia architecto itaque
        eaque, nulla corrupti rem.
      </div>
    )
  )
}

export default ModalPage

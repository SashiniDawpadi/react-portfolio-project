import './index.scss'

const Project = ({ imgUrl, title, description }) => {
  return (
    <div className="work">
      <img src={imgUrl} alt="workImg" />
      <div className="layer">
        <h3>{title}</h3>
        <p>
          {description}
        </p>
      </div>
    </div>
  )
}

export default Project

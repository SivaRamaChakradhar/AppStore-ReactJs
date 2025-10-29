import './index.css'

const AppItem = props => {
  const {appdetails} = props
  const {imageUrl, appName} = appdetails

  return (
    <>
      <li className="item-container">
        <img alt={appName} className="app-image" src={imageUrl} />
        <p className="app-name">{appName}</p>
      </li>
    </>
  )
}

export default AppItem

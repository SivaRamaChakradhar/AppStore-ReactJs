import './index.css'

const TabItem = props => {
  const {tabs, updateActiveTabId, isActive} = props
  const {tabId, displayText} = tabs

  const changeTabId = () => {
    updateActiveTabId(tabId)
  }

  const activeStyle = isActive ? 'active-tab-btn' : ''

  return (
    <li className="tab-item-container">
      <button
        onClick={changeTabId}
        type="button"
        className={`btn ${activeStyle}`}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem

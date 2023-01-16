const Notification = props => {
    const Notification = props => {
    const containerClassName = {`notification-container ${className}`}

  return (
    <div className={containerClassName}>
      <img className="icon" src={iconUrl} />
      <p className="message">{message}</p>
    </div>
  )
}
}
const elements = (
    <div className="container"></div>
    <h1 className="heading">Notifications</h1>

    <p className="paragraph">{Information Messages}</p>
    <img className="Information Messages" src={https://assets.ccbp.in/frontend/react-js/primary-icon-img.png}/>

    <p className="paragraph">{success Messages}</p>
    <img className="success Messages" src={https://assets.ccbp.in/frontend/react-js/success-icon-img.png}/>

    <p className="paragraph">{warning Messages}</p>
    <img className="warning Messages" src={https://assets.ccbp.in/frontend/react-js/warning-icon-img.png}/>

    <p className="paragraph">{danger Messages}</p>
    <img className="Error Messages" src={https://assets.ccbp.in/frontend/react-js/danger-icon-img.png}/>
    

)

ReactDOM.render(elements , document.getElementById('root'))


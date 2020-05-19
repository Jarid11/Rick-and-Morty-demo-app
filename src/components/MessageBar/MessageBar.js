import React from 'react'
import './MessageBar.css'

const MessageBar = ({ notification }) => {
    // not using MessageBar for success yet but if we need it we have it.
    const color = notification.type === 'success' ? 'green' : 'red'

    return (
        <div className={`messageBar ${color}`}>
            {notification.message}
        </div>
    )
}

export default MessageBar
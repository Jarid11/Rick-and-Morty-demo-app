import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import MessageBar from '../MessageBar/MessageBar'
import renderIf from 'render-if'
import './MessageBarContainer.css'

const MessageBarContainer = ({ errorMessage }) => (
    <Fragment>
        {renderIf(errorMessage)(
            <MessageBar notification={{type: "error", message: errorMessage}} />
        )}
        {renderIf(!errorMessage)(
            // used for maintaining layout when no error is present and preventing flutter
            <span className="placeholder"/>
        )}
    </Fragment>
)

const mapStateToProps = ({ character }) => ({
    errorMessage: character.errorMessage
})

export default connect(mapStateToProps, null)(MessageBarContainer)
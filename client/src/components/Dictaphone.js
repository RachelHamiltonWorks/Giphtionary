import React from 'react'
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'
import SearchForm from "./SearchForm.js"
import { Container, Row, Col } from 'reactstrap'
const Dictaphone = (props) => {
  const { transcript} = useSpeechRecognition()
  if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
    return null
  }
  return (
    <div>
      <SearchForm
        search={props.search}
        handleFormSubmit={props.handleFormSubmit}
        handleInputChange={props.handleInputChange}
        handleSpeechChange={props.handleSpeechChange}
        transcript={transcript}
      />
      <Container><br></br><br></br>
        <Row>
          <Col>
            <button onClick={props.handleFormSubmit} className="bSearch btn">Search</button>
            <button className="bSpeak btn" onClick={SpeechRecognition.startListening}>Speak</button>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
export default Dictaphone
import React, { Component } from 'react';
import { Document, Page } from 'react-pdf';
class About extends Component {
    state = {
        numPages: null,
        pageNumber: 1,
    }

    onDocumentLoad = ({ numPages }) => { this.setState({ numPages }) };
    render() {
        return (
            <Document file="MichaelSila_Resume.pdf" onLoadSuccess={this.onDocumentLoad}>
                <Page pageNumber={this.state.pageNumber} />
            </Document>
        );
    }
}

export default About;
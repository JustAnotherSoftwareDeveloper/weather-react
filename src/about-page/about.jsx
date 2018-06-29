import React, { Component } from 'react';
import { Document, Page } from 'react-pdf';
import resume from './MichaelSila_Resume.pdf';
import './about.less';

class About extends Component {
    state = {
        numPages: null,
        pageNumber: 1,
    }


    onDocumentLoad = ({ numPages }) => { this.setState({ numPages }) };
    render() {
        return (
            <div>
                <Document file={resume} onLoadSuccess={this.onDocumentLoad}>
                    {
                        Array.from(new Array(this.state.numPages), (el, index) =>
                         <Page key={`page_${index + 1}`} renderTextLayer={false} renderAnnotations={false}
                            pageNumber={index + 1}></Page>)
                    }
                </Document>
            </div>

        );
    }
}

export default About;
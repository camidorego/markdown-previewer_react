
import React from 'react';
//import { marked } from "https://cdn.jsdelivr.net/npm/marked/lib/marked.esm.js";
import './MarkdownPreviewer.css';

const defaultText = `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.org), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)`;

class Editor extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <>
                <h3>Enter your Text: </h3>
                <textarea
                    value={this.props.input}
                    id="editor"
                    cols="30"
                    rows="10"
                    onChange={(event) => this.props.updateText(event)}
                ></textarea>
          </>
        )
    }
}

class Preview extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <>
                <h3>Your MarkDown is:</h3>
                <div
                    id="preview"
                    dangerouslySetInnerHTML={{
                    __html: window.marked.parse(this.props.input, { breaks: true })
                    }}
                ></div>
            </>
        )
    }
}

class MarkdownPreviewer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      input: defaultText
    };
    this.updateText = this.updateText.bind(this);
  }

  updateText = (event) => {
    this.setState((state) => {
        return {
          input: event.target.value
        };
    });
  };
  render() {
    return (
      <>
        <div className="card text-center">
          <h1>Markdown Previewer</h1>
        <Editor input={this.state.input} updateText={this.updateText}/>
          <Preview input={this.state.input}/>
        </div>
        <h6 id="byMe">By Cami</h6>
      </>
    );
  }
}
export default MarkdownPreviewer
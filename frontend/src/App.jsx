import {useEffect,useState} from 'react'
import './App.css'
import Editor from 'react-simple-code-editor';
import Prism from 'prismjs'
// Then import additional components and themes
import "prismjs/themes/prism-tomorrow.css"
// import "prismjs/components/prism-jsx"
import axios from 'axios'
import Markdown from "react-markdown";
import rehypeHighlight from 'rehype-highlight';
import "highlight.js/styles/github-dark.css";

function App() {

  useEffect(() => {
    Prism.highlightAll()
  });
  
  const [code, setcode] = useState(`function sum(){
    return 1+1;
    }`);

  const [review, setReview] = useState(``);

  async function reviewCode(){

    const response = await axios.post('http://localhost:3000/ai/get-review',{code});
    console.log(response.data);
    setReview(response.data);
  };

  return (
    <>
      <main>
        <div className="left">
          <div className="code">
            <Editor
              value={code}
              onValueChange={code => setcode(code)}
              highlight={code => Prism.highlight(code, Prism.languages.javascript, 'javascript')}
              padding={10}
              style={{
                fontFamily: '"Fira code", "Fira Mono", monospace',
                fontSize: 18,
                border: '1px solid #ddd',
                borderRadius: 5,
                height: '100%',
                width: '100%'
              }}
            />
          </div>
          <div className="review" onClick={reviewCode}>Review</div>
        </div>
        <div className="right"><Markdown rehypePlugins={[rehypeHighlight]}>{review}</Markdown></div>
      </main>
    </>
  )
}

export default App

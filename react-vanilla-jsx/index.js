
// PUT JSX(HTML) INTO VARIABLE
const jsx = (
                <div>
                    <h1 className='temp'>JSX Works!</h1>
                    <small>Created by Васкеза~Каприн.</small>
                </div>
            )

// JSX IS JUST A JS OBJECT
console.log(jsx);

// ADD JSX TO PAGE
ReactDOM.createRoot(document.getElementById('jsx')).render(jsx);
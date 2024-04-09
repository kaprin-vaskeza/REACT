// Old way of insering HTML code.
// ReactDOM.render(<h2>Created by Васкеза.</h2>, document.getElementById('name'));

// From React 18 this is syntax. 
// Add new text line
ReactDOM.createRoot(document.getElementById('add-text-line')).render(<p>New text line!</p>)

// Add list of items
ReactDOM.createRoot(document.getElementById('list-items')).render(<ul><li>Item 1</li><li>Item 2</li></ul>)

// Add Author
const author = ReactDOM.createRoot(document.getElementById('author'));
author.render(
    <small>Created by Васкеза~Каприн.</small>
);
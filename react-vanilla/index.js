// Old way of insering HTML code.
// ReactDOM.render(<h2>Created by Васкеза.</h2>, document.getElementById('name'));

// From React 18 this is new way.
const author = ReactDOM.createRoot(document.getElementById('author'));
author.render(
    <h2>Created by Васкеза~Каприн.</h2>
);

// Add new text line
ReactDOM.createRoot(document.getElementById('add-text-line')).render(<p>New text line!</p>)

// Add list of items
ReactDOM.createRoot(document.getElementById('list-items')).render(<ul><li>Item 1</li><li>Item 2</li></ul>)
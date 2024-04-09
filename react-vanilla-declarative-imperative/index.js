// **IMPERATIVE WAY**

// GET HTML ELEMENT
const app = document.getElementById('app-imperative');

// CRETE H1 HTML ELEMTN
const h1 = document.createElement('h1');

// PUT SOME TEXT TO ELEMENT
h1.textContent = 'Imeprative WAY!';

// SET CSS CLASS
h1.className = 'header';

// ADD H1 ELEMENT TO HTML
app.append(h1);


// **DECLARATIVE WAY** $ONE LINE$
ReactDOM.createRoot(document.getElementById('app-declarative')).render(<h1 className='header'>Declarative WAY!</h1>)
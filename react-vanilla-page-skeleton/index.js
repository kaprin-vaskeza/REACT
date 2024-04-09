function NavBar(){
    return(
        <div className='menu'>
            <div>Home</div>
            <div>Contact</div>
            <div>About</div>
        </div>
    )
}

function MainComponent(){
    return(
        <h1>Main Component</h1>
    )
}

function Footer(){
    return(
        <small>Created by Васкеза~Каприн.</small>
    )
}

const page = ReactDOM.createRoot(document.getElementById('page'));

page.render(
    <React.Fragment>
        <NavBar/>
        <MainComponent/>
        <Footer/>
    </React.Fragment>
)
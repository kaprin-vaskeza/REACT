function NavBarComponent(){
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

function FooterComponent(){
    return(
        <small>Created by Васкеза~Каприн.</small>
    )
}

const page = ReactDOM.createRoot(document.getElementById('page'));

page.render(
    <React.Fragment>
        <NavBarComponent/>
        <MainComponent/>
        <FooterComponent/>
    </React.Fragment>
)
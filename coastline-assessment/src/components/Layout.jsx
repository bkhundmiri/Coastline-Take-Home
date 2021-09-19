import { Link } from "react-router-dom"
import "./Layout.css"

const Layout = (props) => {
    return (
        <>
            <nav>
                <div className="app-name">DummyGram</div>
                <Link className="home-nav" to='/'>Home</Link>
            </nav>
            <div className='props-children-container'>
                {props.children}
            </div>
            <footer>
                <div className="app-footer">Made for Coastline's Assessment</div>
                <div className="app-copyright">®Bilal Khundmiri</div>
            </footer>
        </>
    )
}

export default Layout
import { Link } from "react-router-dom"

const Layout = (props) => {
    return (
        <>
            <nav>
                <div>DummyGram</div>
                <Link to='/'>Home</Link>
            </nav>
            <div className='props-children-container'>
                {props.children}
            </div>
            <footer>
                <div>Made for Coastline's Assessment</div>
                <div>®Bilal Khundmiri</div>
            </footer>
        </>
    )
}

export default Layout
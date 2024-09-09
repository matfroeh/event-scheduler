import { Link } from 'react-router-dom'
function NavBar() {
  return (
    
    <div className="navbar bg-base-200">
        <div className='navbar-start'>
        <Link to="/"><button className="btn btn-ghost text-xl">Home</button></Link>
        </div>
        <div className='navbar-end'>
        {/* ToDo: Both are hidden when logged in (Log out option?)*/}
        <Link to="/login"><button className="btn btn-ghost">Login</button></Link>
        <Link to="/signup"><button className="btn btn-ghost">Sign Up</button></Link>
        </div>
    </div>
  )
}

export default NavBar
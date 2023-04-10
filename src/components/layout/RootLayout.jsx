import { NavLink, Outlet } from 'react-router-dom'

const RootLayout = () => {
  return (
    <div>
      <header>
        <nav>
          <NavLink to='/'>Home</NavLink>
          <NavLink to='/products'>Products</NavLink>
        </nav>
      </header>

      <main>
        <Outlet />
      </main>
    </div>
  )
}

export default RootLayout
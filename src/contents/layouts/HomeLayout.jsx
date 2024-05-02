import { Outlet } from "react-router-dom"

const HomeLayout = () => {
  return (
    <div>
        <nav>header</nav>
        <Outlet/>
        <footer>footer</footer>

    </div>
  )
}

export default HomeLayout
import Header from '../Header'

import SideBar from '../SideBar'
import './index.css'

const PageNotFound = () => (
  <div className="not-found-page">
    <SideBar />
    <div className="not-found-container">
      <Header />
      <div className="container-404">
        <h1 className="heading-404">404</h1>
        <p className="text-404">Page Not Found</p>
      </div>
    </div>
  </div>
)

export default PageNotFound

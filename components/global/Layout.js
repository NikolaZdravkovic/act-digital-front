import Nav from './Nav'


const Layout = ({ children }) => {
  return (
    <>
      <Nav />
      <div className="content">
          {children}
      </div>
    </>
  )
}


export default Layout
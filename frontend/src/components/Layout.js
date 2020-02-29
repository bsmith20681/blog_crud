import Header from './Header'

const Layout = ({children}) => {
  return (
    <React.Fragment>
      <Header />
      <p>header</p>
        {children}
      <p>footer</p>
    </React.Fragment>
  )
}

export default Layout;

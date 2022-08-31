import HeaderPage from "./HeaderPage"




export default function Layout({ children }) {
  return (
    <>
      <HeaderPage>
      {children}
      </HeaderPage>
    </>
  )
}
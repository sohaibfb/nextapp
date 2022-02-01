import HeaderPage from "./HeaderPage"




export default function Layout({ children }) {
  return (
    <>
      <HeaderPage>
      <main>{children}</main>
      </HeaderPage>
    </>
  )
}
import Aside from "../scenes/Admin/Aside"

const AdminLayout = ({children}) => {
  return (
    <div className="w-screen h-screen adminLayout flex bg-babyPowder">
        <aside className="w-[300px] h-screen border">
<Aside></Aside>
        </aside>
        <main className="p-10 w-full h-full">{children}</main>
    </div>
  )
}

export default AdminLayout
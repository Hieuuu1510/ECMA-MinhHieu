import { menus } from "../data"
import { useEffect, useState } from "../lib"

const nav = () => {
  const [menu, setMenu] = useState("");

  useEffect(() => {
    fetch("http://localhost:3000/menu", {
            method:"GET"
          })
          .then((item) => item.json())
          .then((menu) => setMenu(menu))
          .catch(() => alert("list menu thất bại"))
  }, [])
  
  return (
    `
     ${menus.map((menu) => {
      `<li><a href="${menu.link}">${menu.name}</a></li>`
     })}
    `
  )
}
export default nav
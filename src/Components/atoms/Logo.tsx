import React from 'react'
interface Logopath{
    path:string
}
const Logo:React.FC<Logopath> = ({path}) => {
  return (
   <>
    <img src={`/Assets/marvels.jpg`} alt=" Marvels Logo" width="10%" height="100%"/>
    {console.log(path)}
    </>
  )
}
export default Logo

import React from "react"
import { NumberTicker } from "./ui/number-ticker"

type userProps = {
  title: string,
  value: number
}

const Users:React.FC<userProps> = ({title, value}) => {
  return (
    <div className="px-24 py-12 rounded-2xl flex justify-center items-center flex-col bg-slate-200">
      <h1 className="text-2xl text-center font-semibold w-full text-red-500">{title}</h1>
      <h2 className="text-lg">
      <NumberTicker 
      value={value}
       />+
      </h2>
    </div>
  )
}

export default Users

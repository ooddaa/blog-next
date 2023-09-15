import React from 'react'

type WorkspaceDescriptionProps = {
  children: string | JSX.Element
}

export default function WorkspaceDescription({ children }: WorkspaceDescriptionProps) {
  return (
    <div className='p-6 bg-white border-b w-full text-md/8'>
       {children}
    </div>
  )
}

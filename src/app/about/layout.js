import SideMenu from '@/components/sidemenu'
import React from 'react'

export default function Layout({children}) {
  return (
    <div style={{display:'flex'}}>
        <SideMenu />
        {children}
        </div>
  )
}

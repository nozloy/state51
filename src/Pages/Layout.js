import React from 'react'
import Logo from '../components/Logo'
import { Outlet } from 'react-router-dom'

const Layout = () => {
	return (
		<div className='flex flex-col max-w-md mx-auto mb-5 pb-5 neo mt-0 bg-blue-gray-100 rounded-b-xl'>
			<Logo />
			<Outlet />
		</div>
	)
}

export default Layout

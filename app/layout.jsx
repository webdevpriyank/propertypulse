import React from 'react'
import '@/assets/styles/global.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata = {
    title: 'Property Pulse | Find Perfect Rental',
    description: 'Find perfect property Pulse',
    keywords: 'property pulse, find perfect property'
}

const MainLayout = ({ children }) => {
    return (
        <html lang="en">
            <body>
                <Navbar></Navbar>                
                    {children}
                <Footer />
            </body>
        </html>
    )
}

export default MainLayout
import { Routes, Route } from 'react-router-dom'
import { DefaultLayout } from './layouts/DefaultLayout'

import { Home } from './pages/Home'
import { Checkout } from './pages/Checkout'
import { Approved } from './pages/Approved'

export function Router(){
    return(
        <Routes>
            <Route path='/' element={<DefaultLayout />}>
                <Route index element={<Home />} />
                <Route path='/checkout' element={<Checkout />} />
                <Route path='/checkout/approved' element={<Approved />} />
            </Route>
        </Routes>
    )
}
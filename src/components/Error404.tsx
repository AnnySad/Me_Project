import React from 'react'
import pages404 from'./404.png'
import s from './404.module.css'

function Error404() {
    return (
         <div className={s.content}>
             <div>404</div>
             <div>Page not found!</div>
             <div>—ฅ/ᐠ.̫ .ᐟ\ฅ—</div>
             <img src={pages404}/>

        </div>
    )
}

export default Error404
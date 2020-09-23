import ez from 'ezdo'
import './base/reset.css'
import Home from './pages/index'
// import Router from 'ezdo-router'


// let router = new Router({
//     view: new Home(),
//     routes: [
//         { path: '/', tem: '' },
//         { path: '/a', tem: '' },
//         { path: '/a/b', tem: '' },
//         { path: '/b', tem: '' },
//     ]
// })
// router.path = '/'

// ez.use(router)

//
ez.render(new Home())


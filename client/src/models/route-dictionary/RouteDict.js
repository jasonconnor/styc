/* Harness:
import { HeaderRouteDict } from 'models/route-dictionary/RouteDict';

HeaderRouteDict['/login'].BGColor
*/

/**
 * Route Dictionary - Header Properties
 */
export const HeaderRouteDict = {
    '/': {
        BGColor: 'rgba(0,0,0,0.2)',
        Position: 'absolute',
    },
    '/login' : {
        BGColor: 'white',
        Position: 'inherit',
    },
}

/**
 * Route Dictionary - Footer Properties
 */
export const FooterRouteDict = {
    '/': {
        BGColor: 'example',
        Position: 'example',
    },
    '/login' : {
        BGColor: 'example',
        Position: 'example',
    },
}
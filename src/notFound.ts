import { URLPattern, Route } from './router'

const notFoundPattern = new URLPattern({ pathname: '*' })

export const notFoundRoute: Route = {
    pattern: notFoundPattern,
    handler: () => console.log('404'),
    cacheable: false,
    permissions: []
}

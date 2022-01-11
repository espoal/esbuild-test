import { notFoundRoute } from './notFound'

export { URLPattern } from 'urlpattern-polyfill/src'


export interface Route {
    pattern: any
    handler: any
    cacheable: boolean
    permissions: string[]
}

export const routeMatcher = (routes: Route[], headers: any) => {
    const pathname = headers[':path']

    const route = routes.find(route => route.pattern.test({ pathname }))

    if (route == null) {
        console.log({ notFound: pathname })
        return notFoundRoute
    }

    return route
}

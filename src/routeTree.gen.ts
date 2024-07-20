/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as LayoutImport } from './routes/_layout'
import { Route as IndexImport } from './routes/index'
import { Route as WardsIndexImport } from './routes/wards/index'
import { Route as ProfileIndexImport } from './routes/profile/index'
import { Route as MpsIndexImport } from './routes/mps/index'
import { Route as McasIndexImport } from './routes/mcas/index'
import { Route as GovernorsIndexImport } from './routes/governors/index'
import { Route as CountiesIndexImport } from './routes/counties/index'
import { Route as ConstituenciesIndexImport } from './routes/constituencies/index'
import { Route as CandidatesIndexImport } from './routes/candidates/index'
import { Route as AuthIndexImport } from './routes/auth/index'
import { Route as AdminIndexImport } from './routes/admin/index'
import { Route as CandidatesNewImport } from './routes/candidates/new'
import { Route as AuthSignupImport } from './routes/auth/signup'
import { Route as CandidatesIdIndexImport } from './routes/candidates/$id/index'
import { Route as CandidatesIdUpdateIndexImport } from './routes/candidates/$id/update/index'
import { Route as CandidatesIdAspirationsIndexImport } from './routes/candidates/$id/aspirations/index'
import { Route as CandidatesIdAspirationsNewImport } from './routes/candidates/$id/aspirations/new'
import { Route as CandidatesIdAspirationsAspImport } from './routes/candidates/$id/aspirations/$asp'
import { Route as CandidatesIdAspirationsAspFormImport } from './routes/candidates/$id/aspirations/$asp.form'

// Create/Update Routes

const LayoutRoute = LayoutImport.update({
  id: '/_layout',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const WardsIndexRoute = WardsIndexImport.update({
  path: '/wards/',
  getParentRoute: () => rootRoute,
} as any)

const ProfileIndexRoute = ProfileIndexImport.update({
  path: '/profile/',
  getParentRoute: () => rootRoute,
} as any)

const MpsIndexRoute = MpsIndexImport.update({
  path: '/mps/',
  getParentRoute: () => rootRoute,
} as any)

const McasIndexRoute = McasIndexImport.update({
  path: '/mcas/',
  getParentRoute: () => rootRoute,
} as any)

const GovernorsIndexRoute = GovernorsIndexImport.update({
  path: '/governors/',
  getParentRoute: () => rootRoute,
} as any)

const CountiesIndexRoute = CountiesIndexImport.update({
  path: '/counties/',
  getParentRoute: () => rootRoute,
} as any)

const ConstituenciesIndexRoute = ConstituenciesIndexImport.update({
  path: '/constituencies/',
  getParentRoute: () => rootRoute,
} as any)

const CandidatesIndexRoute = CandidatesIndexImport.update({
  path: '/candidates/',
  getParentRoute: () => rootRoute,
} as any)

const AuthIndexRoute = AuthIndexImport.update({
  path: '/auth/',
  getParentRoute: () => rootRoute,
} as any)

const AdminIndexRoute = AdminIndexImport.update({
  path: '/admin/',
  getParentRoute: () => rootRoute,
} as any)

const CandidatesNewRoute = CandidatesNewImport.update({
  path: '/candidates/new',
  getParentRoute: () => rootRoute,
} as any)

const AuthSignupRoute = AuthSignupImport.update({
  path: '/auth/signup',
  getParentRoute: () => rootRoute,
} as any)

const CandidatesIdIndexRoute = CandidatesIdIndexImport.update({
  path: '/candidates/$id/',
  getParentRoute: () => rootRoute,
} as any)

const CandidatesIdUpdateIndexRoute = CandidatesIdUpdateIndexImport.update({
  path: '/candidates/$id/update/',
  getParentRoute: () => rootRoute,
} as any)

const CandidatesIdAspirationsIndexRoute =
  CandidatesIdAspirationsIndexImport.update({
    path: '/candidates/$id/aspirations/',
    getParentRoute: () => rootRoute,
  } as any)

const CandidatesIdAspirationsNewRoute = CandidatesIdAspirationsNewImport.update(
  {
    path: '/candidates/$id/aspirations/new',
    getParentRoute: () => rootRoute,
  } as any,
)

const CandidatesIdAspirationsAspRoute = CandidatesIdAspirationsAspImport.update(
  {
    path: '/candidates/$id/aspirations/$asp',
    getParentRoute: () => rootRoute,
  } as any,
)

const CandidatesIdAspirationsAspFormRoute =
  CandidatesIdAspirationsAspFormImport.update({
    path: '/form',
    getParentRoute: () => CandidatesIdAspirationsAspRoute,
  } as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/_layout': {
      id: '/_layout'
      path: ''
      fullPath: ''
      preLoaderRoute: typeof LayoutImport
      parentRoute: typeof rootRoute
    }
    '/auth/signup': {
      id: '/auth/signup'
      path: '/auth/signup'
      fullPath: '/auth/signup'
      preLoaderRoute: typeof AuthSignupImport
      parentRoute: typeof rootRoute
    }
    '/candidates/new': {
      id: '/candidates/new'
      path: '/candidates/new'
      fullPath: '/candidates/new'
      preLoaderRoute: typeof CandidatesNewImport
      parentRoute: typeof rootRoute
    }
    '/admin/': {
      id: '/admin/'
      path: '/admin'
      fullPath: '/admin'
      preLoaderRoute: typeof AdminIndexImport
      parentRoute: typeof rootRoute
    }
    '/auth/': {
      id: '/auth/'
      path: '/auth'
      fullPath: '/auth'
      preLoaderRoute: typeof AuthIndexImport
      parentRoute: typeof rootRoute
    }
    '/candidates/': {
      id: '/candidates/'
      path: '/candidates'
      fullPath: '/candidates'
      preLoaderRoute: typeof CandidatesIndexImport
      parentRoute: typeof rootRoute
    }
    '/constituencies/': {
      id: '/constituencies/'
      path: '/constituencies'
      fullPath: '/constituencies'
      preLoaderRoute: typeof ConstituenciesIndexImport
      parentRoute: typeof rootRoute
    }
    '/counties/': {
      id: '/counties/'
      path: '/counties'
      fullPath: '/counties'
      preLoaderRoute: typeof CountiesIndexImport
      parentRoute: typeof rootRoute
    }
    '/governors/': {
      id: '/governors/'
      path: '/governors'
      fullPath: '/governors'
      preLoaderRoute: typeof GovernorsIndexImport
      parentRoute: typeof rootRoute
    }
    '/mcas/': {
      id: '/mcas/'
      path: '/mcas'
      fullPath: '/mcas'
      preLoaderRoute: typeof McasIndexImport
      parentRoute: typeof rootRoute
    }
    '/mps/': {
      id: '/mps/'
      path: '/mps'
      fullPath: '/mps'
      preLoaderRoute: typeof MpsIndexImport
      parentRoute: typeof rootRoute
    }
    '/profile/': {
      id: '/profile/'
      path: '/profile'
      fullPath: '/profile'
      preLoaderRoute: typeof ProfileIndexImport
      parentRoute: typeof rootRoute
    }
    '/wards/': {
      id: '/wards/'
      path: '/wards'
      fullPath: '/wards'
      preLoaderRoute: typeof WardsIndexImport
      parentRoute: typeof rootRoute
    }
    '/candidates/$id/': {
      id: '/candidates/$id/'
      path: '/candidates/$id'
      fullPath: '/candidates/$id'
      preLoaderRoute: typeof CandidatesIdIndexImport
      parentRoute: typeof rootRoute
    }
    '/candidates/$id/aspirations/$asp': {
      id: '/candidates/$id/aspirations/$asp'
      path: '/candidates/$id/aspirations/$asp'
      fullPath: '/candidates/$id/aspirations/$asp'
      preLoaderRoute: typeof CandidatesIdAspirationsAspImport
      parentRoute: typeof rootRoute
    }
    '/candidates/$id/aspirations/new': {
      id: '/candidates/$id/aspirations/new'
      path: '/candidates/$id/aspirations/new'
      fullPath: '/candidates/$id/aspirations/new'
      preLoaderRoute: typeof CandidatesIdAspirationsNewImport
      parentRoute: typeof rootRoute
    }
    '/candidates/$id/aspirations/': {
      id: '/candidates/$id/aspirations/'
      path: '/candidates/$id/aspirations'
      fullPath: '/candidates/$id/aspirations'
      preLoaderRoute: typeof CandidatesIdAspirationsIndexImport
      parentRoute: typeof rootRoute
    }
    '/candidates/$id/update/': {
      id: '/candidates/$id/update/'
      path: '/candidates/$id/update'
      fullPath: '/candidates/$id/update'
      preLoaderRoute: typeof CandidatesIdUpdateIndexImport
      parentRoute: typeof rootRoute
    }
    '/candidates/$id/aspirations/$asp/form': {
      id: '/candidates/$id/aspirations/$asp/form'
      path: '/form'
      fullPath: '/candidates/$id/aspirations/$asp/form'
      preLoaderRoute: typeof CandidatesIdAspirationsAspFormImport
      parentRoute: typeof CandidatesIdAspirationsAspImport
    }
  }
}

// Create and export the route tree

export const routeTree = rootRoute.addChildren({
  IndexRoute,
  AuthSignupRoute,
  CandidatesNewRoute,
  AdminIndexRoute,
  AuthIndexRoute,
  CandidatesIndexRoute,
  ConstituenciesIndexRoute,
  CountiesIndexRoute,
  GovernorsIndexRoute,
  McasIndexRoute,
  MpsIndexRoute,
  ProfileIndexRoute,
  WardsIndexRoute,
  CandidatesIdIndexRoute,
  CandidatesIdAspirationsAspRoute: CandidatesIdAspirationsAspRoute.addChildren({
    CandidatesIdAspirationsAspFormRoute,
  }),
  CandidatesIdAspirationsNewRoute,
  CandidatesIdAspirationsIndexRoute,
  CandidatesIdUpdateIndexRoute,
})

/* prettier-ignore-end */

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/_layout",
        "/auth/signup",
        "/candidates/new",
        "/admin/",
        "/auth/",
        "/candidates/",
        "/constituencies/",
        "/counties/",
        "/governors/",
        "/mcas/",
        "/mps/",
        "/profile/",
        "/wards/",
        "/candidates/$id/",
        "/candidates/$id/aspirations/$asp",
        "/candidates/$id/aspirations/new",
        "/candidates/$id/aspirations/",
        "/candidates/$id/update/"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/_layout": {
      "filePath": "_layout.tsx"
    },
    "/auth/signup": {
      "filePath": "auth/signup.tsx"
    },
    "/candidates/new": {
      "filePath": "candidates/new.tsx"
    },
    "/admin/": {
      "filePath": "admin/index.tsx"
    },
    "/auth/": {
      "filePath": "auth/index.tsx"
    },
    "/candidates/": {
      "filePath": "candidates/index.tsx"
    },
    "/constituencies/": {
      "filePath": "constituencies/index.tsx"
    },
    "/counties/": {
      "filePath": "counties/index.tsx"
    },
    "/governors/": {
      "filePath": "governors/index.tsx"
    },
    "/mcas/": {
      "filePath": "mcas/index.tsx"
    },
    "/mps/": {
      "filePath": "mps/index.tsx"
    },
    "/profile/": {
      "filePath": "profile/index.tsx"
    },
    "/wards/": {
      "filePath": "wards/index.tsx"
    },
    "/candidates/$id/": {
      "filePath": "candidates/$id/index.tsx"
    },
    "/candidates/$id/aspirations/$asp": {
      "filePath": "candidates/$id/aspirations/$asp.tsx",
      "children": [
        "/candidates/$id/aspirations/$asp/form"
      ]
    },
    "/candidates/$id/aspirations/new": {
      "filePath": "candidates/$id/aspirations/new.tsx"
    },
    "/candidates/$id/aspirations/": {
      "filePath": "candidates/$id/aspirations/index.tsx"
    },
    "/candidates/$id/update/": {
      "filePath": "candidates/$id/update/index.tsx"
    },
    "/candidates/$id/aspirations/$asp/form": {
      "filePath": "candidates/$id/aspirations/$asp.form.tsx",
      "parent": "/candidates/$id/aspirations/$asp"
    }
  }
}
ROUTE_MANIFEST_END */

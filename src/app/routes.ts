import {Routes} from '@angular/router'

import {
    HomeComponent,
    DashboardComponent,
    ProductsComponent,
    ProductDetailsComponent
} from './index'

export const appRoutes : Routes = [
    {
        path: '',
        component: HomeComponent,
        pathMatch: 'full' 
    },
    {
        path: 'products',
        component: ProductsComponent 
    },
    {
        path: 'product-details',
        component: ProductDetailsComponent 
    }
    /* , {
        path: '404',
        component: Error404Component
    }, {
        path: '**',
        redirectTo: '/404'
    } */
]

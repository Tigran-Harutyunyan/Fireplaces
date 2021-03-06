import {Routes} from '@angular/router'

import {
    HomeComponent,
    DashboardComponent,
    ProductsComponent,
    ProductDetailsComponent,
    GalleryComponent
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
        path: 'product/:id',
        component: ProductDetailsComponent 
    },
    {
        path: 'gallery',
        component: GalleryComponent 
    }
    /* , {
        path: '404',
        component: Error404Component
    }, {
        path: '**',
        redirectTo: '/404'
    } */
]

import { Routes } from '@angular/router';
import { HomeListRecipes } from './features/home-list-recipes/home-list-recipes';
import { CookingGuideDetails } from './features/cooking-guide-details/cooking-guide-details';
import { ProfileDetails } from './features/profile-details/profile-details';
import { PricingPlan } from './features/pricing-plan/pricing-plan';
import { Checkout } from './features/checkout/checkout';
import { NotFound } from './features/not-found/not-found';


export const routes: Routes = [
    {
        path: '',
        title: 'Home - Recipe Listing',
        component: HomeListRecipes
    },
    {
        path: 'cooking-guide-details/:searchRecipe',
        title: 'Cooking guide details',
        component: CookingGuideDetails
    },
    {
        path: 'profile-details/:currentUser',
        title: 'Profile details - Recipe listing',
        component: ProfileDetails
    },
    {
        path: 'pricing-plan-details',
        title: 'Pricing plan details',
        component: PricingPlan
    },
    {
        path: 'checkout-payment',
        title: 'Checkout - Payment',
        component: Checkout
    },
    {
        path: '**',
        title: 'Not Found',
        component: NotFound
    }
];

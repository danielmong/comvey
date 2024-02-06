<?php

namespace App\Filament\Dashboard\Resources\SubscriptionResource\Pages;

use App\Filament\Dashboard\Resources\SubscriptionResource;
use Filament\Resources\Pages\Page;

class ChangeSubscriptionPlan extends Page
{
    protected static string $resource = SubscriptionResource::class;

    protected static string $view = 'filament.dashboard.resources.subscription-resource.pages.change-subscription-plan';
}

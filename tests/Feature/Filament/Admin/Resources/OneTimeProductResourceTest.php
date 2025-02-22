<?php

namespace Tests\Feature\Filament\Admin\Resources;

use App\Filament\Admin\Resources\OneTimeProductResource;
use Tests\Feature\FeatureTest;

class OneTimeProductResourceTest extends FeatureTest
{
    public function test_list(): void
    {
        $user = $this->createAdminUser();
        $this->actingAs($user);

        $response = $this->get(OneTimeProductResource::getUrl('index', [], true, 'admin'))->assertSuccessful();

        $response->assertStatus(200);
    }
}

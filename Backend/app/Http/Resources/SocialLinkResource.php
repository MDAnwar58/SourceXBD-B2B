<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class SocialLinkResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'link_1' => $this->link_1,
            'link_2' => $this->link_2,
            'link_3' => $this->link_3,
            'link_4' => $this->link_4,
            'app_google' => $this->app_google,
            'app_apple' => $this->app_apple,
            'qr_code' => $this->images()->where('type', 'qr_code')->first()?->url,  // Assuming you have a 'type' field to differentiate between images
        ];
    }
}

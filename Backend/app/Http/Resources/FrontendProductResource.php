<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class FrontendProductResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'name' => $this->name,
            'slug' => $this->slug,
            'price' => $this->price,
            'stock' => $this->stock,
            'status' => $this->status,
            'user_name' => $this->user->name,
            'category_name' => $this->category->name,
            'image' => $this->media->first()->url ?? null,  // Only the first image
        ];
    }
}

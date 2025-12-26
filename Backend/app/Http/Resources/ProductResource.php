<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ProductResource extends JsonResource
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
            'category' => $this->category->name,
            'price' => $this->price,
            'stock' => $this->stock,
            'seller' => $this->user->name,
            'status' => $this->status,
            'images' => $this->media->filter(fn($media) => in_array($media->mime_type, ['image/jpeg', 'image/png', 'image/jpg']))->pluck('url'), // Assuming you have a 'url' accessor or method on the media model
            'video' => $this->media->firstWhere('mime_type', 'like', 'video/%')?->url,
            'created_at' => $this->created_at->format('d-m-Y | H:i'),
        ];
    }
}

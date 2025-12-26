<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\Storage;

class BlogResource extends JsonResource
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
            'title' => $this->title,
            'sub_title' => $this->sub_title,
            'desc' => $this->desc,
            'slug' => $this->slug,
            'tags' => $this->tags,
            'images' => $this->images->map(function ($image) {
                return [
                    'id' => $image->id,
                    'image_url' => Storage::url('blogs/' . $image->image),
                ];
            }),
        ];
    }
}

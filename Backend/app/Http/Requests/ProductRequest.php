<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ProductRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'category_id' => 'required|exists:categories,id',
            'name' => 'required|string|max:255',
            'desc' => 'required',
            'price' => 'required|numeric',
            'stock' => 'required|integer',
            'status' => 'required|in:available,unavailable',
            'files' => 'required|array|min:1|max:5', // Ensure there's at least 1 file and at most 5 files
            'files.*' => 'mimes:jpeg,png,jpg,gif,svg,mp4,mov,ogg|max:20480', // 20MB max per file
        ];
    }
}

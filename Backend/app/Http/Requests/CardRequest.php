<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class CardRequest extends FormRequest
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
        $rules = [
            'title' => 'required|string|max:255',
            'desc'  => 'required|string',
        ];

        if ($this->isMethod('post')) {
            // Validation rules for creating a product
            $rules['image'] = 'required|image|mimes:jpeg,png,jpg,gif,svg|max:2048';
        }

        if ($this->isMethod('put') || $this->isMethod('patch')) {
            // Validation rules for updating a product
            $rules['image'] = 'sometimes|image|mimes:jpeg,png,jpg,gif,svg|max:2048';
        }

        return $rules;
    }
}

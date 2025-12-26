<?php

namespace App\Http\Requests;

use App\Rules\NameValidation;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class PermisionRequest extends FormRequest
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
            'name' => ['required', new NameValidation],
        ];

        if ($this->isMethod('post')) {
            $rules['name'][] = 'unique:permissions,name';
        } elseif ($this->isMethod('put') || $this->isMethod('patch')) {
            $rules['name'][] = Rule::unique('permissions', 'name')->ignore($this->route('id'));
        }

        return $rules;
    }
}

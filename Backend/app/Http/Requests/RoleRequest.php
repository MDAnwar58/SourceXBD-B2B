<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;
use App\Rules\NameValidation;

class RoleRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        $rules = [
            'permission_id' => 'required|array',
            'permission_id.*' => 'integer|exists:permissions,id',
            'name' => ['required', new NameValidation],
        ];

        if ($this->isMethod('post')) {
            $rules['name'][] = 'unique:roles,name';
        } elseif ($this->isMethod('put') || $this->isMethod('patch')) {
            $rules['name'][] = Rule::unique('roles', 'name')->ignore($this->route('role'));
        }

        return $rules;
    }
}

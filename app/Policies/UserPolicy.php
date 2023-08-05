<?php

namespace App\Policies;

use App\Models\User;

class UserPolicy
{
    /**
     * Create a new policy instance.
     */
    public function __construct()
    {
        //
    }

    public function create(User $user)
    {
        return $user->email === 'email@gmaill.com';
    }

    public function edit(User $user, User $model)
    {
        return (bool) mt_rand(0, 1);
    }
}

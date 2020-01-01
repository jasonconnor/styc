<?php

namespace App\Form\Model;

use App\Validator\UniqueUser;
use Symfony\Component\Validator\Constraints as Assert;

class RegistrationFormModel
{
    /**
     * @UniqueUser()
     * @Assert\NotBlank(message="You'll need a username to sign in.")
     * @Assert\Length(
     *  min=2,
     *  minMessage="Your username should contain at least 2 characters.",
     *  max=20,
     *  maxMessage="That username is too long; try one with no more than 20 characters."
     * )
     */
    public $username;

    /**
     * @Assert\NotBlank(message="You'll need a password to sign in.")
     * @Assert\Length(
     *  min=5,
     *  minMessage="Your password needs to be at least 5 characters."
     * )
     */
    public $plainPassword;
}
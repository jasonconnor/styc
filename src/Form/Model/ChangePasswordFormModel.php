<?php

namespace App\Form\Model;

use Symfony\Component\Validator\Constraints as Assert;
use Symfony\Component\Security\Core\Validator\Constraints as SecurityAssert;

class ChangePasswordFormModel
{
    /**
     * @Assert\NotBlank(message="Please verify your current password before changing it")
     * @SecurityAssert\UserPassword(message="Your current password was incorrect.")
     */
    public $currentPassword;

    /**
     * @Assert\NotBlank(message="To change your password, you'll need to provide a new one.")
     * @Assert\Length(
     *  min=5,
     *  minMessage="Your password needs to be at least 5 characters."
     * )
     */
    public $newPassword;
}
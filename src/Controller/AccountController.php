<?php

namespace App\Controller;

use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @IsGranted("ROLE_USER")
 */
class AccountController extends BaseController
{
    /**
     * @Route("/account", name="account")
     */
    public function index()
    {   
        return $this->render('account/index.html.twig', [
            
        ]);
    }

    /**
     * @Route("/account/change_password", name="change_password")
     */
    public function changePassword()
    {
        return $this->render('account/newPassword.html.twig', [

        ]);
    }
}

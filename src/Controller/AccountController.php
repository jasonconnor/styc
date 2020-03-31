<?php

namespace App\Controller;

use App\Entity\Score;
use App\Entity\User;
use App\Repository\ScoreRepository;
use Doctrine\ORM\EntityManagerInterface;
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
    public function index(ScoreRepository $repository)
    {
        return $this->render('account/index.html.twig', [

        ]);
    }

}

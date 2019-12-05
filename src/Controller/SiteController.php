<?php

namespace App\Controller;

use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class SiteController extends AbstractController
{
    /**
     * @Route("/", name="index")
     */
    public function index()
    {
        return $this->render('site/index.html.twig');
    }

    /**
     * @Route("/play", name="play")
     */
    public function play()
    {
        return $this->render('site/play.html.twig');
    }

    /**
     * @Route("/highscores", name="highscores")
     */
    public function highscores()
    {
        return $this->render('site/highscores.html.twig');
    }
}
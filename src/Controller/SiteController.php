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
        return new Response('Index Action from the Site Controller');
    }

    /**
     * @Route("/play", name="play")
     */
    public function play()
    {
        return new Response('Play Action from the Site Controller');
    }

    /**
     * @Route("/highscores", name="highscores")
     */
    public function highscores()
    {
        return new Response('Highscores Action from Site Controller');
    }
}
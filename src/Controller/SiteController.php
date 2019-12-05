<?php

namespace App\Controller;

use App\Entity\Score;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\Routing\Annotation\Route;
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
    public function play(EntityManagerInterface $em)
    {
        $score = new Score();
        $score->setScore(rand(0, 100000));

        $em->persist($score);
        $em->flush();

        return $this->render('site/play.html.twig', [
            'score' => $score->getScore()
        ]);
    }

    /**
     * @Route("/highscores", name="highscores")
     */
    public function highscores(EntityManagerInterface $em)
    {
        $repository = $em->getRepository(Score::class);
        $highscores = $repository->findAll();

        return $this->render('site/highscores.html.twig', [
            'scores' => $highscores
        ]);
    }
}
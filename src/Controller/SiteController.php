<?php

namespace App\Controller;

use App\Entity\Score;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
use Symfony\Component\HttpFoundation\Session\Session;


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
     * @IsGranted("ROLE_USER")
     */
    public function play()
    {
        return $this->render('site/play.html.twig', [
            
        ]);
    }

    /**
     * @Route("/highscores", name="highscores")
     */
    public function highscores(EntityManagerInterface $em)
    {
        $repository = $em->getRepository(Score::class);
        $highscores = $repository->findTop100Scores();

        return $this->render('site/highscores.html.twig', [
            'scores' => $highscores
        ]);
    }

    /**
     * @Route("/save", name="save")
     */
    public function save(Request $request, EntityManagerInterface $em, Session $session) {
        $save = $request->headers->get('Score');
        $user = $this->getUser();

        $score = new Score();
        $score->setUser($user)
            ->setScore($save)
            ->setDate(new \DateTime)
        ;

        $em->persist($score);
        $em->flush();

        return new Response('Score saved, check database!');
    }
}
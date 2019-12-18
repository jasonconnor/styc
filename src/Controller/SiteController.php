<?php

namespace App\Controller;

use App\Entity\Score;
use App\Entity\User;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Request;
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
     * @Route("/new-user", name="new-user")
     */
    public function newUser(EntityManagerInterface $em)
    {
        $user = new User();
        $user->setUsername('Jason');

        $em->persist($user);
        $em->flush();

        return new Response(sprintf('Successfully added user %s', $user->getUsername()));
    }

    /**
     * @Route("/save", name="save")
     */
    public function save(Request $request, EntityManagerInterface $em) {
        $save = $request->headers->get('Score');

        $score = new Score();
        $score->setUsername('Jason')
            ->setScore($save)
            ->setDate(new \DateTime)
        ;

        $em->persist($score);
        $em->flush();

        return new Response('Score saved, check database!');
    }
}
<?php

namespace App\Controller;

use App\Entity\Post;
use App\Entity\Score;
use App\Repository\PostRepository;
use App\Repository\ScoreRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

class SiteController extends AbstractController
{
    /**
     * @Route("/", name="index")
     */
    public function index(PostRepository $repository)
    {
        $news = $repository->findLatest10Posts();

        return $this->render('site/index.html.twig', [
            'news' => $news
        ]);
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
    public function highscores(ScoreRepository $repository)
    {
        $highscores = $repository->findTop25Scores();

        return $this->render('site/highscores.html.twig', [
            'scores' => $highscores
        ]);
    }

    /**
     * @Route("/save", name="save")
     */
    public function save(Request $request, EntityManagerInterface $em) 
    {
        $saveScore = $request->headers->get('Score');
        $saveLevel = $request->headers->get('Level');
        $user = $this->getUser();
        $currentHighestLevel = $user->getHighestLevel();
        $currentHighestScore = $user->getHighestScore();

        $score = new Score();
        $score->setUser($user)
            ->setScore($saveScore)
            ->setLevel($saveLevel)
            ->setDate(new \DateTime)
        ;

        if ($saveLevel > $currentHighestLevel) {
            $user->setHighestLevel($saveLevel);
        }

        if ($saveScore > $currentHighestScore) {
            $user->setHighestScore($saveScore);
        }

        $em->persist($score, $user);
        $em->flush();

        return new Response('Score saved, check database!');
    }
}
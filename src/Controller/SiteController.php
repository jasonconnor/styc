<?php

namespace App\Controller;

use App\Entity\Score;
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
     * @Route("/save", name="save")
     */
    public function save(Request $request, EntityManagerInterface $em) {
        $test = $request->headers->get('Score');

        $score = new Score();
        $score->setUsername('Jason')
            ->setScore($test)
            ->setDate(new \DateTime)
        ;

        $em->persist($score);
        $em->flush();

        return new Response('Score saved, check database!');


        /*
        $response = new Response();

        $score = $response->headers->get("Score");

        return new Response($score);
        
        $request = $requestStack->getCurrentRequest();

        var_dump($request);

        $dataResponse = array("error" => false);
        return new JsonResponse($dataResponse);

        
        $data = $this->requestStack->getCurrentRequest('data');
        var_dump($data);
        $dataResponse = array("error" => false);
        return new JsonResponse($dataResponse);
        */
    }
}
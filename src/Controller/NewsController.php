<?php

namespace App\Controller;

use App\Entity\Post;
use App\Repository\PostRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Twig\Extra\String\StringExtension;

class NewsController extends AbstractController
{
    /**
     * @Route("/news", name="news_index")
     */
    public function index(PostRepository $repository) 
    {
        $posts = $repository->findAll();

        return $this->render('/news/index.html.twig', [
            'posts' => $posts
        ]);
    }

    /**
     * @Route("/news/{slug}", name="show_post")
     */
    public function show($slug)
    {
        return new Response(sprintf(ucwords(str_replace('-', ' ', $slug))));
    }
}
<?php

namespace App\Controller;

use App\Entity\Post;
use App\Repository\PostRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class NewsController extends AbstractController
{
    /**
     * @Route("/news", name="news_index")
     */
    public function index() {
        return new Response('News Posts, here we will fetch all news items and paginate the results.');
    }

    /**
     * @Route("/news/{slug}", name="show_news")
     */
    public function show($slug) {
        return new Response(sprintf(ucwords(str_replace('-', ' ', $slug))));
    }
}
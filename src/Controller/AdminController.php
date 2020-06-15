<?php

namespace App\Controller;

use App\Entity\User;
use App\Entity\Post;
use App\Form\PostFormType;
use App\Repository\PostRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;

/**
 * @IsGranted("ROLE_ADMIN")
 */
class AdminController extends BaseController
{
    private $passwordEncoder;

    public function __construct(UserPasswordEncoderInterface $passwordEncoder)
    {
        $this->passwordEncoder = $passwordEncoder;
    }

    /**
     * @Route("/admin", name="admin_index")
     */
    public function index()
    {
        return $this->render('admin/index.html.twig', [
            
        ]);
    }

    /**
     * @Route("/admin/new-post", name="new_post", methods={"GET", "POST"})
     */
    public function newPost(EntityManagerInterface $em, Request $request)
    {
        $form = $this->createForm(PostFormType::class);

        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {

            /** @var Post $post */
            $post = $form->getData();
            $post->setAuthor($this->getUser());

            $em->persist($post);
            $em->flush();

            $this->addFlash('success', 'Your post was created!');

            return $this->redirectToRoute('news_index');
        }

        return $this->render('admin/newPost.html.twig', [
            'postForm' => $form->createView(),
            'title' => 'Create a New Post'
        ]);
    }

    /**
     * @Route("/admin/edit/{slug}", name="edit_post", methods={"GET", "POST"})
     */
     public function editPost(Post $post, Request $request, EntityManagerInterface $em)
    {
        $form = $this->createForm(PostFormType::class, $post);

        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {

            /** @var Post $post */
            $post = $form->getData();
            $post->setAuthor($this->getUser());

            $em->persist($post);
            $em->flush();

            $this->addFlash('success', 'Your post was edited!');

            return $this->redirectToRoute('index');
        }

        return $this->render('admin/newPost.html.twig', [
            'postForm' => $form->createView(),
            'title' => 'Edit Post'
        ]);
    }

    /**
     * @Route("/admin/delete/{slug}", name="delete_post", methods={"GET", "DELETE"})
     */
    public function deletePost($slug, PostRepository $repository, EntityManagerInterface $em)
    {
        $post = $repository->findOneBy(['slug' => $slug]);

        $em->remove($post);
        $em->flush();
        
        $this->addFlash('success', 'Your post was deleted!');

        return $this->redirectToRoute('index');
    }
}

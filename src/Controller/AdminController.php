<?php

namespace App\Controller;

use App\Entity\User;
use App\Entity\Post;
use App\Form\PostFormType;
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
     * @Route("/admin/new_admin", name="admin_new_admin")
     */
    public function newAdmin(EntityManagerInterface $em)
    {
        $user = new User();
        $user->setUsername('admin')
            ->setRoles(['ROLE_ADMIN'])
            ->setPassword($this->passwordEncoder->encodePassword(
                $user,
                'j4s0n3'
            ))
        ;

        $em->persist($user);
        $em->flush();

        return new Response(sprintf('Successfully added user %s', $user->getUsername()));
    }

    /**
     * @Route("/admin/new-post", name="new_post")
     */
    public function new(EntityManagerInterface $em, Request $request)
    {
        $form = $this->createForm(PostFormType::class);

        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $data = $form->getData();
            $post = new Post();
            $post->setTitle($data['title']);
            $post->setContent($data['content']);
            $post->setAuthor($this->getUser());

            $em->persist($post);
            $em->flush();

            return $this->redirectToRoute('news_index');
        }

        return $this->render('admin/newPost.html.twig', [
            'postForm' => $form->createView(),
        ]);
    }

    /**
     * @Route("/admin/edit/{slug}", name="edit_post")
     */
    public function edit($slug)
    {
        return new Response(sprintf('Editing ' . ucwords(str_replace('-', ' ', $slug))));
    }
}

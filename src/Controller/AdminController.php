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

            /** @var Post $post */
            $post = $form->getData();
            $post->setAuthor($this->getUser());

            $em->persist($post);
            $em->flush();

            $this->addFlash('success', 'Your post was created!');

            return $this->redirectToRoute('index');
        }

        return $this->render('admin/newPost.html.twig', [
            'postForm' => $form->createView(),
            'title' => 'Create a New Post'
        ]);
    }

    /**
     * @Route("/admin/edit/{slug}", name="edit_post")
     */
     public function edit(Post $post, Request $request, EntityManagerInterface $em)
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
}

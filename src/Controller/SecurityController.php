<?php

namespace App\Controller;

use App\Entity\User;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Security\Http\Authentication\AuthenticationUtils;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;

class SecurityController extends AbstractController
{
    private $passwordEncoder;

    public function __construct(UserPasswordEncoderInterface $passwordEncoder)
    {
        $this->passwordEncoder = $passwordEncoder;
    }

    /**
     * @Route("/login", name="login")
     */
    public function login(AuthenticationUtils $authenticationUtils)
    {
        // get the login error if there is one
        $error = $authenticationUtils->getLastAuthenticationError();
        // last username entered by the user
        $lastUsername = $authenticationUtils->getLastUsername();

        return $this->render('security/login.html.twig', [
            'last_username' => $lastUsername,
            'error' => $error
        ]);
    }

    /**
     * @Route("/logout", name="logout")
     */
    public function logout()
    {

    }

    /**
     * @Route("/new-user", name="new_user")
     */
    public function newUser(EntityManagerInterface $em)
    {
        $user = new User();
        $user->setUsername('jason')
            ->setPassword($this->passwordEncoder->encodePassword(
                $user,
                '1234'
            ))
        ;

        $em->persist($user);
        $em->flush();

        return new Response(sprintf('Successfully added user %s', $user->getUsername()));
    }

    /**
     * @Route("/new-admin", name="new_admin")
     * @IsGranted("ROLE_ADMIN")
     */
    public function newAdmin(EntityManagerInterface $em)
    {
        $user = new User();
        $user->setUsername('admin2')
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
}
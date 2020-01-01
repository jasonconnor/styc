<?php

namespace App\Controller;

use App\Controller\BaseController;
use App\Entity\User;
use App\Form\ChangePasswordFormType;
use App\Form\RegistrationFormType;
use App\Security\LoginFormAuthenticator;
use Doctrine\ORM\EntityManagerInterface;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;
use Symfony\Component\Security\Http\Authentication\AuthenticationUtils;
use Symfony\Component\Security\Guard\GuardAuthenticatorHandler;

class SecurityController extends BaseController
{
    private $passwordEncoder;

    public function __construct(UserPasswordEncoderInterface $passwordEncoder, EntityManagerInterface $em)
    {
        $this->passwordEncoder = $passwordEncoder;
        $this->em = $em;
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
     * @Route("/register", name="register")
     */
    public function register(Request $request, GuardAuthenticatorHandler $guardHandler, LoginFormAuthenticator $formAuthenticator)
    {
        $form = $this->createForm(RegistrationFormType::class);

        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            /** @var RegistrationFormModel $userModel */
            $userModel = $form->getData();

            $user = new User();
            $user->setUsername($userModel->username);
            $user->setPassword($this->passwordEncoder->encodePassword(
                $user,
                $userModel->plainPassword
            ));

            $this->em->persist($user);
            $this->em->flush();

            $this->addFlash('success', 'New user created');
            
            return $guardHandler->authenticateUserAndHandleSuccess(
                $user,
                $request,
                $formAuthenticator,
                'main'
            );
        }        

        return $this->render('security/register.html.twig', [
            'registrationForm' => $form->createView()
        ]);
    }


    /**
     * @Route("/account/password", name="change_password")
     * @IsGranted("ROLE_USER")
     */
    public function changePassword(Request $request, GuardAuthenticatorHandler $guardHandler, LoginFormAuthenticator $formAuthenticator)
    {
        $user = $this->getUser();

        $form = $this->createForm(ChangePasswordFormType::class);

        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            /** @var User $user */
            $userModel = $form->getData();

            $user->setPassword($this->passwordEncoder->encodePassword(
                $user,
                $userModel->newPassword
            ));

            $this->em->persist($user);
            $this->em->flush();

            $this->addFlash('success', 'Your password has been updated.');
            
            return $guardHandler->authenticateUserAndHandleSuccess(
                $user,
                $request,
                $formAuthenticator,
                'main'
            );
        }        

        return $this->render('account/changePassword.html.twig', [
            'changePasswordForm' => $form->createView()
        ]);
    }

    /**
     * @Route("/new-admin", name="new_admin")
     * @IsGranted("ROLE_ADMIN")
     */
    public function newAdmin()
    {
        $user = new User();
        $user->setUsername('admin2')
            ->setRoles(['ROLE_ADMIN'])
            ->setPassword($this->passwordEncoder->encodePassword(
                $user,
                'j4s0n3'
            ))
        ;

        $this->em->persist($user);
        $this->em->flush();

        return new Response(sprintf('Successfully added user %s', $user->getUsername()));
    }
}

<?php

namespace App\Form;

use App\Form\Model\ChangePasswordFormModel;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\PasswordType;
use Symfony\Component\Form\Extension\Core\Type\RepeatedType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class ChangePasswordFormType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('currentPassword', PasswordType::class, [
                'label' => 'Current Password',
                'attr' => [
                    'class' => 'form-input'
                ]
            ])
            ->add('newPassword', RepeatedType::class, [
                'type' => PasswordType::class,
                'first_options' => ['label' => 'New Password',
                                    'attr' => [
                                        'class' => 'form-input',
                                        'placeholder' => 'New Password'
                                    ]      
            ], 'second_options' => ['label' => 'Confirm New Password',
                                    'attr' => [
                                        'class' => 'form-input',
                                        'placeholder' => 'Confirm New Password'
                                    ]
            ], 'invalid_message' => 'Your new passwords did not match.'
        ]);
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => ChangePasswordFormModel::class
        ]);
    }
}

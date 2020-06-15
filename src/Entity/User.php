<?php

namespace App\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Bridge\Doctrine\Validator\Constraints\UniqueEntity;
use Symfony\Component\Security\Core\User\UserInterface;

/**
 * @ORM\Entity(repositoryClass="App\Repository\UserRepository")
 * @UniqueEntity(
 *  fields={"username"},
 *  message="That username is already registered."
 * )
 */
class User implements UserInterface
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=180, unique=true)
     */
    private $username;

    /**
     * @ORM\Column(type="json")
     */
    private $roles = [];

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $password;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\Score", mappedBy="user")
     */
    private $scores;

    /**
     * @ORM\Column(type="integer")
     */
    private $highestLevel = 0;

    /**
     * @ORM\Column(type="integer")
     */
    private $highestScore = 0;

    /**
     * @ORM\Column(type="integer")
     */
    private $timesRan = 0;

    /**
     * @ORM\Column(type="integer")
     */
    private $enemiesSlain = 0;

    /**
     * @ORM\Column(type="integer")
     */
    private $potionsUsed = 0;

    /**
     * @ORM\Column(type="integer")
     */
    private $attacksDealt = 0;

    /**
     * @ORM\Column(type="integer")
     */
    private $criticalsDealt = 0;

    /**
     * @ORM\Column(type="integer")
     */
    private $attacksTaken = 0;

    /**
     * @ORM\Column(type="integer")
     */
    private $attacksDodged = 0;

    /**
     * @ORM\Column(type="integer")
     */
    private $currencySpent = 0;

    /**
     * @ORM\Column(type="integer")
     */
    private $damageDealt = 0;

    /**
     * @ORM\Column(type="integer")
     */
    private $damageTaken = 0;

    /**
     * @ORM\Column(type="integer")
     */
    private $healthReplenished = 0;

    /**
     * @ORM\Column(type="integer")
     */
    private $highestDamageDealt = 0;

    /**
     * @ORM\Column(type="integer")
     */
    private $highestDamageTaken = 0;
  
    /*
     * @ORM\OneToMany(targetEntity="App\Entity\Post", mappedBy="author")
     */
    private $posts;

    public function __construct()
    {
        $this->scores = new ArrayCollection();
        $this->posts = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    /**
     * A visual identifier that represents this user.
     *
     * @see UserInterface
     */
    public function getUsername(): string
    {
        return (string) $this->username;
    }

    public function setUsername(string $username): self
    {
        $this->username = $username;

        return $this;
    }

    /**
     * @see UserInterface
     */
    public function getRoles(): array
    {
        $roles = $this->roles;
        // guarantee every user at least has ROLE_USER
        $roles[] = 'ROLE_USER';

        return array_unique($roles);
    }

    public function setRoles(array $roles): self
    {
        $this->roles = $roles;

        return $this;
    }

    /**
     * @see UserInterface
     */
    public function getPassword()
    {
        return $this->password;
    }

    /**
     * @see UserInterface
     */
    public function getSalt()
    {
        // not needed due to our encryption settings
    }

    /**
     * @see UserInterface
     */
    public function eraseCredentials()
    {
        // If you store any temporary, sensitive data on the user, clear it here
        // $this->plainPassword = null;
    }

    public function setPassword(string $password): self
    {
        $this->password = $password;

        return $this;
    }

    /**
     * @return Collection|Score[]
     */
    public function getScores(): Collection
    {
        return $this->scores;
    }

    public function addScore(Score $score): self
    {
        if (!$this->scores->contains($score)) {
            $this->scores[] = $score;
            $score->setUser($this);
        }

        return $this;
    }

    public function removeScore(Score $score): self
    {
        if ($this->scores->contains($score)) {
            $this->scores->removeElement($score);
            // set the owning side to null (unless already changed)
            if ($score->getUser() === $this) {
                $score->setUser(null);
            }
        }

        return $this;
    }

    public function getHighestLevel(): ?int
    {
        return $this->highestLevel;
    }

    public function setHighestLevel(int $highestLevel): self
    {
        $this->highestLevel = $highestLevel;

        return $this;
    }

    public function getHighestScore(): ?int
    {
        return $this->highestScore;
    }

    public function setHighestScore(int $highestScore): self
    {
        $this->highestScore = $highestScore;

        return $this;
    }

    public function getTimesRan(): ?int
    {
        return $this->timesRan;
    }

    public function setTimesRan(int $timesRan): self
    {
        $this->timesRan = $timesRan;
    }
  
  public function getEnemiesSlain(): ?int
    {
        return $this->enemiesSlain;
    }

    public function setEnemiesSlain(int $enemiesSlain): self
    {
        $this->enemiesSlain = $enemiesSlain;

        return $this;
    }

    public function getPotionsUsed(): ?int
    {
        return $this->potionsUsed;
    }

    public function setPotionsUsed(int $potionsUsed): self
    {
        $this->potionsUsed = $potionsUsed;

        return $this;
    }

    public function getAttacksDealt(): ?int
    {
        return $this->attacksDealt;
    }

    public function setAttacksDealt(int $attacksDealt): self
    {
        $this->attacksDealt = $attacksDealt;

        return $this;
    }

    public function getCriticalsDealt(): ?int
    {
        return $this->criticalsDealt;
    }

    public function setCriticalsDealt(int $criticalsDealt): self
    {
        $this->criticalsDealt = $criticalsDealt;

        return $this;
    }

    public function getAttacksTaken(): ?int
    {
        return $this->attacksTaken;
    }

    public function setAttacksTaken(int $attacksTaken): self
    {
        $this->attacksTaken = $attacksTaken;

        return $this;
    }

    public function getAttacksDodged(): ?int
    {
        return $this->attacksDodged;
    }

    public function setAttacksDodged(int $attacksDodged): self
    {
        $this->attacksDodged = $attacksDodged;

        return $this;
    }

    public function getCurrencySpent(): ?int
    {
        return $this->currencySpent;
    }

    public function setCurrencySpent(int $currencySpent): self
    {
        $this->currencySpent = $currencySpent;

        return $this;
    }

    public function getDamageDealt(): ?int
    {
        return $this->damageDealt;
    }

    public function setDamageDealt(int $damageDealt): self
    {
        $this->damageDealt = $damageDealt;

        return $this;
    }

    public function getDamageTaken(): ?int
    {
        return $this->damageTaken;
    }

    public function setDamageTaken(int $damageTaken): self
    {
        $this->damageTaken = $damageTaken;

        return $this;
    }

    public function getHealthReplenished(): ?int
    {
        return $this->healthReplenished;
    }

    public function setHealthReplenished(int $healthReplenished): self
    {
        $this->healthReplenished = $healthReplenished;

        return $this;
    }

    public function getHighestDamageDealt(): ?int
    {
        return $this->highestDamageDealt;
    }

    public function setHighestDamageDealt(int $highestDamageDealt): self
    {
        $this->highestDamageDealt = $highestDamageDealt;

        return $this;
    }

    public function getHighestDamageTaken(): ?int
    {
        return $this->highestDamageTaken;
    }

    public function setHighestDamageTaken(int $highestDamageTaken): self
    {
        $this->highestDamageTaken = $highestDamageTaken;
      
        return $this;
    }
  
    /**
     * @return Collection|Post[]
     */
    public function getPosts(): Collection
    {
        return $this->posts;
    }

    public function addPost(Post $post): self
    {
        if (!$this->posts->contains($post)) {
            $this->posts[] = $post;
            $post->setAuthor($this);
        }

        return $this;
    }

    public function removePost(Post $post): self
    {
        if ($this->posts->contains($post)) {
            $this->posts->removeElement($post);
            // set the owning side to null (unless already changed)
            if ($post->getAuthor() === $this) {
                $post->setAuthor(null);
            }
        }

        return $this;
    }
}
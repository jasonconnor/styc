<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="App\Repository\ScoreRepository")
 */
class Score
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="integer")
     */
    private $score;

    /**
     * @ORM\Column(type="integer")
     */
    private $level;

    /**
     * @ORM\Column(type="datetime")
     */
    private $date;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\User", inversedBy="scores")
     * @ORM\JoinColumn(nullable=false)
     */
    private $user;

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

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getScore(): ?int
    {
        return $this->score;
    }

    public function setScore(int $score): self
    {
        $this->score = $score;

        return $this;
    }

    public function getLevel(): ?int
    {
        return $this->level;
    }

    public function setLevel(int $level): self
    {
        $this->level = $level;

        return $this;
    }

    public function getDate(): ?\DateTimeInterface
    {
        return $this->date;
    }

    public function setDate(\DateTimeInterface $date): self
    {
        $this->date = $date;

        return $this;
    }

    public function getUser(): ?User
    {
        return $this->user;
    }

    public function setUser(?User $user): self
    {
        $this->user = $user;

        return $this;
    }

    public function getTimesRan(): ?int
    {
        return $this->timesRan;
    }

    public function setTimesRan(?int $timesRan): self
    {
        $this->timesRan = $timesRan;

        return $this;
    }

    public function getEnemiesSlain(): ?int
    {
        return $this->enemiesSlain;
    }

    public function setEnemiesSlain(?int $enemiesSlain): self
    {
        $this->enemiesSlain = $enemiesSlain;

        return $this;
    }

    public function getPotionsUsed(): ?int
    {
        return $this->potionsUsed;
    }

    public function setPotionsUsed(?int $potionsUsed): self
    {
        $this->potionsUsed = $potionsUsed;

        return $this;
    }

    public function getAttacksDealt(): ?int
    {
        return $this->attacksDealt;
    }

    public function setAttacksDealt(?int $attacksDealt): self
    {
        $this->attacksDealt = $attacksDealt;

        return $this;
    }

    public function getCriticalsDealt(): ?int
    {
        return $this->criticalsDealt;
    }

    public function setCriticalsDealt(?int $criticalsDealt): self
    {
        $this->criticalsDealt = $criticalsDealt;

        return $this;
    }

    public function getAttacksTaken(): ?int
    {
        return $this->attacksTaken;
    }

    public function setAttacksTaken(?int $attacksTaken): self
    {
        $this->attacksTaken = $attacksTaken;

        return $this;
    }

    public function getAttacksDodged(): ?int
    {
        return $this->attacksDodged;
    }

    public function setAttacksDodged(?int $attacksDodged): self
    {
        $this->attacksDodged = $attacksDodged;

        return $this;
    }

    public function getCurrencySpent(): ?int
    {
        return $this->currencySpent;
    }

    public function setCurrencySpent(?int $currencySpent): self
    {
        $this->currencySpent = $currencySpent;

        return $this;
    }

    public function getDamageDealt(): ?int
    {
        return $this->damageDealt;
    }

    public function setDamageDealt(?int $damageDealt): self
    {
        $this->damageDealt = $damageDealt;

        return $this;
    }

    public function getDamageTaken(): ?int
    {
        return $this->damageTaken;
    }

    public function setDamageTaken(?int $damageTaken): self
    {
        $this->damageTaken = $damageTaken;

        return $this;
    }

    public function getHealthReplenished(): ?int
    {
        return $this->healthReplenished;
    }

    public function setHealthReplenished(?int $healthReplenished): self
    {
        $this->healthReplenished = $healthReplenished;

        return $this;
    }

    public function getHighestDamageDealt(): ?int
    {
        return $this->highestDamageDealt;
    }

    public function setHighestDamageDealt(?int $highestDamageDealt): self
    {
        $this->highestDamageDealt = $highestDamageDealt;

        return $this;
    }

    public function getHighestDamageTaken(): ?int
    {
        return $this->highestDamageTaken;
    }

    public function setHighestDamageTaken(?int $highestDamageTaken): self
    {
        $this->highestDamageTaken = $highestDamageTaken;

        return $this;
    }
}
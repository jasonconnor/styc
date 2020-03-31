<?php

namespace App\Repository;

use App\Entity\Score;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Common\Persistence\ManagerRegistry;

/**
 * @method Score|null find($id, $lockMode = null, $lockVersion = null)
 * @method Score|null findOneBy(array $criteria, array $orderBy = null)
 * @method Score[]    findAll()
 * @method Score[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class ScoreRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Score::class);
    }

    public function findTop25Scores()
    {
        return $this->createQueryBuilder('s')
            ->orderBy('s.score', 'DESC')
            ->setMaxResults(25)
            ->getQuery()
            ->getResult()
        ;
    }

    public function findTopScoreByUser($username)
    {
        return $this->createQueryBuilder('s')
            ->andWhere('s = :username')
            ->setParameter('username', $username)
            ->orderBy('s.score', 'DESC')
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }

    // /**
    //  * @return Score[] Returns an array of Score objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('s')
            ->andWhere('s.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('s.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?Score
    {
        return $this->createQueryBuilder('s')
            ->andWhere('s.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}

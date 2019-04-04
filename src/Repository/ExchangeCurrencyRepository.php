<?php
declare(strict_types=1);

namespace App\Repository;

use App\Entity\ExchangeCurrency;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Symfony\Bridge\Doctrine\RegistryInterface;
use Symfony\Component\Validator\Constraints\DateTime;

/**
 * Class ExchangeCurrencyRepository
 * @package App\Repository
 */
class ExchangeCurrencyRepository extends ServiceEntityRepository
{
    public function __construct(RegistryInterface $registry)
    {
        parent::__construct($registry, ExchangeCurrency::class);
    }

    /**
     * Get latest (by date) ExchangeCurrency entity from db
     *
     * @return mixed
     */
    public function findOneByLatest()
    {
        return $this->createQueryBuilder('e')
            ->addOrderBy('e.date', 'DESC')
            ->addOrderBy('e.id', 'DESC')
            ->setMaxResults(1)
            ->getQuery()
            ->getOneOrNullResult();
    }

    /**
     * @param $data
     * @return ExchangeCurrency
     */
    public function store($data)
    {
        $exchange_entity = new ExchangeCurrency();
        $exchange_entity->setBase($data->base);
        $exchange_entity->setRates(json_encode($data->rates));
        $exchange_entity->setDate($data->date);

        $e_manager = $this->getEntityManager();
        $e_manager->persist($exchange_entity);
        $e_manager->flush();

        return $exchange_entity;
    }
}

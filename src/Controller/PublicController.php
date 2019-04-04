<?php

namespace App\Controller;

use App\Entity\ExchangeCurrency;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class PublicController extends AbstractController
{

    /**
     * @return Response
     */
    public function home()
    {

        $repository = $this->getDoctrine()
            ->getRepository(ExchangeCurrency::class);
        $query = $repository->findOneByLatest();

        return $this->render('public/home.html.twig',
            [
                'last_date_updated' => $query->getDate(),
                'rates' => json_decode($query->getRates())->EUR,
            ]);

    }

}
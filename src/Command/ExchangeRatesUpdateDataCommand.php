<?php

// src/Command/CreateUserCommand.php
namespace App\Command;

use App\Entity\ExchangeCurrency;
use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Helper\Table;
use Symfony\Component\Console\Output\OutputInterface;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\Console\Helper\ProgressBar;

class ExchangeRatesUpdateDataCommand extends Command
{
    protected static $defaultName = 'e-rates:update';

    /**
     * @var EntityManagerInterface
     */
    private $entityManager;

    public function __construct(EntityManagerInterface $entityManager)
    {
        $this->entityManager = $entityManager;

        parent::__construct();
    }

    protected function configure()
    {
        $this
            ->setDescription('Get latest data from ExchangeRates API and store to local database')
            ->setHelp('This command allows you to make an API call to ExchangeRates and get the latest data about currency values.');
    }

    protected function execute(InputInterface $input, OutputInterface $output)
    {

        $output->writeln(['', 'Requesting api.exchangeratesapi.io...', '']);
        $progressBar = new ProgressBar($output, 1);
        $progressBar->start();

        $response = $this->executeApiCall();

        $progressBar->finish();
        $output->writeln(['', '']);

        if ($response != null) {
            $table = new Table($output);
            $table
                ->setHeaderTitle('ExchangeRatesApi Data')
                ->setHeaders(['Base', 'Rates', 'Date'])
                ->setRows([
                    [$response->getBase(), $response->getRates(), $response->getDate()],
                ]);
            $table->render();

            $output->writeln('Successfully stored in database.');
        } else $output->writeln('Smth went wrong.');
    }

    /**
     * @param string $base
     * @param array $symbols
     * @return ExchangeCurrency entity
     */
    private function executeApiCall($base = "USD", $symbols = ["EUR"])
    {

        /** @var ExchangeCurrency $ec_repository */
        $ec_repository = $this->entityManager->getRepository('App\Entity\ExchangeCurrency');

        $curl = curl_init("https://api.exchangeratesapi.io/latest?symbols=" . implode(",", $symbols) . "&base=". $base);
        curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($curl, CURLOPT_HEADER, false);
        $response = json_decode(curl_exec($curl));
        curl_close($curl);

        if(isset($response->error)) {
            throw new \Exception($response->error);
        } else return $ec_repository->store($response);

//        return $response->error ? null : $ec_repository->store($response);
    }

}
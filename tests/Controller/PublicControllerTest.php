<?php


namespace App\Tests\Controller;

use Symfony\Bundle\FrameworkBundle\Test\WebTestCase;
use Symfony\Component\HttpFoundation\Response;


class PublicControllerTest extends WebTestCase
{

    /**
     *
     * @dataProvider getPublicUrls
     */
    public function testPublicUrls(string $url)
    {
        $client = static::createClient();
        $client->request('GET', $url);

        $this->assertSame(
            Response::HTTP_OK,
            $client->getResponse()->getStatusCode(),
            sprintf('The %s public URL loads correctly.', $url)
        );
    }

    public function getPublicUrls()
    {
        yield ['/'];
    }
}
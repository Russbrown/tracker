<?php
require_once('TwitterAPIExchange.php');

$trackVal = urlencode($_REQUEST['val']);

require_once('settings.php');

$url = 'https://api.twitter.com/1.1/search/tweets.json';
$getfield = '?q=' . $trackVal . '&result_type=popular&lang=en';
$requestMethod = 'GET';
$twitter = new TwitterAPIExchange($settings);
echo $twitter->setGetfield($getfield)
             ->buildOauth($url, $requestMethod)
             ->performRequest();  
?>


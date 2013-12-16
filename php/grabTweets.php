<?php
require_once('TwitterAPIExchange.php');

$trackVal = urlencode($_REQUEST['val']);

require_once('settings.php');

$url = 'https://api.twitter.com/1.1/search/tweets.json';
$getfield = '?q=' . $trackVal . '%20filter:links&result_type=mixed&lang=en&count=4';
$requestMethod = 'GET';
$twitter = new TwitterAPIExchange($settings);
echo $twitter->setGetfield($getfield)
             ->buildOauth($url, $requestMethod)
             ->performRequest();  
?>


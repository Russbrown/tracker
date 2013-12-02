<?php
require_once('TwitterAPIExchange.php');

$trackVal = urlencode($_REQUEST['val']);


/** Set access tokens here - see: https://dev.twitter.com/apps/ **/
$settings = array(
    'oauth_access_token' => "108106603-i2u0I7uBLGeoEteccCkTlVHVfhLHMhNqnWLw0QFs",
    'oauth_access_token_secret' => "8uSAdtcI99uon1ZjafxTLlmDfJ05Sa6Ml8PFGs6dmgpXk",
    'consumer_key' => "DEo6KAutLcMqbl3B9lqu6Q",
    'consumer_secret' => "udFZhf6BaLdOwvFazFM5pa86ekiaMOX2WaBzDCCQNc"
);


$url = 'https://api.twitter.com/1.1/search/tweets.json';
$getfield = '?q=' . $trackVal . '&result_type=popular&lang=en';
$requestMethod = 'GET';
$twitter = new TwitterAPIExchange($settings);
echo $twitter->setGetfield($getfield)
             ->buildOauth($url, $requestMethod)
             ->performRequest();  
?>
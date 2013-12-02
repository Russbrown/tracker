<?php
    $trackVal = urlencode($_REQUEST['val']);

    $url = "https://ajax.googleapis.com/ajax/services/search/news?" .
           "v=1.0&q=" . $trackVal . "&userip=82.71.236.173";

    // sendRequest
    // note how referer is set manually
    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, $url);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
    curl_setopt($ch, CURLOPT_REFERER, 'http://www.northerndiv.com');
    $body = curl_exec($ch);
    curl_close($ch);

    // now, process the JSON string
    echo($body);
    // now have some fun with the results...

    // var_dump($json);
    // var_dump($json->responseData->results[0]);

?>
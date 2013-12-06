<?php
session_start();
// var_dump($_SESSION);
?>

<!DOCTYPE html>
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js"> <!--<![endif]-->
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title></title>
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <!-- Place favicon.ico and apple-touch-icon.png in the root directory -->

        <link rel="stylesheet" href="css/normalize.css">
        <link rel="stylesheet" href="css/main.css">
        <script src="js/vendor/modernizr-2.6.2.min.js"></script>

        </head>
    <body>
        <!--[if lt IE 7]>
            <p class="browsehappy">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.</p>
        <![endif]-->


        <!-- Add your site or application content here -->
        <div class="header">
        <h1>Track your News 
            <?php 
            if (isset($_SESSION['access_token'])) {
                echo (', ' . $_SESSION['access_token']['screen_name']);
            } else {
                echo('bitch');
            }
            ?>
        </h1>
            <div class="login">
                <a href="/php/twitter_login.php">Login</a>
            </div>        
        </div>


        <div class="tracker-wrapper">
            <form>
                <input type="text" placeholder="track..." class="js-trackVal input"/>
                <input type="submit" class="js-trackStories submit" value="track"/>
            </form>
            <div id="tracker1" class="tracker">Story Tracker 1</div>
            <div class="timestamp"></div>
        </div>

        <div class="tracker-wrapper">
            <form>
                <input type="text" placeholder="track..." class="js-trackVal input"/>
                <input type="submit" class="js-trackStories submit" value="track"/>
            </form>
            <div id="tracker2" class="tracker">Story Tracker 2</div>
        </div>

        <div class="tracker-wrapper">
            <form>
                <input type="text" placeholder="track..." class="js-trackVal input"/>
                <input type="submit" class="js-trackStories submit" value="track"/>
            </form>
            <div id="tracker3" class="tracker">Story Tracker 3</div>
        </div>

        <div class="tracker-wrapper">
            <form>
                <input type="text" placeholder="track..." class="js-trackVal input"/>
                <input type="submit" class="js-trackTweets submit" value="track"/>
            </form>
            <div id="tracker4" class="tracker">Tweet Tracker 4</div>
        </div>

        <div class="tracker-wrapper">
            <form>
                <input type="text" placeholder="track..." class="js-trackVal input"/>
                <input type="submit" class="js-trackTweets submit" value="track"/>
            </form>
            <div id="tracker5" class="tracker">Tweet Tracker 5</div>
        </div>

        <div class="tracker-wrapper">
            <form>
                <input type="text" placeholder="track..." class="js-trackVal input"/>
                <input type="submit" class="js-trackTweets submit" value="track"/>
            </form>
            <div id="tracker6" class="tracker">Tweet Tracker 6</div>
        </div>

        <script src="//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
        <script>window.jQuery || document.write('<script src="js/vendor/jquery-1.10.2.min.js"><\/script>')</script>
        <script src="js/plugins.js"></script>
        <script src="js/main.js"></script>

        <!-- Google Analytics: change UA-XXXXX-X to be your site's ID. -->
        <script>
            (function(b,o,i,l,e,r){b.GoogleAnalyticsObject=l;b[l]||(b[l]=
            function(){(b[l].q=b[l].q||[]).push(arguments)});b[l].l=+new Date;
            e=o.createElement(i);r=o.getElementsByTagName(i)[0];
            e.src='//www.google-analytics.com/analytics.js';
            r.parentNode.insertBefore(e,r)}(window,document,'script','ga'));
            ga('create','UA-XXXXX-X');ga('send','pageview');
        </script>
    </body>
</html>

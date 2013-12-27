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
        <title>Trakrific - Track the storys you're interested in</title>
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <!-- Place favicon.ico and apple-touch-icon.png in the root directory -->

        <link rel="stylesheet" href="css/normalize.css">
        <link rel="stylesheet" href="css/main.css">
        <link rel="stylesheet" href="css/introjs.min.css">
        <link href='http://fonts.googleapis.com/css?family=Cutive' rel='stylesheet' type='text/css'>
        <link href="//netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.css" rel="stylesheet">


        <script src="js/vendor/modernizr-2.6.2.min.js"></script>

        </head>
    <body>
        <!--[if lt IE 7]>
            <p class="browsehappy">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.</p>
        <![endif]-->


        <!-- Add your site or application content here -->
        <div class="header">
        <h1>Trakrific</h1>
            <div class="tab login">
                <a href="/php/twitter_login.php">Log in</a>
            </div>  
            <div class="tab bug">
                <a href="https://github.com/Russbrown/tracker" target="_blank">Feature?</a>
            </div>      
        </div>


        <div class="tracker-wrapper" >
            <form data-position="bottom" data-intro="Ok let's get started, first why not track your football team..." data-step="1">
                <i class="fa fa-list-alt fa-lg"></i>                
                <input type="text" placeholder="Enter Story Keywords..." class="js-trackVal input"/>
                <input type="submit" class="js-trackStories submit" value="Track"/>
            </form>
            <div id="tracker1" class="tracker stories"><!-- Story Tracker 1 --></div>
            <div class="timestamp"></div>
        </div>

        <div class="tracker-wrapper" >
            <form data-position="bottom" data-intro="..then your city..." data-step="2">
                <i class="fa fa-list-alt fa-lg"></i>
                <input type="text" placeholder="Enter Story Keywords..." class="js-trackVal input"/>
                <input type="submit" class="js-trackStories submit" value="Track"/>
            </form>
            <div id="tracker2" class="tracker stories"><!-- Story Tracker 2 --></div>
            <div class="timestamp"></div>
        </div>

        <div class="tracker-wrapper">
            <form data-position="bottom" data-intro="...then something you're interested in. Like err...Yoga?" data-step="3">
                <i class="fa fa-list-alt fa-lg"></i>
                <input type="text" placeholder="Enter Story Keywords..." class="js-trackVal input"/>
                <input type="submit" class="js-trackStories submit" value="Track"/>
            </form>
            <div id="tracker3" class="tracker stories"><!-- Story Tracker 3 --></div>
            <div class="timestamp"></div>
        </div>

        <div class="tracker-wrapper">
            <form>
                <i class="fa fa-twitter-square fa-lg"></i>
                <input type="text" placeholder="Enter Story Keywords..." class="js-trackVal input"/>
                <input type="submit" class="js-trackTweets submit" value="Track"/>
            </form>
            <div id="tracker4" class="tracker tweets"><!-- Tweet Tracker 4 --></div>
            <div class="timestamp"></div>
        </div>

        <div class="tracker-wrapper">
            <form>
                <i class="fa fa-twitter-square fa-lg"></i>
                <input type="text" placeholder="Enter Story Keywords..." class="js-trackVal input"/>
                <input type="submit" class="js-trackTweets submit" value="Track"/>
            </form>
            <div id="tracker5" class="tracker tweets"><!-- Tweet Tracker 5 --></div>
            <div class="timestamp"></div>
        </div>

        <div class="tracker-wrapper">
            <form>
                <i class="fa fa-twitter-square fa-lg"></i>
                <input type="text" placeholder="Enter Story Keywords..." class="js-trackVal input"/>
                <input type="submit" class="js-trackTweets submit" value="Track"/>
            </form>
            <div id="tracker6" class="tracker tweets"><!-- Tweet Tracker 6 --></div>
            <div class="timestamp"></div>
        </div>

        <script src="//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
        <script>window.jQuery || document.write('<script src="js/vendor/jquery-1.10.2.min.js"><\/script>')</script>
        <script src="js/plugins.js"></script>
        <script src="js/main.js"></script>
        <script src="js/intro.min.js"></script>

        <!-- Google Analytics: change UA-XXXXX-X to be your site's ID. -->
        <script type="text/javascript">
          var _gaq = _gaq || [];
          _gaq.push(['_setAccount', 'UA-46491879-1']);
          _gaq.push(['_trackPageview']);

          (function() {
            var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
            ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
            var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
          })();
        </script>
    </body>
</html>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
  "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">
  <head>
    <title>Trakrific - log in with twitter</title>
    <meta http-equiv="Content-Type" content="text/html;charset=utf-8" />
    <link rel="stylesheet" href="../css/normalize.css">
    <link rel="stylesheet" href="../css/main.css">
    <link rel="stylesheet" href="../css/introjs.min.css">
    <link href='http://fonts.googleapis.com/css?family=Cutive' rel='stylesheet' type='text/css'>
    <link href="//netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.css" rel="stylesheet">
  </head>
  <body>
    <div class="login-page">
      <h1>Log in with Twitter</h1>

      <p>Having problems? Try <a href='./clearsessions.php'>clearing your session</a>.</p>

      <hr />
      <?php if (isset($menu)) { ?>
        <?php echo $menu; ?>
      <?php } ?>
      <?php if (isset($status_text)) { ?>
      <?php echo '<h3>'.$status_text.'</h3>'; ?>
      <?php } ?>
      <p>
        <div class="btn">

          <?php 
            echo('<i class="fa fa-twitter-square fa-3x"></i>');
            print_r($content); 
          ?>
        </div>
      </p>
    </div>

  </body>
</html>

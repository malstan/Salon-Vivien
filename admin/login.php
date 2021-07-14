<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="robots" content="noindex, nofollow">

    <title>Login - Salón Vivien</title>

    <link rel="icon" type="image/png" href="../public/figures/logo.ico">

    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css" rel="stylesheet"
          integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x" crossorigin="anonymous">
    <link href="admin-css/login-style.css" media="screen" rel="stylesheet">
</head>
<body>
<?php
    include('admin-php/handle-login.php');
?>
<!-- Main Content -->
<div class="container-fluid">
    <div class="row main-content text-center">
        <div class="col-12 col-md-6 pt-3 text-center company__info">
            <span class="company__logo"><img src="../public/figures/logo_vivien.png" alt="image"></span>
        </div>
        <div class="col-12 col-md-6 login_form ">
            <div class="container-fluid">
                <div class="row">
                    <h2 class="mt-5 text-left">Prihlásenie do administračného prostredia</h2>
                </div>
                <div class="row">
                    <form class="form-group" action="" method="post">
                        <div class="row">
                            <input class="form__input" id="username" name="username" placeholder="Meno" type="text">
                        </div>
                        <div class="row">
                            <input class="form__input" id="password" name="password" placeholder="Heslo"
                                   type="password">
                        </div>
                        <div class="row justify-content-center">
                            <input class="btn" type="submit" value="Prihlásiť sa">
                        </div>
                    </form>
                        <?php
                            if (isset($_SESSION['error-login']) && $_SESSION['error-login']) {
                        ?>
                        <div class="alert alert-danger">
                            <strong>Pozor!</strong> Skontrolujte meno alebo heslo.
                        </div>
                        <?php
                            }
                        ?>
                </div>
            </div>
        </div>
    </div>
</div>
</body>
</html>
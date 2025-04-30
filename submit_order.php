<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST['name']);
    $address = htmlspecialchars($_POST['address']);
    $phone = htmlspecialchars($_POST['phone']);

    echo "
    <!DOCTYPE html>
    <html lang='ru'>
    <head>
        <meta charset='UTF-8'>
        <meta name='viewport' content='width=device-width, initial-scale=1.0'>
        <title>Спасибо за заказ</title>
        <script>
            // Через 3 секунды перенаправляем на главную страницу
            setTimeout(function() {
                window.location.href = 'index.html';
            }, 3000);
        </script>
        <style>
            body {
                font-family: Arial, sans-serif;
                text-align: center;
                margin-top: 50px;
            }
            .message {
                font-size: 20px;
                color: darkcyan;
            }
        </style>
    </head>
    <body>
        <div class='message'>
            Спасибо, $name! Ваш заказ будет доставлен по адресу: $address. <br>
            Мы свяжемся с вами по телефону: $phone.
        </div>
        <p>Вы будете перенаправлены на главную страницу через 3 секунды...</p>
    </body>
    </html>";
}
?>

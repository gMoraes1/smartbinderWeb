<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Recupera o e-mail do corpo da requisição
    $email = $_POST['email'];
    $subject = "Confirmação de Envio";
    $message = "Seu e-mail foi enviado com sucesso!";
    $headers = "gustavo.correiademoraes2006@gmail.com";

    if (mail($email, $subject, $message, $headers)) {
        http_response_code(200);
        echo "E-mail enviado com sucesso!";
    } else {
        http_response_code(500);
        echo "Erro ao enviar o e-mail.";
    }
} else {
    http_response_code(405);
    echo "Método não permitido.";
}
?>

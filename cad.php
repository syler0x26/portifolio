<?php 
    $nome = addslashes($_POST['nome']);
    $email = addslashes($_POST['email']);
    $tel = addslashes($_POST['telefone']);

    $des = "salcides741@gmail.com";
    $assunto = "Contato";
    $corpo = "Nome: " . $nome . "\n" . "E-mail: " . $email . "\n" . "Telefone: " . $tel;
    $cabeca = "From: Salcides741@gmail.com" . "\n" . "Reply-to: " . $email . "\n" . "X=Mailer:PHP/" . phpversion();
    if(mail($des,$assunto,$corpo,$cabeca)){
        echo ("E-mail enviado com secesso!!");
    }else{
        echo("houve um erro ao enviar o E-mail!!");
    }
?>
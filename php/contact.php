<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>Contact</title>

	<link rel="stylesheet" type="text/css" href="../css/header.css">
	<link rel="stylesheet" type="text/css" href="../css/contact.css">
</head>
<body>
	<?php 
		include("repetition/header.php");
	?>
	<main>
		<?php
			if(isset($_POST['email']) && isset($_POST['nom']) && isset($_POST['prenom']) && isset($_POST['objet']) && isset($_POST['text'])) {
				$to      = 'antoine.adjamidis@gmail.com';
			    $subject = $_POST['objet'];
			    $message = $_POST['text'];
			    $headers = 'De: ' . $_POST['email'] . "\r\n";
			    mail($to, $subject, $message, $headers);
			}

		?>


		<form action="" method="post">
    		<div class="dl">
    			<div class="dlg">
    				<input type="email" id="email" placeholder="Entrer votre adresse email" name="email" required>
    			</div>
	    		<div class="dld">
	    			<input type="phone" id="phone" placeholder="Entrez votre téléphone" name="phone" required>
	    		</div>
	    	</div>
    		<div class="dl">
    			<div class="dlg">
    				<input type="text" id="nom"  placeholder="Entrer votre nom" name="nom" required>
    			</div>
	    		<div class="dld">
	    			<input type="text" id="prenom"  placeholder="Entrer votre prenom" name="prenom" required>
	    		</div>
	    	</div>
	    	<div class="ql">
	    		<textarea  id="text" placeholder="Message"></textarea>
	    	</div>
	    	<div class="envoyer">
	    		<input type="submit" name="Envoyer" id="envoyer">
	    	</div>
		</form>
	</main>
</body>
</html>
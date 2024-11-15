<?php

error_reporting(E_ALL);
ini_set('display_errors', 1);

// PHPMailer Klassen importieren
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

// Funktion zum Einlesen der .env-Datei und Laden der Umgebungsvariablen
function loadEnv($path)
{
    if (!file_exists($path)) {
        throw new Exception(".env file not found");
    }

    $lines = file($path, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);
    foreach ($lines as $line) {
        if (strpos(trim($line), '#') === 0) {
            continue; // Überspringt Kommentare
        }
        list($key, $value) = explode('=', $line, 2);
        $_ENV[trim($key)] = trim($value); // Variablen in $_ENV speichern
    }
}

// .env-Datei laden
loadEnv(__DIR__ . '/.env');

// Lesen der JSON-Daten aus der Anfrage
$data = json_decode(file_get_contents('php://input'), true); // true gibt ein assoziatives Array zurück

if ($data === null) {
    echo 'Fehler: Keine gültigen Daten empfangen.';
    exit;
}

// Überprüfe, ob alle notwendigen Felder vorhanden sind
if (isset($data['email'], $data['name'], $data['message'])) {
    $userEmail = $data['email'];
    $userName = $data['name'];
    $userMessage = $data['message'];

    // Weiter mit der E-Mail-Versendung...
    require 'PHPMailer/src/Exception.php';
    require 'PHPMailer/src/PHPMailer.php';
    require 'PHPMailer/src/SMTP.php';

    $mail = new PHPMailer(true);

    try {
        $mail->isSMTP();
        $mail->Host = 'smtp.web.de';
        $mail->SMTPAuth = true;
        $mail->Username = $_ENV['SMTP_USER'];
        $mail->Password = $_ENV['SMTP_PASS'];
        $mail->SMTPSecure = 'tls';
        $mail->Port = 587;

        $mail->setFrom('JosyKrueger2@web.de', 'Josy Krüger');
        $mail->addAddress('JosyKrueger2@web.de');
        $mail->addReplyTo($userEmail, $userName);

        $mail->CharSet = 'UTF-8';
        $mail->isHTML(true);
        $mail->Subject = 'Neue Kontaktanfrage von ' . $userName;
        $mail->Body = "<p>Neue Nachricht von: $userName</p><p>Nachricht:</p><p>$userMessage</p>";

        $mail->send();
        echo json_encode(['message' => 'Nachricht wurde gesendet']);
    } catch (Exception $e) {
        echo json_encode(['error' => 'Nachricht konnte nicht gesendet werden.', 'details' => $mail->ErrorInfo]);
    }
} else {
    echo json_encode(['error' => 'Fehler: Alle Felder müssen ausgefüllt sein.']);
}

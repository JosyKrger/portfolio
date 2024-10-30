<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

// Erlaube CORS nur für deine Domain
header("Access-Control-Allow-Origin: *"); // Ersetze mit der Domain, die du verwenden möchtest
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header("Access-Control-Allow-Credentials: true");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    // Hier kannst du andere Preflight-Anfragen behandeln
    http_response_code(200);
    exit;
}

switch ($_SERVER['REQUEST_METHOD']) {
    case("POST"):
        $json = file_get_contents('php://input');
        $params = json_decode($json);

        if ($params === null) {
            echo json_encode(['status' => 'error', 'message' => 'Invalid JSON']);
            exit;
        }

        $email = $params->email ?? '';
        $name = $params->name ?? '';
        $message = $params->message ?? '';

        // Validierung der Eingabewerte
        if (empty($email) || empty($name) || empty($message)) {
            echo json_encode(['status' => 'error', 'message' => 'Missing fields']);
            exit;
        }

        $recipient = 'JosyKrueger2@web.de';
        $subject = "Contact From <$email>";
        $message = "From: " . $name . "<br>" . $message;

        $headers = array();
        $headers[] = 'MIME-Version: 1.0';
        $headers[] = 'Content-type: text/html; charset=utf-8';
        $headers[] = "From: noreply@mywebsite.com";

        if (mail($recipient, $subject, $message, implode("\r\n", $headers))) {
            echo json_encode(['status' => 'success', 'message' => 'Email sent']);
        } else {
            echo json_encode(['status' => 'error', 'message' => 'Email not sent']);
        }
        break;
    default:
        header("Allow: POST", true, 405);
        exit;
}
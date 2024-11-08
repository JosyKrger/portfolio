<?php

// Fehleranzeige aktivieren
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

switch ($_SERVER['REQUEST_METHOD']) {
    case "OPTIONS": //Allow preflighting to take place.
        header("Access-Control-Allow-Origin: *");
        header("Access-Control-Allow-Methods: POST");
        header("Access-Control-Allow-Headers: content-type");
        exit;

    case "POST": // Send the email
        header("Access-Control-Allow-Origin: *");
        header("Content-Type: application/json"); // JSON-Antwort

        // Payload is not sent to $_POST variable, it is sent as raw input
        $json = file_get_contents('php://input');
        $params = json_decode($json);

        // Check if payload could be parsed and all necessary data is available
        if (!$params || !isset($params->email) || !isset($params->name) || !isset($params->message)) {
            echo json_encode(['status' => 'error', 'message' => 'Invalid input']);
            http_response_code(400); // Bad Request
            exit;
        }

        $email = $params->email;
        $name = $params->name;
        $messageContent = $params->message;

        $recipient = 'JosyKrueger2@web.de';
        $subject = "Contact From <$email>";
        $message = "From: " . htmlspecialchars($name) . "<br>" . nl2br(htmlspecialchars($messageContent));

        // Set headers for HTML email format
        $headers   = array();
        $headers[] = 'MIME-Version: 1.0';
        $headers[] = 'Content-type: text/html; charset=utf-8';
        $headers[] = "From: no-reply@josy-krueger.com";

        // Send email and check for success
        if (mail($recipient, $subject, $message, implode("\r\n", $headers))) {
            echo json_encode(['status' => 'success', 'message' => 'Email sent successfully']);
        } else {
            echo json_encode(['status' => 'error', 'message' => 'Failed to send email']);
            http_response_code(500); // Internal Server Error
        }
        break;

    default: // Reject any non-POST or OPTIONS requests.
        header("Allow: POST", true, 405);
        exit;
}

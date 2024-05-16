<?php
// fetchEmails.php
define('IMAP_HOST', '{mail.privateemail.com:993/imap/ssl}INBOX');
define('IMAP_USER', 'support@thecloudclub.cc');
define('IMAP_PASS', 'your-email-password');

function fetchEmails() {
    $inbox = imap_open(IMAP_HOST, IMAP_USER, IMAP_PASS) or die('Cannot connect to PrivateEmail: ' . imap_last_error());

    $emails = imap_search($inbox, 'UNSEEN');
    $output = [];

    if ($emails) {
        rsort($emails);
        foreach ($emails as $email_number) {
            $overview = imap_fetch_overview($inbox, $email_number, 0);
            $message = imap_fetchbody($inbox, $email_number, 1);
            $output[] = [
                'subject' => $overview[0]->subject,
                'from' => $overview[0]->from,
                'date' => $overview[0]->date,
                'message' => $message
            ];
        }
    }

    imap_close($inbox);

    return $output;
}

header('Content-Type: application/json');
echo json_encode(fetchEmails());
?>
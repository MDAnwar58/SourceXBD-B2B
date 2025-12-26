<?php
namespace App\Notifications;

use Illuminate\Bus\Queueable;
use Illuminate\Notifications\Messages\DatabaseMessage;
use Illuminate\Notifications\Notification;

class SupportRequestNotification extends Notification
{
    use Queueable;

    protected $subject;
    protected $user;

    public function __construct($subject , $user)
    {
        $this->subject = $subject;
        $this->user = $user;
    }

    public function via($notifiable)
    {
        return ['database'];
    }

    public function toDatabase($notifiable)
    {
        return [
            'message' =>  $this->subject,
            'subject' => 'New Support Request From: ' .$this->user,
        ];
    }
}

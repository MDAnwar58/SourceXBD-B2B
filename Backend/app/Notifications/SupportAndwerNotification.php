<?php

namespace App\Notifications;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;

class SupportAndwerNotification extends Notification
{
    use Queueable;

    protected $subject;
    protected $answer;

    public function __construct($subject , $answer)
    {
        $this->subject = $subject;
        $this->answer = $answer;
    }

    public function via($notifiable)
    {
        return ['database'];
    }

    public function toDatabase($notifiable)
    {
        return [
            'message' =>  $this->answer,
            'subject' => 'Reply From Admin: ' .$this->subject,
        ];
    }
}

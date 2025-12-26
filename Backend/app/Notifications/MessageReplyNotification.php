<?php

namespace App\Notifications;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;

class MessageReplyNotification extends Notification
{
    use Queueable;

    protected $replyMessage;
    protected $subject;
    protected $sendEmail; // New property

    public function __construct($replyMessage, $subject, $sendEmail = true)
    {
        $this->replyMessage = $replyMessage;
        $this->subject = $subject;
        $this->sendEmail = $sendEmail;
    }

    public function via($notifiable)
    {
        $channels = ['database'];

        // Only send email if $sendEmail is true
        if ($this->sendEmail) {
            $channels[] = 'mail';
        }

        return $channels;
    }

    public function toDatabase($notifiable)
    {
        return [
            'subject' => $this->subject,
            'message' => 'You have a reply to your message, please check your inbox.',
            'reply_message_id' => $this->replyMessage->id,
            'is_read' => false,
        ];
    }

    public function toMail($notifiable)
    {
        return (new MailMessage)
            ->subject($this->subject)
            ->from($this->replyMessage->fromUser->email)  // Sender's email
            ->greeting('Hello ' . $notifiable->name . ',')
            ->line('You have received a reply to your message.')
            ->action('View Message', url('/messages/' . $this->replyMessage->id))
            ->line('Thank you for using our application!');
    }
}

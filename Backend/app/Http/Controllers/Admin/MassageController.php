<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Massage;
use App\Models\User;
use App\Notifications\MessageReplyNotification;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class MassageController extends Controller
{
    public function sendMessage(Request $request)
    {
        $request->validate([
            'to_id' => 'required|exists:users,id',
            'message' => 'required|string|max:255',
            'reply_id' => 'nullable|exists:messages,id',
        ]);

        $message = Massage::create([
            'from_id' => Auth::id(),
            'to_id' => $request->to_id,
            'message' => $request->message,
            'reply_id' => $request->reply_id,
        ]);

        if ($request->reply_id) {
            $parentMessage = Massage::find($request->reply_id);
            $parentUser = User::find($parentMessage->from_id);

            // Determine the subject based on the role of the replier
            $subject = 'You have a reply to your message';

            $subject = 'Sent from Admin Panel';


            // Check if the recipient has email notifications enabled
            if ($parentUser->profile->email_notification) {
                // Send both database and email notifications
                $parentUser->notify(new MessageReplyNotification($message, $subject));
            } else {
                // Send only database notification
                $parentUser->notify(new MessageReplyNotification($message, $subject, false));
            }
        }


        return response()->json($message, 201);
    }

    // Get all messages for the authenticated user
    public function getUserMessages()
    {
        $userId = Auth::id();

        $messages = Massage::where(function ($query) use ($userId) {
            $query->where('to_id', $userId)
                ->orWhere('from_id', $userId);
        })->whereNull('reply_id')
            ->with('replies')
            ->get();

        return response()->json($messages, 200);
    }

    // Mark a message as read
    public function markAsRead($id)
    {
        $message = Massage::where('to_id', Auth::id())->findOrFail($id);
        $message->update(['is_read' => true]);

        return response()->json(['message' => 'Message marked as read'], 200);
    }

    // Get a message with its replies
    public function getMessageWithReplies($id)
    {
        $message = Massage::where('id', $id)
            ->where(function ($query) {
                $query->where('to_id', Auth::id())
                    ->orWhere('from_id', Auth::id());
            })
            ->with('replies')
            ->firstOrFail();

        return response()->json($message, 200);
    }

    // Edit a message
    public function editMessage(Request $request, $id)
    {
        $message = Massage::where('from_id', Auth::id())->findOrFail($id);

        $request->validate([
            'message' => 'required|string|max:255',
        ]);

        $message->update(['message' => $request->message]);

        return response()->json(['message' => 'Message updated successfully', 'data' => $message], 200);
    }

    // Delete a message
    public function deleteMessage($id)
    {
        $message = Massage::where('from_id', Auth::id())->findOrFail($id);
        $message->delete();

        return response()->json(['message' => 'Message deleted successfully'], 200);
    }
}

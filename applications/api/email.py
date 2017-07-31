import threading
from django.core.mail import EmailMessage

class EmailThread(threading.Thread):
    def __init__(self, subject, content, sender, recipient_list):
        self.subject = subject
        self.recipient_list = [recipient_list]
        self.content = content
        self.sender = sender
        threading.Thread.__init__(self)

    def run(self):
        msg = EmailMessage(self.subject, self.content, self.sender, self.recipient_list)
        msg.content_subtype = 'html'
        msg.send()

def send_html_email(subject, content, recipient_list, sender):
    EmailThread(subject, content, recipient_list, sender).start()
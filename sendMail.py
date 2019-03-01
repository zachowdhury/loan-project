import smtplib, ssl

#port = 465  # For SSL
port=1025 #
smtp_server = "localhost"
sender_email = "zahid.nordicsoft@gmail.com"  # Enter your address
receiver_email = "zahid@nordicsoft.fi"  # Enter receiver address
#password = ''
message = """\
Subject: Hi there

This message is sent from Python."""

#context = ssl.create_default_context()
with smtplib.SMTP_SSL(smtp_server, port, context=context) as server:
    server.login(sender_email, password)
    server.sendmail(sender_email, receiver_email, message)

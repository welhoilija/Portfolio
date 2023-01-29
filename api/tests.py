from django.test import TestCase
from django.core import mail
from api.models import ContactData

# Create your tests here.


class ContactDataTestCase(TestCase):
    def test_send_email(self):
        # Create an instance of MyModel
        contact_data = ContactData.objects.create(name="Thomas", text="text")

        # Call the class method that sends the email
        contact_data.send_data_via_email()

        # Assert that one email was sent
        self.assertEqual(len(mail.outbox), 1)

        # Assert that the email's subject and body are correct
        self.assertEqual(mail.outbox[0].subject,
                         'New contact request from Tuomaskangas.com')
        self.assertIn('Thomas text', mail.outbox[0].body)

        # Assert that the email was sent topy the correct recipient
        self.assertIn('example@example.com', mail.outbox[0].to)

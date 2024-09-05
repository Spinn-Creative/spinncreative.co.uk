// src/__tests__/emailHandler.test.ts
import { POST } from '@/app/api/send-email/route';
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Mocking nodemailer
jest.mock('nodemailer');
const sendMailMock = jest.fn();
(nodemailer.createTransport as jest.Mock).mockReturnValue({
  sendMail: sendMailMock,
});

// Mock NextResponse
jest.mock('next/server', () => ({
  NextResponse: {
    json: jest.fn(),
  },
}));

describe('POST handler', () => {
  it('should send an email and return a success response', async () => {
    const mockRequest: Partial<Request> = {
      json: jest.fn().mockResolvedValue({
        name: 'John Doe',
        email: 'john@example.com',
        message: 'Hello World',
      }),
    };

    sendMailMock.mockResolvedValueOnce({});

    await POST(mockRequest as Request);

    expect(sendMailMock).toHaveBeenCalledWith({
      from: 'noreply@spinncreative.co.uk',
      to: 'hello@spinncreative.co.uk',
      replyTo: 'john@example.com',
      subject: 'New Contact Form Submission',
      html: `
        <h3>Contact Form Submission</h3>
        <p><strong>Name:</strong> John Doe</p>
        <p><strong>Email:</strong> john@example.com</p>
        <p><strong>Message:</strong> Hello World</p>
      `,
    });

    expect(NextResponse.json).toHaveBeenCalledWith(
      { message: 'Your message has been sent successfully.' },
      { status: 200 }
    );
  });

  it('should return an error response if email sending fails (with custom message)', async () => {
    const mockRequest: Partial<Request> = {
      json: jest.fn().mockResolvedValue({
        name: 'John Doe',
        email: 'john@example.com',
        message: 'Hello World',
      }),
    };

    // Mock the console.error to provide a custom message
    const consoleErrorMock = jest.spyOn(console, 'error').mockImplementation((message, error) => {
      console.log('Custom: Email sending failed as expected during testing.');
      console.log('Original error:', error.message); // Or log more details if needed
    });

    // Mock sendMail to fail
    sendMailMock.mockRejectedValueOnce(new Error('Failed to send email'));

    await POST(mockRequest as Request);

    expect(NextResponse.json).toHaveBeenCalledWith(
      { message: 'Your message has not been sent.' },
      { status: 500 }
    );

    // Restore console.error after this test
    consoleErrorMock.mockRestore();
  });
});

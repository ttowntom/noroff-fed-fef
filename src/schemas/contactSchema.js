import { z } from 'zod';

const contactSchema = z.object({
  name: z
    .string()
    .min(3, 'Full name must be at least 3 characters long')
    .min(1, 'Full name is required'),
  email: z
    .string()
    .email('Please enter a valid email address')
    .min(1, 'Email is required'),
  subject: z
    .string()
    .min(3, 'Subject must be at least 3 characters long')
    .min(1, 'Subject is required'),
  message: z
    .string()
    .min(3, 'Message must be at least 3 characters long')
    .min(1, 'Message is required'),
});

export default contactSchema;

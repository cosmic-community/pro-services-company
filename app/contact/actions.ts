'use server'

import { createContactSubmission } from '@/lib/cosmic'
import { revalidatePath } from 'next/cache'

export interface ContactFormState {
  success?: boolean;
  error?: string;
  message?: string;
}

export async function submitContactForm(
  prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  try {
    const name = formData.get('name') as string
    const email = formData.get('email') as string
    const company = formData.get('company') as string
    const phone = formData.get('phone') as string
    const message = formData.get('message') as string

    // Validation
    if (!name || !email || !message) {
      return {
        success: false,
        error: 'Please fill in all required fields'
      }
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return {
        success: false,
        error: 'Please enter a valid email address'
      }
    }

    // Create contact submission in Cosmic
    await createContactSubmission({
      name,
      email,
      company,
      phone,
      message
    })

    revalidatePath('/contact')

    return {
      success: true,
      message: 'Thank you for contacting us! We will get back to you soon.'
    }
  } catch (error) {
    console.error('Contact form submission error:', error)
    return {
      success: false,
      error: 'Something went wrong. Please try again later.'
    }
  }
}
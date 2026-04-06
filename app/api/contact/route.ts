import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const { name, email, message } = await request.json()

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'All fields are required' }, { status: 400 })
    }

    // Use Web3Forms (free service) to send emails
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({
        access_key: '9ef0c8a2-0cce-435e-8346-759ddcac6c6f',
        subject: `New Contact Form Message from ${name}`,
        from_name: 'NutriLens Website',
        name: name,
        email: email,
        message: message,
      }),
    })

    const data = await response.json()

    if (data.success) {
      return NextResponse.json({ success: true, message: 'Email sent successfully' })
    } else {
      console.error('Web3Forms error:', data)
      throw new Error(data.message || 'Failed to send email')
    }
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json({
      error: 'Failed to send message. Please try again later.',
      details: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 })
  }
}

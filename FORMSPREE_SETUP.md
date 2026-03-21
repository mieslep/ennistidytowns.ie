# Contact Form Setup Instructions

## Using Formspree (Recommended - Free)

Formspree is a form backend service perfect for static sites. The free tier includes:
- 50 submissions per month
- Email notifications
- Spam filtering
- No backend code required

### Setup Steps:

1. **Sign up for Formspree**
   - Go to https://formspree.io/
   - Create a free account using buzzy@ennistidytowns.ie or another email

2. **Create a New Form**
   - Click "New Form" in your dashboard
   - Name it something like "Ennis Tidy Towns Contact Form"
   - Set the email address to receive submissions: `buzzy@ennistidytowns.ie`

3. **Get Your Form Endpoint**
   - Formspree will provide you with a form endpoint URL like:
     `https://formspree.io/f/YOUR_FORM_ID`
   - Copy this URL

4. **Update index.html**
   - Open `index.html`
   - Find line ~154: `<form id="contact-form" class="contact-form" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">`
   - Replace `YOUR_FORM_ID` with your actual form ID
   - Example: `action="https://formspree.io/f/xpwzabcd"`

5. **Test the Form**
   - Save and push your changes to GitHub
   - Visit your website
   - Submit a test message
   - Check your email for the submission

### Optional: Email Routing

Since you mentioned having aliases like `join@`, you could:
1. Create multiple Formspree forms for different purposes
2. Update the subject dropdown or create separate forms
3. Set up email filters in your email client to route messages to folders based on subject

### Alternative Services:

**Web3Forms** (https://web3forms.com/)
- 250 submissions/month free
- Similar setup process
- No account required, just use an access key

**Basin** (https://usebasin.com/)
- 100 submissions/month free
- Clean dashboard
- Good spam protection

**Netlify Forms** (if you switch to Netlify hosting)
- 100 submissions/month free
- Native integration with Netlify

---

## Current Form Features:

✅ Name, Email, Subject, and Message fields
✅ Spam protection (via Formspree)
✅ Client-side validation
✅ Success/error messages
✅ Loading state during submission
✅ Mobile-responsive design
✅ Matches your site's design aesthetic

## Support:

If you have any issues with setup, Formspree has excellent documentation:
https://help.formspree.io/

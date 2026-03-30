Web3Forms integration for Contact form

1) Sign up at https://web3forms.com/ and create a form to get your Access Key.
2) Add the access key to a local `.env` file at project root:

VITE_WEB3FORMS_ACCESS_KEY=your_web3forms_access_key

3) Restart the dev server so `import.meta.env` picks up the variables.

4) The contact form in `src/components/Contact.jsx` now sends a POST to `https://api.web3forms.com/submit` using FormData. The component includes a hidden `botcheck` field as a honeypot.

5) Test locally: run:

npm run dev

Open the site, fill the contact form and submit. Successful submissions show a confirmation alert and reset the form.

Notes:
- Keep `.env` out of version control.
- For production, consider server-side submission to keep the access key private if you require stricter security.
const protected_app = {
  name: 'Protected app',
  title: 'Create a Protected App: Epic speed, simplicity, non-SDK integration',
  description:
    'Serverless deployment with Logto Workers, powered by Cloudflare for top-tier performance and 0ms cold starts worldwide. <a>Learn more</a>',
  fast_create: 'Fast create',
  modal_title: 'Create protected app',
  modal_subtitle:
    'No more integrating Logto SDK. Add authentication to your existing web app with ease.',
  form: {
    url_field_label: 'Your origin URL',
    url_field_placeholder: 'https://',
    url_field_description:
      'Enter the primary website address of your application requiring authentication.',
    url_field_modification_notice:
      'Modifications to the Origin URL may take up to 1-2 minutes to become effective across global network locations.',
    url_field_tooltip:
      "Enter primary website address of your application, excluding any '/pathname'. After creation, you can customize route authentication rules.\n\nNote: The Origin URL itself doesn't necessitate authentication; protection is applied exclusively to accesses via the designated app domain.",
    domain_field_label: 'App domain',
    domain_field_placeholder: 'your-domain',
    domain_field_description:
      'This URL serves as an authentication protection proxy for the original URL. Custom domain can be applied after creation.',
    domain_field_description_short:
      'This URL serves as an authentication protection proxy for the original URL.',
    domain_field_tooltip:
      "Apps protected by Logto will be hosted at 'your-domain.{{domain}}' by default. Custom domain can be applied after creation.",
    create_application: 'Create application',
    create_protected_app: 'Create and experience instantly',
    errors: {
      domain_required: 'Subdomain is required',
      domain_in_use: 'This subdomain name is already in use.',
      invalid_domain_format:
        "Invalid subdomain format: use only lowercase letters, numbers, and hyphens '-'.",
      url_required: 'Origin URL is required.',
      invalid_url:
        "Invalid Origin URL format: Use http:// or https://. Note: '/pathname' is not currently supported.",
    },
  },
  success_message:
    '🎉  App authentication successfully enabled! Explore the new protection of your website.',
};

export default Object.freeze(protected_app);

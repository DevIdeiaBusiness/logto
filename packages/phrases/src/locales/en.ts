/* eslint-disable max-lines */
const translation = {
  general: {
    placeholder: 'Placeholder',
    skip: 'Skip',
    next: 'Next',
    retry: 'Try again',
    done: 'Done',
    search: 'Search',
    save_changes: 'Save changes',
    loading: 'Loading...',
    redirecting: 'Redirecting...',
    added: 'Added',
  },
  main_flow: {
    input: {
      username: 'Username',
      password: 'Password',
      email: 'Email',
      phone_number: 'Phone number',
      confirm_password: 'Confirm password',
    },
    secondary: {
      sign_in_with: 'Sign in with {{methods, list(type: disjunction;)}}',
      social_bind_with:
        'Already have an account? Sign in to bind {{methods, list(type: disjunction;)}} with your social identity.',
    },
    action: {
      sign_in: 'Sign In',
      continue: 'Continue',
      create_account: 'Create Account',
      create: 'Create',
      enter_passcode: 'Enter Passcode',
      confirm: 'Confirm',
      cancel: 'Cancel',
      bind: 'Binding with {{address}}',
    },
    description: {
      not_found: 'Not Found',
      loading: 'Loading...',
      redirecting: 'Redirecting...',
      agree_with_terms: 'I have read and agree to the ',
      agree_with_terms_modal: 'Please read the {{terms}} and then agree the box first.',
      terms_of_use: 'Terms of Use',
      create_account: 'Create Account',
      forgot_password: 'Forgot Password?',
      or: 'Or',
      enter_passcode: 'The passcode has been sent to {{address}}',
      passcode_sent: 'The passcode has been sent',
      resend_after_seconds: 'Resend after {{seconds}} seconds',
      resend_passcode: 'Resend Passcode',
      continue_with: 'Continue with',
      create_account_id_exists:
        'The account with {{type}} {{value}} already exists, would you like to sign in?',
      sign_in_id_does_not_exists:
        'The account with {{type}} {{value}} does not exist, would you like to create a new account?',
      bind_account_title: 'Binding Logto account',
      social_create_account: 'No account? You can create a new account and bind.',
      social_bind_account: 'Already have an account? Sign in to bind it with your social identity.',
      social_bind_with_existing: 'We find a related account, you can bind it directly.',
    },
    error: {
      username_password_mismatch: 'Username and password do not match.',
      username_required: 'Username is required.',
      password_required: 'Password is required.',
      username_exists: 'Username already exists.',
      username_should_not_start_with_number: 'Username should not start with a number.',
      username_valid_charset: 'Username should only contain letters, numbers, or underscore.',
      invalid_email: 'The email is invalid',
      invalid_phone: 'The phone number is invalid',
      invalid_connector_auth: 'The authorization is invalid',
      missing_auth_data: 'The authorization code or state is missing',
      password_min_length: 'Password requires a minimum of {{min}} characters.',
      passwords_do_not_match: 'Passwords do not match.',
      agree_terms_required: 'You must agree to the Terms of Use before continuing.',
      invalid_passcode: 'The passcode is invalid.',
      request: 'Request error ({{code}}):{{message}}',
      unknown: 'Unknown error, please try again later.',
    },
  },
  admin_console: {
    title: 'Admin Console',
    copy: {
      pending: 'Copy',
      copying: 'Copying',
      copied: 'Copied',
    },
    form: {
      required: 'Required',
      add_another: '+ Add Another',
    },
    errors: {
      something_went_wrong: 'Oops! Something went wrong',
      unknown_server_error: 'Unknown server error occurred.',
      empty: 'No Data',
      missing_total_number: 'Unable to find Total-Number in response headers.',
      invalid_uri_format: 'Invalid URI format',
      required_field_missing: 'Please enter {{field}}',
      required_field_missing_plural: 'You have to enter at least one {{field}}',
    },
    tab_sections: {
      overview: 'Overview',
      resource_management: 'Resource Management',
      user_management: 'User Management',
      help_and_support: 'Help and Support',
    },
    tabs: {
      get_started: 'Get Started',
      dashboard: 'Dashboard',
      applications: 'Applications',
      api_resources: 'API Resources',
      sign_in_experience: 'Sign-in Experience',
      connectors: 'Connectors',
      users: 'User Management',
      audit_logs: 'Audit Logs',
      documentation: 'Documentation',
      contact_us: 'Contact Us',
      settings: 'Settings',
    },
    applications: {
      title: 'Applications',
      subtitle:
        'Setup a mobile, single page or traditional application to use Logto for authentication.',
      create: 'Create Application',
      application_name: 'Application Name',
      application_description: 'Application Description',
      select_application_type: 'Select an Application Type',
      no_application_type_selected: 'You have to select an application type to proceed.',
      application_created:
        'The application {{name}} has been successfully created! \nNow finish your application settings.',
      client_id: 'Client ID',
      type: {
        native: {
          title: 'Native App',
          subtitle: 'Mobile, desktop, CLI and smart device apps running natively.',
          description: 'E.g.: iOS, Electron, Apple TV apps',
        },
        spa: {
          title: 'Single Page App',
          subtitle: 'A JavaScript front-end app that uses an API.',
          description: 'E.g.: Angular, React, Vue',
        },
        traditional: {
          title: 'Traditional Web',
          subtitle: 'Traditional web app using redirects.',
          description: 'E.g.: Node.js, Express, ASP.NET, Java, PHP',
        },
      },
      get_started: {
        header_description:
          'Follow a step by step guide to integrate your application or get a sample configured with your account settings',
        title: 'Congratulations! The application has been created successfully.',
        subtitle:
          'Now follow the steps below to finish your app settings. Please select the JS library to continue.',
        description_by_library:
          'This quickstart demonstrates how to add Logto to {{library}} application.',
      },
    },
    application_details: {
      back_to_applications: 'Back to Applications',
      check_help_guide: 'Check Help Guide',
      settings: 'Settings',
      advanced_settings: 'Advanced Settings',
      application_name: 'Application Name',
      description: 'Description',
      authorization_endpoint: 'Authorization Endpoint',
      redirect_uri: 'Redirect URI',
      post_sign_out_redirect_uri: 'Post Sign Out Redirect URI',
      cors_allowed_origins: 'CORS Allowed Origins',
      add_another: 'Add another',
      id_token_expiration: 'ID Token Expiration',
      refresh_token_expiration: 'Refresh Token Expiration',
      token_endpoint: 'Token Endpoint',
      user_info_endpoint: 'User Info Endpoint',
      save_changes: 'Save Changes',
      more_options: 'MORE OPTIONS',
      options_delete: 'Delete',
      reminder: 'Reminder',
      delete_description:
        'This action cannot be undone. This will permanently delete the this application. Please enter the application name <span>{{name}}</span> to proceed.',
      enter_your_application_name: 'Enter your application name',
      cancel: 'Cancel',
      delete: 'Delete',
      application_deleted: 'The application {{name}} deleted.',
      save_success: 'Saved!',
      redirect_uri_required: 'You have to enter at least one redirect URI.',
    },
    api_resources: {
      title: 'API Resources',
      subtitle: 'Define APIs that you can consume from your authorized applications.',
      create: 'Create API Resource',
      api_name: 'API Name',
      api_identifier: 'API Identifier',
      api_resource_created: 'The API resource {{name}} has been successfully created!',
    },
    api_resource_details: {
      back_to_api_resources: 'Back to my API resources',
      check_help_guide: 'Check Help Guide',
      more_options: 'MORE OPTIONS',
      options_delete: 'Delete',
      settings: 'Settings',
      save_changes: 'Save Changes',
      token_expiration_time_in_seconds: 'Token Expiration Time (in seconds)',
      reminder: 'Reminder',
      delete_description:
        'This action cannot be undone. This will permanently delete the this API resource. Please enter the api resource name <span>{{name}}</span> to proceed.',
      enter_your_api_resource_name: 'Enter your API resource name',
      cancel: 'Cancel',
      delete: 'Delete',
      api_resource_deleted: 'The API Resource {{name}} deleted.',
      save_success: 'Saved!',
    },
    connectors: {
      title: 'Connectors',
      subtitle: 'Setup connectors to enable passwordless and social sign in experience.',
      create: 'Add social connector',
      set_up: 'Set Up',
      tab_email_sms: 'Email and SMS connectors',
      tab_social: 'Social connectors',
      connector_name: 'Connector Name',
      connector_type: 'Type',
      connector_status: 'Status',
      connector_status_enabled: 'Enabled',
      connector_status_disabled: 'Disabled',
      social_connector_eg: 'e.g.: Google, Facebook, Twitter',
      next: 'Next',
      type: {
        email: 'Email Sender',
        sms: 'SMS Sender',
        social: 'Social',
      },
      setup_title: {
        email: 'Setup email sender',
        sms: 'Setup SMS sender',
        social: 'Add social connector',
      },
      get_started: {
        subtitle:
          'A step by step guide to integrate your connector or get a sample configured with your account settings',
      },
    },
    connector_details: {
      back_to_connectors: 'Back to Connectors',
      check_readme: 'Check README',
      tab_settings: 'Settings',
      save_changes: 'Save Changes',
      save_error_empty_config: 'Please enter config.',
      save_error_json_parse_error: 'Please enter valid JSON.',
      save_success: 'Saved!',
      send: 'Send',
      send_error_invalid_format: 'Invalid input',
      test_email_sender: 'Test your email sender',
      test_sms_sender: 'Test your SMS sender',
      test_message_sent: 'Test Message Sent!',
      test_sender_description: 'Test sender description',
      options: 'Options',
      options_delete: 'Delete',
      options_change_email: 'Change email connector',
      options_change_sms: 'Change SMS connector',
      more_options: 'MORE OPTIONS',
      connector_deleted: 'The connector has been deleted.',
    },
    get_started: {
      get_sample_file: 'Get a sample file',
    },
    users: {
      title: 'User Management',
      subtitle:
        'The tab for managing users, creating a new user, and editing user profiles. Every registered user can be found here.',
      create: 'Add user',
      user_name: 'User',
      application_name: 'Apps',
      latest_sign_in: 'Latest sign in',
      create_form_username: 'Username',
      create_form_password: 'Password',
      create_form_name: 'Full name',
      unnamed: 'Unnamed',
    },
    user_details: {
      back_to_users: 'Back to user management',
      created_title: 'Congratulations! This user has been created.',
      created_guide: 'Now send this following information.',
      created_username: 'User username:',
      created_password: 'Initial password:',
      created_button_close: 'Close',
      created_button_copy: 'Copy',
      more_options: 'MORE OPTIONS',
      menu_delete: 'Delete',
      delete_title: 'Reminder',
      delete_description: 'This action cannot be undone. This will delete the user.',
      delete_cancel: 'Cancel',
      delete_confirm: 'Delete',
      deleted: 'User deleted.',
      reset_password: {
        title: 'Reset Password',
        label: 'New password:',
        reset_password: 'Reset password',
        reset_password_success: 'Reset password successfully.',
      },
      tab_settings: 'Settings',
      tab_logs: 'User Logs',
      field_email: 'Primary Email',
      field_phone: 'Primary Phone',
      field_username: 'Username',
      field_name: 'Name',
      field_avatar: 'Avatar image URL',
      field_roles: 'Roles',
      field_custom_data: 'Custom data',
      field_connectors: 'Social Connectors',
      custom_data_invalid: 'Custom data must be a valid JSON',
      save_changes: 'Save changes',
      saved: 'Saved!',
      connectors: {
        connectors: 'Connectors',
        user_id: 'User ID',
        remove: 'remove',
        not_connected: 'The user is not connected to any social connector.',
      },
      roles: {
        default: 'Default',
        admin: 'Admin',
      },
    },
    contact: {
      title: 'Contact us',
      description: 'You can contact us for help and support.',
      slack: {
        title: 'Slack channel',
        description: 'Join our public channel to chat with developers.',
        button: 'Join',
      },
      github: {
        title: 'GitHub',
        description: 'Create an issue.',
        button: 'Contact',
      },
      email: {
        title: 'Send us an email',
        description: 'If you have any question.',
        button: 'Send',
      },
    },
    sign_in_exp: {
      title: 'Sign-in Experience',
      description: 'Customize the sign in experience.',
      tabs: {
        experience: 'Experience',
        methods: 'Sign in methods',
        others: 'Others',
      },
      branding: {
        title: 'BRANDING',
        primary_color: 'Primary color',
        dark_primary_color: 'Primary color (Dark)',
        dark_mode: 'Enable Dark Mode',
        dark_mode_description:
          'Enabling this setting will auto generate the dark mode color. You app won’t have dark mode if it’s turned off.',
        ui_style: 'Define your UI style',
        styles: {
          logo_slogan: 'Logo + slogan',
          logo: 'Logo',
        },
        logo_image_url: 'Logo image URL',
        slogan: 'Slogan',
        slogan_placeholder: 'Unleash your creativity',
      },
      terms_of_use: {
        title: 'TERMS OF USE',
        enable: 'Enable Terms of use',
        description:
          'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. ',
        terms_of_use: 'Terms of use',
        terms_of_use_placeholder: 'Terms of use url',
      },
      sign_in_methods: {
        title: 'SIGN IN METHODS',
        primary: 'Primary sign in method',
        enable_secondary: 'Enable secondary sign in',
        enable_secondary_description:
          "Once it's turned on, you app will support more sign in method(s) besides the primary one. ",
        methods: 'Sign in method',
        methods_sms: 'Phone number sign in',
        methods_email: 'Email sign in',
        methods_social: 'Social sign in',
        methods_username: 'Username-with-password sign in',
        methods_primary_tag: '(Primary)',
        define_social_methods: 'Define social sign in methods',
        transfer: {
          title: 'Social connectors',
          footer: {
            not_in_list: 'Not in the list?',
            set_up_more: 'Set up more',
            go_to: 'social connectors or go to “Connectors” section.',
          },
        },
      },
      others: {
        languages: {
          title: 'LANGUAGES',
          mode: 'Language mode',
          auto: 'Auto',
          fixed: 'Fixed',
          fallback_language: 'Fallback language',
          fixed_language: 'Fixed language',
          languages: {
            english: 'English',
            chinese: 'Chinese',
          },
        },
      },
      setup_warning: {
        setup: 'Set up',
        no_connector:
          'You haven’t set up any social connectors yet. Your sign in experience won’t go live until you finish the settings first. ',
      },
    },
    settings: {
      title: 'Settings',
      description: 'Global settings and others',
      tabs: {
        general: 'General',
      },
      custom_domain: 'Custom domain',
      language: 'Language',
      language_english: 'English',
      language_chinese: 'Chinese',
      appearance: 'Appearance',
      appearance_system: 'Sync with system',
      appearance_light: 'Light mode',
      appearance_dark: 'Dark mode',
      saved: 'Saved!',
    },
  },
};

const errors = {
  auth: {
    authorization_header_missing: 'Authorization header is missing.',
    authorization_token_type_not_supported: 'Authorization type is not supported.',
    unauthorized: 'Unauthorized. Please check credentials and its scope.',
    jwt_sub_missing: 'Missing `sub` in JWT.',
  },
  guard: {
    invalid_input: 'The request input is invalid.',
    invalid_pagination: 'The request pagination value is invalid.',
  },
  oidc: {
    aborted: 'The end-user aborted interaction.',
    invalid_scope: 'Scope {{scope}} is not supported.',
    invalid_scope_plural: 'Scope {{scopes}} are not supported.',
    invalid_token: 'Invalid token provided.',
    invalid_client_metadata: 'Invalid client metadata provided.',
    insufficient_scope: 'Access token missing requested scope {{scopes}}.',
    invalid_request: 'Request is invalid.',
    invalid_grant: 'Grant request is invalid.',
    invalid_redirect_uri:
      "`redirect_uri` did not match any of the client's registered `redirect_uris`.",
    access_denied: 'Access denied.',
    invalid_target: 'Invalid resource indicator.',
    unsupported_grant_type: 'Unsupported `grant_type` requested.',
    unsupported_response_mode: 'Unsupported `response_mode` requested.',
    unsupported_response_type: 'Unsupported `response_type` requested.',
    provider_error: 'OIDC Internal Error: {{message}}.',
  },
  user: {
    username_exists_register: 'The username has been registered.',
    email_exists_register: 'The email address has been registered.',
    phone_exists_register: 'The phone number has been registered.',
    invalid_email: 'Invalid email address.',
    invalid_phone: 'Invalid phone number.',
    email_not_exists: 'The email address has not been registered yet.',
    phone_not_exists: 'The phone number has not been registered yet.',
    identity_not_exists: 'The social account has not been registered yet.',
    identity_exists: 'The social account has been registered.',
  },
  password: {
    unsupported_encryption_method: 'The encryption method {{name}} is not supported.',
    pepper_not_found: 'Password pepper not found. Please check your core envs.',
  },
  session: {
    not_found: 'Session not found. Please go back and sign in again.',
    invalid_credentials: 'Invalid credentials. Please check your input.',
    invalid_sign_in_method: 'Current sign-in method is not available.',
    invalid_connector_id: 'Unable to find available connector with id {{connectorId}}.',
    insufficient_info: 'Insufficient sign-in info.',
    connector_id_mismatch: 'The connectorId is mismatched with session record.',
    connector_session_not_found: 'Connector session not found. Please go back and sign in again.',
    unauthorized: 'Please sign in first.',
    unsupported_prompt_name: 'Unsupported prompt name',
  },
  connector: {
    general: 'An unexpected error occurred in connector.',
    not_found: 'Cannot find any available connector for type: {{type}}.',
    not_enabled: 'The connector is not enabled.',
    invalid_config: "The connector's config is invalid.",
    template_not_found: 'Unable to find correct template in connector config.',
    access_token_invalid: "Connector's access token is invalid.",
    oauth_code_invalid: 'Unable to get access token, please check authorization code.',
    more_than_one_sms: 'The number of SMS connectors is larger then 1.',
    more_than_one_email: 'The number of Email connectors is larger then 1.',
    db_connector_type_mismatch: 'There is a connector in the DB that does not match the type.',
  },
  passcode: {
    phone_email_empty: 'Both phone and email are empty.',
    not_found: 'Passcode not found. Please send passcode first.',
    phone_mismatch: 'Phone mismatch. Please request a new passcode.',
    email_mismatch: 'Email mismatch. Please request a new passcode.',
    code_mismatch: 'Invalid passcode.',
    expired: 'Passcode has expired. Please request a new passcode.',
    exceed_max_try: 'Passcode verification limitation exceeded. Please request a new passcode.',
  },
  sign_in_experiences: {
    empty_content_url_of_terms_of_use:
      'Empty "Terms of use" content URL. Please add the content URL if "Terms of use" is enabled.',
    empty_slogan:
      'Empty branding slogan. Please add a branding slogan if a UI style containing the slogan is selected.',
    empty_social_connectors:
      'Empty social connectors. Please add enabled social connectors when the social sign-in method is enabled.',
    enabled_connector_not_found: 'Enabled {{type}} connector not found.',
    invalid_social_connectors:
      'Invalid social connectors, Please confirm all your selected social connectors are enabled.',
    not_one_and_only_one_primary_sign_in_method:
      'There must be one and only one primary sign-in method. Please check your input.',
  },
  swagger: {
    invalid_zod_type: 'Invalid Zod type, please check route guard config.',
  },
  entity: {
    create_failed: 'Failed to create {{name}}.',
    not_exists: 'The {{name}} does not exist.',
    not_exists_with_id: 'The {{name}} with ID `{{id}}` does not exist.',
    not_found: 'The resource does not exist',
  },
};

const en = Object.freeze({
  translation,
  errors,
});

export default en;
/* eslint-enable max-lines */

from email_validator import validate_email, EmailNotValidError

def verify_email_address(email):
    try:
        # Check syntax and domain deliverability (via DNS)
        # Set check_deliverability=False inside test environments
        email_info = validate_email(email, check_deliverability=True)
        
        # Access the normalized version (e.g., lowercase domains)
        normalized_email = email_info.email
        return True, normalized_email
        
    except EmailNotValidError as error:
        # Returns a friendly, human-readable reason for failure
        return False, str(error)

# Test cases
print(verify_email_address("test.user+alex@gmail.com"))  # (True, 'test.user+alex@gmail.com')
print(verify_email_address("invalid-email.com"))         # (False, 'The email address is missing the @-sign.')

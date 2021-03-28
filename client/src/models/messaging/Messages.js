/**
 * Centralized File for Messages in the Front-End
 * 
 * import Message from 'models/Messaging/Messages';
 * 
 * Harness: Message.RequireUsername
 *  */ 
const Messages = {
    // General Messages

    // Forms
    RequireUsername: 'Username is required to log in.',
    InvalidUsername: 'Username cannot include special characters.',
    UsernameTooLong: 'Username cannot be longer than 20 characters.',
    UsernameTooShort: 'Username must be at least 4 characters long.',
    RequirePassword: 'Password is required to log in.',
    InvalidPassword: 'Passwords can only contain certain special characters.',
    PasswordTooLong: 'Password cannot be longer than 20 characters.',
    PasswordTooShort: 'Password must be at least 6 characters long.',
}
export default Messages;
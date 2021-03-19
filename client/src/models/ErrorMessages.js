/**
 * Centralized File for Error Messages in the Front-End
 * 
 * import ErrorMessage from 'models/ErrorMessages';
 * 
 * To use: ErrorMessage.NetworkError
 *  */ 
const ErrorMessages = {
    // General API Errors
    NetworkError: 'Encountered a network error. Try again soon.',
    EmptyResponse: 'Received empty response from the server.',
    
    // Home Page
    GettingGameNews: 'An error occurred while retrieving the game news.',

    // Play Page
    LoadingGame: 'Unable to load the game application.',

    // Game Application
    ScoreSave: 'There was an error saving game score.',
    GettingEnemyList: 'There was an error retrieving the list of enemies',
}
export default ErrorMessages;
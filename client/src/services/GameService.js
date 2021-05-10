import ErrorMessage from 'models/messaging/ErrorMessages';

const _serverUri = process.env.REACT_APP_DOMAIN;
const _port = process.env.REACT_APP_PORT;
const _headers = {
        //"access-control-allow-origin": "*"
    };

const _setReturnObject = (returnObj, HasErrors = false, ErrorMessage = null, Data = null) => {
    returnObj.HasErrors = HasErrors;
    returnObj.Error = ErrorMessage;
    returnObj.Data = Data ?? [{Name: "Test Dummy", HP: 100}];
}

export default class GameService {
    
    static GetEnemies = async () => {
        let returnObj = {};
        
        const promise = await fetch(
            `http://${_serverUri}:${_port}/api/game/enemies`,
            {method: 'GET', headers: _headers, Orgin: 'http://localhost'},
        ).catch(_ => {
            _setReturnObject(returnObj, true, ErrorMessage.NetworkError);
            console.warn(returnObj.Error);
        });
            
        if (returnObj.HasErrors) {
            return returnObj.Data;
        }

        const responseJson = await promise.json();
        
        /* Check for errors */
        // Checking for empty response {}
        if (!responseJson || Object.keys(responseJson).length === 0) {
            _setReturnObject(returnObj, true, ErrorMessage.EmptyResponse)
            console.warn(returnObj.Error);
            return returnObj.Data;
        }
        
        if (responseJson.hasOwnProperty('error')) {
            console.warn(returnObj.Error);
            _setReturnObject(returnObj, true, responseJson.error)
            return returnObj.Data;
        }
        
        _setReturnObject(returnObj, null, null, responseJson.Enemies);
        return returnObj.Data;
    }
}
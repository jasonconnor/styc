import React from 'react';
import ActionBarComponent from './ActionBarComponent';
import DialogComponent from './DialogComponent';

export default function MainPaneComponent() {    
    return (
        <React.Fragment>
            <DialogComponent />
            <ActionBarComponent />
        </React.Fragment>
    );
}
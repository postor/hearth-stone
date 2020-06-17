import React from 'react';
import './ExploreContainer.css';
import { IonItem, IonButton } from '@ionic/react';

interface ContainerProps { }

const ExploreContainer: React.FC<ContainerProps> = () => {
  return (
    <div className="container">
      <strong>Ready to have a try?</strong>
      <p>
        <IonButton href="/play">let's play!</IonButton>
      </p>
    </div>
  );
};

export default ExploreContainer;

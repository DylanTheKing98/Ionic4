render() {
    return (
      <ion-page>
        <ion-header>
          <ion-toolbar color='primary'>
            <ion-buttons slot="start">
              <ion-back-button text="Home"></ion-back-button>
            </ion-buttons>

            <ion-title>Ionic PWA Toolkit</ion-title>
          </ion-toolbar>
        </ion-header>

        <ion-content>

            <ion-nav-pop>
              <ion-button>Pop</ion-button>
            </ion-nav-pop>

            <p>Pop will only work if this page was pushed, not if it was set as the new root component</p>

        </ion-content>
      </ion-page>
    );
  }
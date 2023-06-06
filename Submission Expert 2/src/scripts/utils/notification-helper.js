const NotificationHelper = {
  sendNotification({ title, options }) {
    this._checkAvailability()
      .then((isAvailable) => {
        if (!isAvailable) {
          console.info('Notification not supported in this browser');
          return;
        }
        // eslint-disable-next-line consistent-return
        return this._checkPermission();
      })
      .then((isPermitted) => {
        if (!isPermitted) {
          console.info('User did not yet grant permission');
          return this._requestPermission();
        }
        return Promise.resolve();
      })
      .then(() => {
        this._showNotification({ title, options });
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  },

  _checkAvailability() {
    return new Promise((resolve) => {
      resolve(Boolean('Notification' in window));
    });
  },

  _checkPermission() {
    return new Promise((resolve) => {
      resolve(Notification.permission === 'granted');
    });
  },

  _requestPermission() {
    return new Promise((resolve) => {
      Notification.requestPermission((status) => {
        if (status === 'denied') {
          console.log('Notification Denied');
        }
        if (status === 'default') {
          console.warn('Permission closed');
        }
        resolve();
      });
    });
  },

  _showNotification({ title, options }) {
    navigator.serviceWorker.ready
      .then((serviceWorkerRegistration) => {
        serviceWorkerRegistration.showNotification(title, options);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  },
};

export default NotificationHelper;

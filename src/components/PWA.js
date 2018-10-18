import React from 'react';

export default class PWA extends React.Component {
  constructor() {
    super();
    this.state = {
      installEvent: null,
    };
  }

  componentDidMount() {
    console.log('attaching event listener');
    document.addEventListener('beforeinstallprompt', this.handleEvent);
  }

  componentWillUnmount() {
    console.log('removing event listener');
    document.removeEventListener('beforeinstallprompt', this.handleEvent);
  }

  handleEvent = (installEvent) => {
    console.log(installEvent);
    this.setState({ installEvent });
  }

  render() {
    return null;
  }
}

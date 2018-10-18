import React from 'react';

export default class PWA extends React.Component {
  constructor() {
    super();
    this.state = {
      installEvent: null,
    };
  }

  componentDidMount() {
    console.info('attaching event listener');
    document.addEventListener('beforeinstallprompt', this.handleEvent);
  }

  componentWillUnmount() {
    console.info('removing event listener');
    document.removeEventListener('beforeinstallprompt', this.handleEvent);
  }

  handleEvent = (installEvent) => {
    console.info({ installEvent });
    this.setState({ installEvent });
  }

  render() {
    console.info(this.state);
    // console.error('hey');
    return null;
  }
}

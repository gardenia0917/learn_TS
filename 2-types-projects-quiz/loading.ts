{
  /**
   * Print Loading State
   */
  type LoadingState = {
    state: 'loading';
  };

  type SuccessState = {
    state: 'success';
    response: {
      body: string;
    };
  };

  type FailState = {
    state: 'fail';
    reason: string;
  };

  type ResourceLoadState = LoadingState | SuccessState | FailState;

  // function printLoginState(result: ResourceLoadState) {
  //   if (result.state === 'loading') {
  //     console.log(`👀 loading...`);
  //   } else if (result.state === 'success') {
  //     console.log(`😃 ${result.response.body}`);
  //   } else if (result.state === 'fail') {
  //     console.log(`😱 ${result.reason}`);
  //   } else {
  //     console.log('Error');
  //   }
  // }
  
  function printLoginState(state: ResourceLoadState) {
    switch (state.state) {
      case 'loading':
        console.log(`👀 loading...`);
        break;
      case 'success':
        console.log(`😃 ${state.response.body}`);
        break;
      case 'fail':
        console.log(`😱 ${state.reason}`);
        break;
      default:
        throw new Error(`unknown state: ${state}`)
    }
  }

  printLoginState({ state: 'loading' }); // 👀 loading...
  printLoginState({ state: 'success', response: { body: 'loaded' } }); // 😃 loaded
  printLoginState({ state: 'fail', reason: 'no network' }); // 😱 no network
}

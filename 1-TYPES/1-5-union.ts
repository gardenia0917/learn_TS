{
    /**
     * Union Types: OR
     */
    type Direction = 'left' | 'right' | 'up' | 'down';
    function move(direction: Direction) {
        console.log(direction);
    }
    move('down');

    type TileSize = 8 | 16 | 32;
    const tile: TileSize = 16;

    // Quiz1 function: login -> success, fail
    // 나의 답!
    // type Login = 'success' | 'fail';
    // function login(result: Login) {
    //     console.log(result);
    // }

    // 엘리가 알려주는 답
    type SuccessState = {
        response: {
            body: string;
        }
    }
    
    type FailState = {
        reason: string;
    }

    type LoginState = SuccessState | FailState;

    function login(): LoginState {
        return {
            response: {
                body: 'logged in',
            }
        }
    }

    // Quiz2 printLoginState(state: LoginState)
    // success -> 🎉 body
    // fail -> 😭 reason

    function printLoginState(state: LoginState) {
        if ('response' in state) {
            {
                console.log(`🎉 ${state.response.body}`);
            }
        }else {
                console.log(`😭 ${state.reason}`);
            }


    }
}
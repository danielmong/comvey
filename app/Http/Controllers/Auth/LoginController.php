<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Providers\RouteServiceProvider;
use App\Validator\LoginValidator;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;

class LoginController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Login Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles authenticating users for the application and
    | redirecting them to your home screen. The controller uses a trait
    | to conveniently provide its functionality to your applications.
    |
    */

    use AuthenticatesUsers;

    //    /**
    //     * Where to redirect users after login.
    //     *
    //     * @var string
    //     */
    //    protected $redirectTo = RouteServiceProvider::HOME;

    public function __construct(
        private LoginValidator $loginValidator
    ) {
        $this->middleware('guest')->except('logout');
    }

    public function redirectPath()
    {
        return Redirect::getIntendedUrl() ?? route('codepen.list');
    }

    public function showLoginForm()
    {
        if (url()->previous() != route('register') && Redirect::getIntendedUrl() === null) {
            Redirect::setIntendedUrl(url()->previous()); // make sure we redirect back to the page we came from
        }

        return view('auth.login');
    }

    protected function authenticated(Request $request, $user)
    {
        if (session()->has('redirectTo')) {
            return redirect(session('redirectTo'));  // Redirect back to the saved page
        }
        if ($user->is_blocked) {
            $this->guard()->logout();

            return redirect()->route('login')->withErrors([
                'email' => 'Your account has been blocked. Please contact support.',
            ]);
        }
        return redirect()->route('codepen.list');
    }

    protected function validateLogin(Request $request)
    {
        $this->loginValidator->validateRequest($request);
    }
}

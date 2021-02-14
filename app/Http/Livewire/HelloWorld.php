<?php

namespace App\Http\Livewire;

use Livewire\Component;

/**
 * Hello World
 *
 * @category PHP
 * @package  Laravel
 * @author   Joe Mags <joemags.apps@gmail.com>
 * @license  EULA https://en.wikipedia.org/wiki/End-user_license_agreement
 * @link     https://gitlab.com/joemags-apps Repo.
 * @at       2021-02-14 11:23:57
 */
class HelloWorld extends Component
{
    public $listeners = ['helloWorld'];

    /**
     * Render Livewire Template
     *
     * @return void
     */
    public function render()
    {
        return view('livewire.hello-world');
    }

    /**
     * Listener
     *
     * @param string $hello test
     *
     * @return void
     */
    public function helloWorld($hello)
    {
        $this->emit("yay", "Happy Coding!!!");
        dd("Yay!", $hello);
    }
}

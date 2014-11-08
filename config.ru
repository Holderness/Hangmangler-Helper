require 'bundler'
Bundler.require

require './models/user'
require './models/hangman'
require './models/tictactoe'
require './models/word'

require './helpers/authentication_helper'
require './helpers/hangmangler_helper'


require './controllers/application_controller'
require './controllers/welcome_controller'
require './controllers/hangman_controller'
require './controllers/tictactoe_controller'
require './controllers/sessions_controller'
require './controllers/users_controller'



map('/users'){ run UsersController }
map('/sessions'){ run SessionsController }
map('/hangman'){ run HangmanController }
map('/tictactoe'){ run TicTacToeController }
map('/'){ run WelcomeController }

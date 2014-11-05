require 'bundler'
Bundler.require

require './models/user'
require './models/hangman'
require './models/wordbank'


require './controllers/application_controller'
require './controllers/welcome_controller'
require './controllers/hangman_controller'
require './controllers/users_controller'
require './controllers/sessions_controller'


map('/users'){ run UsersController }
map('/sessions'){ run SessionsController }
map('/hangman'){ run HangmanController }
map('/'){ run WelcomeController }

class HangmanController < ApplicationController

	helpers Sinatra::HangmanglerHelper

	get '/game' do
    authenticate!
		@current_game = current_user.hangmen.where(complete: false).first
		if @current_game != nil
			@current_game.word.word
			@game_state = @current_game.game_state
			@incorrect_guesses = @current_game.incorrect_guesses
      @readable_game_state = space_out_chars(@game_state)
		end
		erb :'hangman/index'
	end


  post '/game' do
    authenticate!
  	hangman_word = Word.limit(1).order("RANDOM()")[0] ## Doesn't work well with large data, ##refactor##
  	## better than Word.all.sample though.
  	@game_state = create_game_state(hangman_word.word)
  	if current_user.hangmen.where(complete: false).first.nil?
  	  Hangman.create(word: hangman_word, user: current_user, game_state: @game_state, complete: false)
  	end
  end
  

  patch '/game' do
    authenticate!
  	guess = params["guess"]
  	@current_game = current_user.hangmen.where(complete: false).first
    current_user.hangmen_won_id ||= 0

    if @current_game != nil 
  	  @hangman_word = @current_game.word.word
  	  @incorrect_guesses = update_incorrect_guesses(@current_game.incorrect_guesses, guess, @hangman_word)
  	  @game_state = update_game_state(params["guess"], @hangman_word, @current_game.game_state)
      @readable_game_state = space_out_chars(@game_state)

  	  params[:data] ||= {}
  	  params[:data][:user_id] = current_user.id
  	  params[:data][:game_state] = @game_state
  	  params[:data][:incorrect_guesses] = @incorrect_guesses
  	  params[:data][:complete] = true if @incorrect_guesses.length >= 6

  	  Hangman.update(@current_game.id, params[:data])

  	  if @game_state == @hangman_word
        Hangman.update(@current_game.id, complete: true)
  	  end
 
    end

    erb :'hangman/index'
  end



end
























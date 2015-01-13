class TicTacToeController < ApplicationController

	get '/game' do
		authenticate!
		erb :'tictactoe/index'
	end



end